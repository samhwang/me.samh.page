# Rule: Patterns

Frontend-focused patterns for React, TanStack Router, and PandaCSS.

## React 19 Patterns

### Component Design

#### Functional Components

Use functional components with hooks exclusively:

```typescript
export const UserProfile = ({ userId }: UserProfileProps) => {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  if (!user) return <LoadingSpinner />;
  
  return <div>{user.name}</div>;
};
```

#### Props Interface

Define props interfaces with clear naming:

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = ({ 
  label, 
  onClick, 
  variant = 'primary', 
  disabled = false 
}: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
```

### Custom Hooks

#### Naming & Location

- **Prefix with `use`**: `useMetadata`, `useIconClass`
- **Separate file**: `use-hook-name.ts`
- **Co-locate** with related components when specific to that feature

**Example:**
```typescript
// use-icon-class.ts
export const useIconClass = (iconType: string): string => {
  const baseClass = 'devicon';
  return `${baseClass}-${iconType}`;
};
```

#### Hook Pattern

```typescript
export const useCustomHook = (param: string) => {
  const [state, setState] = useState();
  
  useEffect(() => {
    // Side effects
  }, [param]);
  
  return { state, setState };
};
```

### React Compiler Considerations

Project uses React Compiler (`babel-plugin-react-compiler`).

**Compiler-friendly patterns:**
- Avoid manual memoization (`useMemo`/`useCallback`) unless proven necessary
- Keep components pure (no side effects in render)
- Avoid mutating props or state
- Let the compiler optimize automatically

**When manual optimization is needed:**
- Expensive computations that are measurably slow
- Functions passed to deeply nested children
- Large lists or data structures

### State Management

#### Local State

Use `useState` for component-specific state:

```typescript
const [isOpen, setIsOpen] = useState(false);
const [count, setCount] = useState(0);
```

#### Derived State

Compute from existing state instead of storing:

**✅ Good:**
```typescript
const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
const hasItems = items.length > 0;
```

**❌ Bad:**
```typescript
const [totalPrice, setTotalPrice] = useState(0);
// Manually updating totalPrice when items change
```

#### Shared State

For cross-component state, consider:
1. **Lift state up** to common parent
2. **Context API** for deeply nested components
3. **Custom hooks** to encapsulate logic (like `useMetadata`)

**Example with Context:**
```typescript
const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be within ThemeProvider');
  return context;
};
```

### Event Handlers

#### Naming

Prefix with `handle`: `handleClick`, `handleSubmit`, `handleChange`

#### Inline vs Declared

- **Simple handlers**: Inline arrow functions OK
- **Complex logic**: Declare named handler

**✅ Simple (inline OK):**
```typescript
<button onClick={() => setCount(count + 1)}>Increment</button>
```

**✅ Complex (declare):**
```typescript
const handleFormSubmit = (event: FormEvent) => {
  event.preventDefault();
  // Complex validation and submission logic
  validateForm();
  submitData();
};

<form onSubmit={handleFormSubmit}>
```

### Conditional Rendering

Use early returns and logical operators:

```typescript
// Early returns
if (isLoading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;

// Logical AND
{hasData && <DataDisplay data={data} />}

// Ternary (for two options)
{isLoggedIn ? <Dashboard /> : <Login />}
```

## TanStack Router Patterns

### File-Based Routing

Routes defined in `src/routes/`:
- `__root.tsx`: Root layout, wraps all routes
- `index.tsx`: Homepage (/)
- Future routes: `about.tsx` (/about), `blog/index.tsx` (/blog)

### Route Components

#### Root Layout (__root.tsx)

Provides common layout/providers:

```typescript
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />  {/* Child routes render here */}
      </main>
      <Footer />
    </>
  );
}
```

#### Page Routes

Export Route using `createFileRoute`:

```typescript
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return <div>Home Content</div>;
}
```

### Type-Safe Navigation

TanStack Router provides type-safe navigation:

```typescript
import { useNavigate } from '@tanstack/react-router';

const navigate = useNavigate();

navigate({ to: '/about' });  // Type-checked path
navigate({ to: '/' });       // Also type-checked
```

### Route Generation

`src/route-tree.gen.ts` is **auto-generated**:
- Happens automatically during dev server
- Can manually trigger with `pnpm tanstack-router generate`
- **DO NOT** manually edit this file

## PandaCSS Patterns

### Styling Approaches

#### Inline Styles with css()

```typescript
import { css } from '../../styled-system/css';

export const Component = () => (
  <div className={css({ 
    color: 'primary', 
    fontSize: '2rem',
    padding: '1rem',
    lg: { 
      fontSize: '3rem',
      padding: '2rem',
    }
  })}>
    Content
  </div>
);
```

#### Reusable Styles Files

Define styles in `*.styles.ts`:

```typescript
// component.styles.ts
import { css } from '../../styled-system/css';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  lg: {
    flexDirection: 'row',
    gap: '2rem',
  }
});

export const headingStyle = css({
  fontFamily: 'heading',
  color: 'primary',
  fontSize: '2rem',
});
```

```typescript
// component.tsx
import { containerStyle, headingStyle } from './component.styles';

