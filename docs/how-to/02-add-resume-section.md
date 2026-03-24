# Add a Resume Section

How to add a new section to the resume page, following the existing component patterns.

## 1. Create the component file

Add a new file in `src/resume/` using kebab-case naming:

```bash
src/resume/projects.tsx
```

Use a functional component with a props interface:

```typescript
import * as commonStyles from './common.styles';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  if (projects.length === 0) return null;

  return (
    <section>
      <h2 className={commonStyles.heading}>Projects</h2>
      <div className={commonStyles.container}>
        {projects.map((project) => (
          <div key={project.name}>
            <h3>{project.name}</h3>
            <p className={commonStyles.textPrimary}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
```

Key patterns:
- Import shared styles from `common.styles.ts` for headings, containers, and text
- Use [PandaCSS](https://panda-css.com) `css()` for component-specific styles (inline for single use, constant for repeated use)
- Define a `Props` interface with the component name prefix (e.g., `ProjectsSectionProps`)
- Use early returns for empty or loading states

## 2. Add component-specific styles

For styles used multiple times within the component, define a constant:

```typescript
import { css } from '../../styled-system/css';
import * as commonStyles from './common.styles';

const projectCardStyle = css({
  padding: '1rem',
  borderBottom: '1px solid',
  borderColor: 'gray.200',
  lg: {
    padding: '1.5rem',
  },
});

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => (
  <section>
    <h2 className={commonStyles.heading}>Projects</h2>
    {projects.map((project) => (
      <div key={project.name} className={projectCardStyle}>
        {project.name}
      </div>
    ))}
  </section>
);
```

For styles used only once, inline them directly:

```typescript
<hr className={css({ margin: 0 })} />
```

Only create a separate `.styles.ts` file if the component has many styles (like `sidebar.styles.ts`). See [Design Tokens](../reference/03-design-tokens.md) for available colors, fonts, and breakpoints.

## 3. Write tests

Create a test file alongside the component:

```bash
src/resume/projects.test.tsx
```

Use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) with the project's render wrapper:

```typescript
import { render, screen } from '../test-utils/render-wrapper';
import { ProjectsSection } from './projects';

const mockProjects = [
  { name: 'Project A', description: 'Description A' },
  { name: 'Project B', description: 'Description B' },
];

describe('ProjectsSection', () => {
  it('renders project names', () => {
    render(<ProjectsSection projects={mockProjects} />);

    expect(screen.getByText('Project A')).toBeInTheDocument();
    expect(screen.getByText('Project B')).toBeInTheDocument();
  });

  it('renders nothing when no projects', () => {
    const { container } = render(<ProjectsSection projects={[]} />);

    expect(container.innerHTML).toBe('');
  });

  it('matches snapshot', () => {
    const { container } = render(<ProjectsSection projects={mockProjects} />);

    expect(container).toMatchSnapshot();
  });
});
```

Use the `render` import from `test-utils/render-wrapper` (not directly from `@testing-library/react`) to get routing and metadata providers automatically.

## 4. Integrate into the layout

Add the new section to the resume layout in `src/resume/layout.tsx`:

```typescript
import { ProjectsSection } from './projects';

// Add within the layout JSX, in the desired position
<ProjectsSection projects={metadata.projects} />
```

Resume data comes from the metadata module. Add the new data shape to the metadata types and data files as needed.

## 5. Verify

```bash
pnpm typecheck        # Types compile
pnpm lint             # No lint issues
pnpm test:run         # Tests pass
pnpm dev              # Visual check in browser
```

## Reference

- [Project Structure](../reference/02-project-structure.md) — Where files go
- [Design Tokens](../reference/03-design-tokens.md) — Available PandaCSS tokens
- [Commands](../reference/01-commands.md) — All pnpm scripts
