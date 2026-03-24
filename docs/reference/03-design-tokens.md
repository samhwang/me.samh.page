# Design Tokens

[PandaCSS](https://panda-css.com) design tokens defined in `panda.config.ts`. Use these tokens in `css()` calls instead of raw values.

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | Green-800 | Primary brand color, headings, links |
| `slightlyDarker` | Green-900 | Hover states, emphasis |
| `gray.600` | Standard gray | Secondary text, borders |

```typescript
css({
  color: 'primary',
  backgroundColor: 'slightlyDarker',
  borderColor: 'gray.600',
})
```

## Fonts

| Token | Font Family | Usage |
|-------|-------------|-------|
| `body` | [Mulish](https://fonts.google.com/specimen/Mulish) | Body text, paragraphs |
| `heading` | [Saira Extra Condensed](https://fonts.google.com/specimen/Saira+Extra+Condensed) | Section headings, titles |

```typescript
css({
  fontFamily: 'body',    // Mulish
})

css({
  fontFamily: 'heading', // Saira Extra Condensed
})
```

## Sizes

| Token | Value | Usage |
|-------|-------|-------|
| `sidebarWidth` | 17rem | Sidebar width on desktop |

```typescript
css({
  width: 'sidebarWidth',
})
```

## Breakpoints

Mobile-first responsive design. Default styles apply to mobile, then override at larger sizes.

| Breakpoint | Min Width |
|------------|-----------|
| `sm` | Small screens |
| `md` | Tablet |
| `lg` | Desktop |
| `xl` | Large desktop |
| `2xl` | Extra large |

```typescript
css({
  fontSize: '1rem',           // Mobile (default)
  md: { fontSize: '1.5rem' }, // Tablet and up
  lg: { fontSize: '2rem' },   // Desktop and up
})
```

### Mobile-first pattern

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
  },
})
```
