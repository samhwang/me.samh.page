# Rule: Commands

Quick reference for all pnpm scripts and tooling commands.

## Development Workflow

### Local Development

```bash
pnpm dev              # Start Vite dev server with HMR
pnpm build            # Production build (Rolldown/Vite)
pnpm preview          # Preview production build locally
```

### Type Checking

```bash
pnpm typecheck        # Run TypeScript compiler check
```

## Code Quality

### Linting & Formatting (Oxlint + Oxfmt)

```bash
pnpm lint             # Check linting and formatting (read-only)
pnpm lint:fix         # Auto-fix linting issues and format files
pnpm lint:fix:unsafe # Fix including unsafe transformations
```

**Note**: [Oxlint](https://oxc.rs/docs/guide/usage/linter) handles linting and [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) handles formatting. No separate prettier or eslint commands.

## Testing

### Test Commands

```bash
pnpm test             # Run tests once (single run)
pnpm test:coverage    # Run tests with coverage reports
```

### Coverage

Coverage reports generated automatically with detailed metrics.

**Focus areas**: `src/resume/**` and `src/ui/**`

## Styling (PandaCSS)

```bash
pnpm panda:codegen    # Generate styled-system utilities
```

**Note**: Runs automatically during `pnpm prepare`

Output directory: `styled-system/` (git-ignored)

## Git Hooks

```bash
pnpm githooks:init   # Initialize Husky hooks
pnpm prepare          # Setup hooks + generate PandaCSS
```

**Auto-runs** on `pnpm install`

### Pre-commit Hooks

Automatically runs on commit:

- Lint-staged: Formats changed files with Oxfmt
- Oxlint: Fixes safe linting issues

### Pre-push Hooks

Configured in `.lint-prepushrc.json`:

- Runs Oxlint checks before push
- Prevents problematic code from reaching remote

## Deployment

### Build for Production

```bash
pnpm build            # Creates dist/ folder
```

Output is optimized, minified, and ready for deployment.

### Preview Build

```bash
pnpm preview          # Test production build locally
```

Serves the `dist/` directory on local server.

### Deployment Process

1. Push to GitHub (main branch)
2. Cloudflare Workers auto-deploys
3. Preview deployments for all branches

**Note**: No manual deployment commands needed. Cloudflare handles everything automatically.

## Common Workflows

### Before Committing

```bash
pnpm lint             # Check linting
pnpm typecheck        # Check types
pnpm test             # Run all tests
```

Pre-commit hooks handle formatting automatically, but manual checks ensure everything passes.

### Full Quality Check

```bash
pnpm typecheck && pnpm lint && pnpm test && pnpm build
```

Runs all checks in sequence. Use before pushing to main.

### Adding New Dependencies

```bash
pnpm install <package>           # Production dependency
pnpm install -D <package>        # Dev dependency
```

**Remember**: Commit `pnpm-lock.yaml` changes.

## Troubleshooting

### Clear PandaCSS Cache

```bash
rm -rf styled-system/
pnpm panda:codegen
```

Useful if PandaCSS styles aren't updating correctly.

### TypeScript Issues

```bash
pnpm typecheck
```

Shows all TypeScript errors. More comprehensive than editor feedback.

### Test Failures

```bash
pnpm test             # See all failures at once
pnpm test:coverage    # Run tests with coverage reports
```

Use `pnpm test:coverage` to run tests and review coverage reports.

### Clean Install

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

Nuclear option if dependencies are corrupted.

### Update Snapshots

```bash
pnpm test -- -u   # Update all snapshots
```

**Warning**: Review snapshot changes carefully before committing.

## Environment Requirements

- **Node**: 24.x (specified in package.json)
- **pnpm**: 10.x (specified in package.json)

Check versions:

```bash
node --version
pnpm --version
```

## Scripts Summary

| Command              | Purpose                  |
| -------------------- | ------------------------ |
| `pnpm dev`           | Development server       |
| `pnpm build`         | Production build         |
| `pnpm preview`       | Preview production build |
| `pnpm typecheck`     | TypeScript check         |
| `pnpm lint`          | Lint + format check      |
| `pnpm lint:fix`      | Auto-fix + format        |
| `pnpm test`          | Run tests (once)         |
| `pnpm test:coverage` | Run tests with coverage  |
| `pnpm panda:codegen` | Generate PandaCSS        |
| `pnpm githooks:init` | Setup Husky              |
| `pnpm prepare`       | Post-install setup       |
