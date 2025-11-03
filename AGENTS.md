# AGENTS.md - Development Guidelines

## Commands
- **Build**: `pnpm build`
- **Lint**: `pnpm lint` (check) or `pnpm lint:fix` (fix)
- **Test**: `pnpm test` (all tests) or `npx vitest run path/to/test.test.ts` (single test)
- **Typecheck**: `pnpm typecheck`
- **Format**: Use `pnpm lint:fix` (Biome handles formatting)

## Code Style
- **Formatting**: 2 spaces, single quotes, semicolons, trailing commas (ES5), 160 char line width
- **Imports**: Use `type` imports for types (`import type { Foo } from 'bar'`), organize imports automatically
- **Types**: Strict TypeScript, prefer explicit types, `noExplicitAny` disabled but use sparingly
- **Naming**: camelCase for variables/functions, PascalCase for types/classes, UPPER_CASE for constants
- **Files**: kebab-case for file names, `.test.tsx` suffix for tests
- **Exports**: Default export for main module, named exports for utilities

## Project Structure
- React app with TanStack Router, Vite build, Vitest testing, Biome linting
- Uses PandaCSS for styling, TypeScript strict mode
- Test coverage focused on `src/resume/**` and `src/icons/**` components
