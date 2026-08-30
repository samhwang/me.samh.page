# Add a Resume Section

How to add a new section to the resume page, following the existing component patterns.

## 1. Add metadata types and data

Add the new data type to `metadata/metadata.ts`:

```typescript
export type Certifications = {
  name: string;
  issuer: string;
  date: string;
};
```

Add the new data field to `PersonalInformation` in `metadata/metadata.ts`:

```typescript
export type PersonalInformation = {
  // ... existing fields
  certifications: Certifications[];
};
```

Add the actual data to the `personalInformation` object in `metadata/metadata.ts`:

```typescript
personalInformation: {
  // ... existing fields
  certifications: [
    {
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Jan 2024',
    },
  ],
},
```

## 2. Create a data hook

Add a hook in `metadata/use-metadata.ts` to expose the data:

```typescript
import type { Certifications } from './metadata';

export type CertificationsData = Certifications[];
export function useCertificationsData(): CertificationsData {
  const { certifications } = metadata.personalInformation;
  return certifications;
}
```

## 3. Add mock data for tests

Add mock data to `src/test-utils/mock-metadata.ts`:

```typescript
import type { CertificationsData } from '../../metadata/use-metadata';

export const certificationsData: CertificationsData = [
  {
    name: 'Test Certification',
    issuer: 'Test Issuer',
    date: 'Jan 2024',
  },
];
```

## 4. Create the component file

Add a new file in `src/resume/` using kebab-case naming:

```bash
src/resume/certifications.tsx
```

Use a functional component with a default export. Fetch data via the hook pattern:

```typescript
import { useCertificationsData } from '../../metadata/use-metadata';
import { css } from '../../styled-system/css';
import * as commonStyles from '../ui/common.styles';

function Certification({ name, issuer, date }: CertificationProps) {
  return (
    <li className={css({ marginBottom: '0.5rem' })}>
      <strong>{name}</strong> — {issuer} ({date})
    </li>
  );
}

export default function CertificationsSection() {
  const certifications = useCertificationsData();

  if (certifications.length === 0) return null;

  return (
    <div className={commonStyles.container}>
      <h2 className={commonStyles.heading}>Certifications</h2>
      <ul className={css({ listStyle: 'none', paddingLeft: 0, marginBottom: 0 })}>
        {certifications.map(({ name, issuer, date }) => (
          <Certification key={name} name={name} issuer={issuer} date={date} />
        ))}
      </ul>
    </div>
  );
}
```

Key patterns:

- Import shared styles from `common.styles.ts` for headings, containers, and text
- Use [PandaCSS](https://panda-css.com) `css()` for component-specific styles (inline for single use, constant for repeated use)
- Use the hook pattern (`useXxxData()`) to fetch data from metadata — do not pass data as props
- Use default exports for components
- Use early returns for empty states

## 5. Add component-specific styles

For styles used multiple times within the component, define a constant:

```typescript
const cardStyle = css({
  padding: '1rem',
  borderBottom: '1px solid',
  borderColor: 'gray.200',
  lg: {
    padding: '1.5rem',
  },
});
```

For styles used only once, inline them directly:

```typescript
<hr className={css({ margin: 0 })} />
```

Only create a separate `.styles.ts` file if the component has many styles (like `sidebar.styles.ts`). See [Design Tokens](../reference/03-design-tokens.md) for available colors, fonts, and breakpoints.

## 6. Write tests

Create a test file alongside the component:

```bash
src/resume/certifications.test.tsx
```

Use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) directly (not via a render wrapper). Import mock data from `test-utils/mock-metadata`:

```typescript
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { certificationsData as mockData } from '../test-utils/mock-metadata';
import CertificationsSection from './certifications';

describe('CertificationsSection', () => {
  it('should match snapshot', () => {
    const { container } = render(<CertificationsSection />);
    expect(container).toMatchSnapshot();
  });

  it('displays the section heading', () => {
    render(<CertificationsSection />);
    const heading = screen.getByRole('heading', { name: 'Certifications', level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('displays certification information', () => {
    render(<CertificationsSection />);

    const item = mockData[0];
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.issuer)).toBeInTheDocument();
  });
});
```

## 7. Integrate into the resume page

Add the new section to `src/routes/index.tsx`:

```typescript
import CertificationsSection from './certifications';

// Add to the sections array in the desired position
const sections = [
  { id: 'about', content: <About /> },
  { id: 'experience', content: <Experiences /> },
  { id: 'certifications', content: <CertificationsSection /> },
  { id: 'education', content: <Education /> },
  // ...
];
```

## 8. Verify

```bash
pnpm typecheck        # Types compile
pnpm lint             # No lint issues
pnpm test         # Tests pass
pnpm dev              # Visual check in browser
```

## Reference

- [Project Structure](../reference/02-project-structure.md) — Where files go
- [Design Tokens](../reference/03-design-tokens.md) — Available PandaCSS tokens
- [Commands](../reference/01-commands.md) — All pnpm scripts
