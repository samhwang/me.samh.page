---
name: add-resume-section
description: Add a new section to the resume page with component, tests, metadata, and integration
---

# Add Resume Section Skill

## Purpose

Create a complete resume section following the established patterns: metadata types, data hooks, component, tests, and page integration.

## Trigger Condition

When user asks to:

- Add a new resume section
- Add a new section to the resume page
- Create a new resume component

## Workflow

### Step 1: Gather Section Details

Ask the user for:

- **Section name** (e.g., "Certifications", "Awards", "Publications")
- **Data shape** (what fields each item has, e.g., name, issuer, date)
- **Position** in the resume (order among existing sections)
- **Special rendering needs** (links, icons, conditional display)

### Step 2: Add Metadata Types

Add the new type to `metadata/metadata.ts`:

```typescript
export type SectionName = {
  field1: string;
  field2: string;
  field3?: string; // optional fields use ?
};
```

Add the field to `PersonalInformation` in the same file:

```typescript
export type PersonalInformation = {
  // ... existing fields
  sectionName: SectionName[];
};
```

Add the actual data to the `personalInformation` object in `metadata/metadata.ts`.

### Step 3: Create Data Hook

Add to `metadata/use-metadata.ts`:

```typescript
import type { SectionName } from './metadata';

export type SectionNameData = SectionName[];
export function useSectionNameData(): SectionNameData {
  const { sectionName } = metadata.personalInformation;
  return sectionName;
}
```

### Step 4: Add Mock Data

Add to `src/test-utils/mock-metadata.ts`:

```typescript
import type { SectionNameData } from '../../metadata/use-metadata';

export const sectionNameData: SectionNameData = [
  {
    field1: 'Test Item 1',
    field2: 'Test Value',
  },
];
```

### Step 5: Create Component

Create `src/resume/section-name.tsx` (kebab-case filename):

```tsx
import { useSectionNameData } from '../../metadata/use-metadata';
import { css } from '../../styled-system/css';
import * as commonStyles from './common.styles';

interface ItemProps {
  field1: string;
  field2: string;
  field3?: string;
}

function Item({ field1, field2, field3 }: ItemProps) {
  return (
    <li className={css({ marginBottom: '0.5rem' })}>
      <strong>{field1}</strong> — {field2}
      {field3 && ` (${field3})`}
    </li>
  );
}

export default function SectionNameSection() {
  const items = useSectionNameData();

  if (items.length === 0) return null;

  return (
    <div className={commonStyles.container}>
      <h2 className={commonStyles.heading}>Section Name</h2>
      <ul className={css({ listStyle: 'none', paddingLeft: 0, marginBottom: 0 })}>
        {items.map((item) => (
          <Item key={item.field1} {...item} />
        ))}
      </ul>
    </div>
  );
}
```

**Patterns to follow:**

- Default export for the main component
- Hook pattern for data (`useXxxData()`)
- Early return for empty state
- Import `commonStyles` from `./common.styles`
- Use `css()` from `styled-system/css` for component-specific styles
- Inline single-use styles, define constants for repeated styles

### Step 6: Write Tests

Create `src/resume/section-name.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { sectionNameData as mockData } from '../test-utils/mock-metadata';
import SectionNameSection from './section-name';

describe('SectionNameSection', () => {
  it('should match snapshot', () => {
    const { container } = render(<SectionNameSection />);
    expect(container).toMatchSnapshot();
  });

  it('displays the section heading', () => {
    render(<SectionNameSection />);
    const heading = screen.getByRole('heading', { name: 'Section Name', level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('displays item information', () => {
    render(<SectionNameSection />);
    const item = mockData[0];
    expect(screen.getByText(item.field1)).toBeInTheDocument();
  });
});
```

**Test patterns:**

- Import `render` and `screen` from `@testing-library/react` directly
- Import mock data from `../test-utils/mock-metadata`
- Include snapshot test
- Test heading renders with correct name and level
- Test item data displays

### Step 7: Integrate into Page

Add to `src/resume/page.tsx`:

```typescript
import SectionNameSection from './section-name';

// Add to sections array in desired position
const sections = [
  { id: 'about', content: <About /> },
  // ... other sections
  { id: 'section-name', content: <SectionNameSection /> },
  // ...
];
```

### Step 8: Verify

```bash
pnpm typecheck
pnpm lint
pnpm test:run
pnpm dev
```

## Checklist

- [ ] Type added to `metadata/metadata.ts`
- [ ] Field added to `PersonalInformation` type
- [ ] Data added to `personalInformation` object
- [ ] Hook created in `metadata/use-metadata.ts`
- [ ] Mock data added to `src/test-utils/mock-metadata.ts`
- [ ] Component created at `src/resume/section-name.tsx`
- [ ] Component uses default export
- [ ] Component uses hook pattern for data
- [ ] Component has early return for empty state
- [ ] Test file created at `src/resume/section-name.test.tsx`
- [ ] Tests include snapshot, heading, and data assertions
- [ ] Section added to `src/resume/page.tsx` sections array
- [ ] `pnpm typecheck` passes
- [ ] `pnpm lint` passes
- [ ] `pnpm test:run` passes

## Notes

- Section name should be PascalCase in code, kebab-case in filename
- Hook name follows `useXxxData()` pattern
- Section ID in page.tsx should be kebab-case
- Use `commonStyles.heading` for h2, `commonStyles.container` for wrapper
- If the section needs many unique styles, create a `section-name.styles.ts` file
