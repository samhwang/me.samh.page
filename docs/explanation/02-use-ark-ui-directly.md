# Use Ark UI Directly

Architecture Decision Record (ADR): interactive components use [Ark UI](https://ark-ui.com), styled with [PandaCSS](https://panda-css.com) slot recipes.

## Status

Accepted.

## Context

The sidebar was a hand-wired, Bootstrap-style navbar. Tooltips would add more bespoke ARIA and keyboard work.

## Decision

Use `@ark-ui/react` directly (Collapsible, Toc, Tooltip), styled with slot recipes built from each component's anatomy. Steps: [Style Ark UI Components](../how-to/03-style-ark-ui-components.md).

## Consequences

Measured with `pnpm build`:

| Asset            | Before    | After     | Delta    |
| ---------------- | --------- | --------- | -------- |
| JS (gzip, total) | ~113.3 kB | 136.56 kB | ~+23 kB  |
| CSS (gzip)       | 19.32 kB  | 19.69 kB  | ~+0.4 kB |

- React Compiler works; it only transforms app code.
- `Toc`: no `scrollEl`, the page scrolls the window.
- Collapsible stays open on desktop via `useMediaQuery`; preflight's layered `[hidden]` rule beats CSS overrides.
- Presence-driven parts use keyframes, not transitions; Ark waits for `animationend`.
- jsdom needs observer and `matchMedia` stubs (`src/test-utils/setups/ark.ts`).
- Deferred: dark mode (Ark Switch plus `.dark` semantic tokens).

## Alternatives

- Native-only: smallest bundle, but accessibility and keyboard behavior stay hand-written.
- [Park UI](https://park-ui.com): Panda recipes over Ark, but the preset is stale (last published 2024-11-22) and untested on Panda v2.
- [Radix](https://www.radix-ui.com): comparable primitives.
