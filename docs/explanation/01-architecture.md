# Architecture

Why this tech stack, how the build pipeline works, and how deployment is configured.

## Tech Stack Choices

### React 19 with React Compiler

[React 19](https://react.dev) provides the component model. The project uses [React Compiler](https://react.dev/learn/react-compiler) (`babel-plugin-react-compiler`) for automatic optimization.

The compiler handles memoization automatically, so manual `useMemo`/`useCallback` calls are unnecessary unless a specific performance problem is measured. This keeps components simple and lets the compiler decide what to optimize.

### TypeScript (Strict Mode)

[TypeScript](https://www.typescriptlang.org/) with `strict: true` enabled. Additional strictness flags include `noUnusedLocals`, `noUnusedParameters`, and `forceConsistentCasingInFileNames`.

Explicit return types are preferred for exported functions. Type inference is used for simple internal cases.

### TanStack Router

[TanStack Router](https://tanstack.com/router) provides file-based routing with full type safety. Routes are defined as files in `src/routes/`, and the router generates a typed route tree (`src/route-tree.gen.ts`) automatically.

File-based routing was chosen over manual route configuration because it reduces boilerplate and makes the route structure match the file system.

### PandaCSS

[PandaCSS](https://panda-css.com) provides zero-runtime CSS-in-JS. Styles are extracted at build time, so there is no runtime overhead. Design tokens (colors, fonts, sizes, breakpoints) are defined in `panda.config.ts` and used via the `css()` function.

PandaCSS was chosen over Tailwind CSS for type-safe style definitions and over runtime CSS-in-JS libraries (styled-components, Emotion) for zero runtime cost.

### Vite with Rolldown

[Vite](https://vite.dev) with [Rolldown](https://rolldown.rs) handles the build pipeline. Vite provides fast HMR during development, and Rolldown bundles the production build with automatic minification, tree shaking, code splitting, and asset hashing.

### Biome

[Biome](https://biomejs.dev) handles both linting and formatting in a single tool, replacing the need for separate ESLint and Prettier configurations. It runs on pre-commit via [Husky](https://typicode.github.io/husky/) and lint-staged.

### Vitest

[Vitest](https://vitest.dev) provides the test runner, with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for component testing. Tests are co-located with source files (`*.test.tsx`).

## Build Pipeline

```
pnpm build
  → PandaCSS generates styled-system/ utilities
  → Vite (Rolldown) bundles the application
  → Optimized output in dist/
    → Minified JavaScript and CSS
    → Hashed filenames for cache busting
    → Tree-shaken, code-split chunks
```

## Deployment

The site is hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/), which provides:

- **Global CDN**: Edge serving with low latency worldwide
- **Auto-deployment**: Triggered by GitHub pushes to main
- **Preview deployments**: Unique URL for every branch push
- **Automatic HTTPS**: Free SSL, HSTS
- **Zero-downtime deploys**: Instant rollback from dashboard

### Deployment flow

1. Push to GitHub (main branch)
2. Cloudflare Workers detects the push
3. Runs `pnpm build` with Node 24.x
4. Deploys `dist/` to global edge network
5. Site live within 1-3 minutes

### Performance targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 90+ |
| Lighthouse Best Practices | 90+ |
| Lighthouse SEO | 90+ |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

### Rollback

If a deployment has issues:
1. Open the Cloudflare Workers dashboard
2. Navigate to Deployments
3. Click "Rollback to this deployment" on a previous build

Alternatively, revert the commit in Git and push to trigger a new deployment.
