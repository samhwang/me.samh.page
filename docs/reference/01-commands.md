# Commands Reference

All available [pnpm](https://pnpm.io) scripts for development, testing, and deployment.

## Scripts Summary

| Command                | Purpose                                                                                                                                |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`             | Development server with HMR ([Vite](https://vite.dev))                                                                                 |
| `pnpm build`           | Production build to `dist/`                                                                                                            |
| `pnpm preview`         | Preview production build locally                                                                                                       |
| `pnpm typecheck`       | [TypeScript](https://www.typescriptlang.org/) type checking                                                                            |
| `pnpm lint`            | Lint + format check ([Oxlint](https://oxc.rs/docs/guide/usage/linter) + [Oxfmt](https://oxc.rs/docs/guide/usage/formatter), read-only) |
| `pnpm lint:fix`        | Auto-fix linting issues and format files                                                                                               |
| `pnpm lint:fix:unsafe` | Fix including unsafe transformations                                                                                                   |
| `pnpm ci`              | Full check: lint + typecheck + test                                                                                                    |
| `pnpm test`            | Run tests once ([Vitest](https://vitest.dev))                                                                                          |
| `pnpm test:coverage`   | Run tests with coverage reports                                                                                                        |
| `pnpm panda:codegen`   | Generate [PandaCSS](https://panda-css.com) utilities                                                                                   |
| `pnpm githooks:init`   | Initialize [Husky](https://typicode.github.io/husky/) hooks                                                                            |
| `pnpm prepare`         | Post-install setup (hooks + PandaCSS)                                                                                                  |

## Git Hooks

### Pre-commit

Runs automatically on every commit via [Husky](https://typicode.github.io/husky/) and lint-staged:

- Formats changed files with [Oxfmt](https://oxc.rs/docs/guide/usage/formatter)
- Fixes safe linting issues with [Oxlint](https://oxc.rs/docs/guide/usage/linter)

### Pre-push

Configured in `.lint-prepushrc.json`:

- Runs linting checks before push
- Prevents problematic code from reaching remote

## Environment Requirements

- [Node.js](https://nodejs.org) 24.x (specified in `package.json` engines)
- [pnpm](https://pnpm.io) 10.x (specified in `package.json` engines)

## Troubleshooting

### PandaCSS styles not updating

```bash
rm -rf styled-system/
pnpm panda:codegen
```

Regenerates the [PandaCSS](https://panda-css.com) `styled-system/` utilities from scratch.

### TypeScript errors not matching editor

```bash
pnpm typecheck
```

The CLI check is more comprehensive than editor feedback. Trust this output.

### Test failures

```bash
pnpm test              # See all failures at once
pnpm test:coverage     # Run tests with coverage reports
pnpm test -- -u        # Update snapshots (review changes carefully)
```

### Clean install

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

Use when dependencies are corrupted or lockfile is stale.

### Adding dependencies

```bash
pnpm install <package>           # Production dependency
pnpm install -D <package>        # Dev dependency
```

Always commit `pnpm-lock.yaml` changes.