export const Component = () => (
  <div className={containerStyle}>
    <h2 className={headingStyle}>Title</h2>
  </div>
);
```

#### Dynamic Styles

Conditionally apply styles:

```typescript
const buttonStyle = (variant: 'primary' | 'secondary') => css({
  padding: '0.5rem 1rem',
  borderRadius: '0.25rem',
  backgroundColor: variant === 'primary' ? 'primary' : 'gray.200',
  color: variant === 'primary' ? 'white' : 'gray.800',
});

<button className={buttonStyle('primary')}>Click</button>
```

### Design Tokens

Use tokens from `panda.config.ts`:

#### Colors

- `primary`: Green-800
- `slightlyDarker`: Green-900
- Standard palette: `gray.600`, `green.800`, etc.

**Usage:**
```typescript
css({
  color: 'primary',
  backgroundColor: 'slightlyDarker',
  borderColor: 'gray.600',
})
```

#### Fonts

- `body`: Mulish (for body text)
- `heading`: Saira Extra Condensed (for headings)

**Usage:**
```typescript
css({
  fontFamily: 'body',    // Mulish
  fontFamily: 'heading', // Saira Extra Condensed
})
```

#### Sizes

- `sidebarWidth`: 17rem

**Usage:**
```typescript
css({
  width: 'sidebarWidth',
})
```

### Responsive Design

Use breakpoint notation:

```typescript
css({
  fontSize: '1rem',           // Mobile (default)
  md: { fontSize: '1.5rem' }, // Tablet
  lg: { fontSize: '2rem' }    // Desktop
})
```

**Available breakpoints**: `sm`, `md`, `lg`, `xl`, `2xl`

**Pattern for mobile-first design:**
```typescript
css({
  // Mobile defaults
  display: 'block',
  padding: '1rem',
  
  // Tablet and up
  md: {
    padding: '1.5rem',
  },
  
  // Desktop and up
  lg: {
    display: 'flex',
    padding: '2rem',
  }
})
```

### Global Styles

Defined in `panda.config.ts`:
- Applied to HTML elements (body, h1-h6, ul, li)
- Use for baseline styles only
- **Avoid overuse** - prefer component-scoped styles

**When to use global styles:**
- Typography defaults (body font, heading fonts)
- Layout defaults (body padding)
- List styles (ul, li)

**When to use component styles:**
- Component-specific styling
- Layout variations
- Interactive states

## Testing Patterns

### Component Testing

Use React Testing Library:

```typescript
import { render, screen } from '../test-utils/render-wrapper';
import { UserProfile } from './user-profile';

describe('UserProfile', () => {
  it('displays user name', () => {
    render(<UserProfile name="John Doe" />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
  
  it('displays loading state', () => {
    render(<UserProfile isLoading={true} />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
```

### Testing Utilities

Use `render-wrapper.tsx` for tests needing providers:
- Provides routing context (TanStack Router)
- Provides metadata context
- Wraps with necessary providers automatically

**Usage:**
```typescript
import { render } from '../test-utils/render-wrapper';

render(<Component />); // Already wrapped with providers
```

### Snapshot Tests

For stable component structures:

```typescript
import { render } from '../test-utils/render-wrapper';
import { Component } from './component';

describe('Component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Component />);
    expect(container).toMatchSnapshot();
  });
});
```

**Important**: Snapshots stored in `__snapshots__/` (auto-generated, don't edit)

### User Interactions

Use `@testing-library/user-event`:

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('handles click', async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();
  
  render(<Button onClick={handleClick} />);
  
  await user.click(screen.getByRole('button'));
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Testing Hooks

Test custom hooks via component or directly:

**Via component:**
```typescript
const TestComponent = () => {
  const iconClass = useIconClass('react');
  return <div>{iconClass}</div>;
};

it('returns correct icon class', () => {
  render(<TestComponent />);
  expect(screen.getByText('devicon-react')).toBeInTheDocument();
});
```

**Directly with renderHook:**
```typescript
import { renderHook } from '@testing-library/react';

it('returns correct icon class', () => {
  const { result } = renderHook(() => useIconClass('react'));
  expect(result.current).toBe('devicon-react');
});
```

## Performance Patterns

### Code Splitting

Vite handles automatically, but you can use lazy loading:

```typescript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./heavy-component'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

**When to use lazy loading:**
- Large components not needed on initial render
- Route-based code splitting
- Modal dialogs or overlays
- Admin or infrequently used features

### Image Optimization

- Use **WebP format** when possible
- Include fallbacks for older browsers
- Use appropriate sizes (e.g., `avatar.jpg` vs `avatar.webp`)
- Lazy load images below the fold

**Example:**
```typescript
<picture>
  <source srcSet="/img/avatar.webp" type="image/webp" />
  <img src="/img/avatar.jpg" alt="Avatar" />
</picture>
```

### Avoid Premature Optimization

- Write clean, readable code first
- Measure performance before optimizing
- Use browser DevTools to identify bottlenecks
- React Compiler handles most optimizations automatically

**When to optimize:**
- Measured performance issues
- Large lists (1000+ items)
- Complex calculations in render
- Frequent re-renders

## Common Patterns

### Loading States

```typescript
const Component = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <NoData />;
  
  return <DataDisplay data={data} />;
};
```

### Form Handling

```typescript
const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submitForm(formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
```

### List Rendering

```typescript
const List = ({ items }: { items: Item[] }) => {
  if (items.length === 0) return <EmptyState />;
  
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ItemComponent item={item} />
        </li>
      ))}
    </ul>
  );
};
```

**Important**: Always use unique `key` prop when rendering lists.
