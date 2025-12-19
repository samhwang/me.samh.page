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

### Linting & Formatting (Biome)

```bash
pnpm lint             # Check for issues (read-only)
pnpm lint:fix         # Auto-fix safe issues
pnpm lint:fix:unsafe # Fix including unsafe transformations
pnpm ci               # CI mode (strict, no writes)
```

**Note**: Biome handles both linting and formatting. No separate prettier or eslint commands.

## Testing

### Test Commands

```bash
pnpm test             # Watch mode (interactive)
pnpm test:run         # Single run (CI)
pnpm test:watch       # Explicit watch mode
```

### Coverage

Coverage reports generated automatically with detailed metrics.

**Focus areas**: `src/resume/**` and `src/icons/**`

## Styling (PandaCSS)

```bash
pnpm panda:codegen    # Generate styled-system utilities
```

**Note**: Runs automatically during `pnpm prepare`

Output directory: `styled-system/` (git-ignored)

## Git Hooks

```bash
pnpm git-hooks:init   # Initialize Husky hooks
pnpm prepare          # Setup hooks + generate PandaCSS
```

**Auto-runs** on `pnpm install`

### Pre-commit Hooks

Automatically runs on commit:
- Lint-staged: Formats changed files
- Biome: Fixes linting issues

### Pre-push Hooks

Configured in `.lint-prepushrc.json`:
- Runs linting checks before push
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
2. Cloudflare Pages auto-deploys
3. Preview deployments for all branches

**Note**: No manual deployment commands needed. Cloudflare handles everything automatically.

## Common Workflows

### Before Committing

```bash
pnpm lint             # Check linting
pnpm typecheck        # Check types
pnpm test:run         # Run all tests
```

Pre-commit hooks handle formatting automatically, but manual checks ensure everything passes.

### Full Quality Check

```bash
pnpm typecheck && pnpm lint && pnpm test:run && pnpm build
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
pnpm test:watch       # Interactive debugging
pnpm test:run         # See all failures at once
```

Use `test:watch` to run specific tests and debug interactively.

### Clean Install

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

Nuclear option if dependencies are corrupted.

### Update Snapshots

```bash
pnpm test:run -- -u   # Update all snapshots
```

**Warning**: Review snapshot changes carefully before committing.

## Environment Requirements

- **Node**: 22.x (specified in package.json)
- **pnpm**: 10.x (specified in package.json)

Check versions:

```bash
node --version
pnpm --version
```

## Scripts Summary

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm preview` | Preview production build |
| `pnpm typecheck` | TypeScript check |
| `pnpm lint` | Lint check |
| `pnpm lint:fix` | Auto-fix linting |
| `pnpm test` | Run tests (watch) |
| `pnpm test:run` | Run tests (once) |
| `pnpm panda:codegen` | Generate PandaCSS |
| `pnpm git-hooks:init` | Setup Husky |
| `pnpm prepare` | Post-install setup |
