# Theming Refactor Plan

Move component styles from `*.styles.ts` files into PandaCSS theme recipes/slot-recipes, living under `src/ui`.

## Scope

Convert all three style files to PandaCSS theming. Theme code goes in separate files under `src/ui`, registered in `panda.config.ts`.

### Files

| Current file                | Destination                              |
| --------------------------- | ---------------------------------------- |
| `src/ui/sidebar.styles.ts`  | `src/ui/sidebar.recipe.ts` (slot recipe) |
| `src/ui/common.styles.ts`   | `src/ui/common.recipes.ts` (recipes)     |
| `src/resume/icon.styles.ts` | `src/ui/icon.recipes.ts` (recipes)       |

Delete the three source files after conversion.

## Phase 1 — Non-one-liner styles (do first, commit each step)

### 1a. Sidebar slot recipe

- `sidebar` = `defineSlotRecipe`, `className: 'sidebar'`, 12 slots:
  `navigation, brand, nameText, avatarContainer, avatar, menuToggle, menuIcon, menu, navListWrapper, navList, navItem, navLink`
- Each slot `base` = the body of the corresponding `css({...})` from `sidebar.styles.ts`.
- Handle responsive (`lg:`), nested selectors (`'& a'`, `'&:hover'`, `'&[data-visible="true"]'`), and the `menuIcon` data-URI background.
- Register under `theme.extend.slotRecipes`.
- Update `src/ui/sidebar.tsx` to consume via `sidebar()` from `styled-system/recipes`.
- Delete `src/ui/sidebar.styles.ts`.

### 1b. Common multi-line recipes

- Convert `section`, `subheading`, `link` (multi-property/responsive/wrapper) to `defineRecipe` in `src/ui/common.recipes.ts`.
- Register under `theme.extend.recipes`.
- Update consumers: `error-section.tsx`, `footer.tsx`, `routes/index.tsx`, `experience.tsx`, `education.tsx`, `projects.tsx`, `skills.tsx`, `about.tsx`.

### 1c. Icon recipes

- Convert `socialIcons`, `devIcons` to `defineRecipe` in `src/ui/icon.recipes.ts`.
- Register under `theme.extend.recipes`.
- Update consumers: `about.tsx` (socialIcons), `experience.tsx` + `skills.tsx` (devIcons, wrapped in `cx(...)` with `inlineList()`).

## Phase 2 — One-liners (DECISION DEFERRED)

Single-property styles from `common.styles.ts`:

- `container` — `{ width: '100%' }`
- `heading` — `{ marginBottom: 'headingMargin' }`
- `title` — `{ marginBottom: 0 }`
- `textPrimary` — `{ color: 'primary' }`
- `bgPrimary` — `{ backgroundColor: 'primary' }` (unused anywhere — likely delete regardless)

Options: (A) convert to recipes, or (B1) keep in a lean `common.styles.ts` as `css()`. `bgPrimary` should be deleted in both. Decide before finishing.

## Verification

- Regenerate `styled-system` via `pnpm build` (or whatever regenerates recipes) after config changes.
- `pnpm typecheck`, `pnpm lint`, `pnpm test` before each commit.
- Update docs via `update-docs` skill (structure changed).
