# Quick Start

Get the project running locally in a few minutes.

## Prerequisites

- [Node.js](https://nodejs.org) 22.x (specified in `package.json` engines)
- [pnpm](https://pnpm.io) 10.x (specified in `package.json` engines)

Check versions:

```bash
node --version
pnpm --version
```

## Setup

1. Clone the repository:

```bash
git clone https://github.com/samhwang/samhwang.github.io.git
cd samhwang.github.io
```

2. Install dependencies:

```bash
pnpm install
```

This also runs `pnpm prepare`, which initializes [Husky](https://typicode.github.io/husky/) git hooks and generates [PandaCSS](https://panda-css.com) utilities.

3. Start the development server:

```bash
pnpm dev
```

Open the URL shown in the terminal (default: `http://localhost:5173`). [Vite](https://vite.dev) provides hot module replacement, so changes appear instantly.

## Common Tasks

### Run tests

```bash
pnpm test          # Watch mode (interactive)
pnpm test:run      # Single run (CI)
```

Tests use [Vitest](https://vitest.dev) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### Check code quality

```bash
pnpm typecheck     # TypeScript type checking
pnpm lint          # Lint with Biome (read-only)
pnpm lint:fix      # Auto-fix safe issues
```

[Biome](https://biomejs.dev) handles both linting and formatting. No separate prettier or eslint needed.

### Build for production

```bash
pnpm build         # Production build to dist/
pnpm preview       # Preview the production build locally
```

### Full quality check before pushing

```bash
pnpm typecheck && pnpm lint && pnpm test:run && pnpm build
```

## What's Next

- [Add a Resume Section](./02-add-resume-section.md) — Create a new section component
- [Commands Reference](../reference/01-commands.md) — Full list of available scripts
- [Architecture](../explanation/01-architecture.md) — Why this tech stack
