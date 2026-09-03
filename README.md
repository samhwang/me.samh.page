# me.samh.page

![GitHub](https://img.shields.io/github/license/samhwang/samhwang.github.io?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/samhwang/samhwang.github.io?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/samhwang/samhwang.github.io?style=for-the-badge)

Personal portfolio and resume website, hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/).

## Quick Start

```bash
pnpm install
pnpm dev
```

See [docs/how-to/01-quick-start.md](docs/how-to/01-quick-start.md) for full setup instructions.

## Built With

- [React 19](https://react.dev) with [React Compiler](https://react.dev/learn/react-compiler)
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [TanStack Router](https://tanstack.com/router) (file-based routing)
- [PandaCSS](https://panda-css.com) (zero-runtime CSS-in-JS)
- [Vite](https://vite.dev) with [Rolldown](https://rolldown.rs) bundler
- [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) + [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) (linting and formatting)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) (hosting and CI/CD)

## Using as a Template

This resume is designed to be a reusable template. All personal content lives in the meta file
[`metadata/metadata.ts`](metadata/metadata.ts) so you never have to touch the
React components yourself. Edit these in order:

1. **`metadata/metadata.ts`** — your name, bio, address, social links, experience,
   education, projects, skills, and the site title/URL/description. This is the only
   file you must edit for content.
2. **`src/img/`** — replace `avatar.jpg` / `avatar.webp` with your photo and
   `website-icon.png` with your site icon.
3. **`wrangler.toml`** — your Cloudflare Worker name and custom domain.
4. **`index.html`** — title/description placeholders (injected from metadata at build,
   safe to leave), plus your `favicon.svg`.
5. **`LICENSE`** — set the copyright holder.

Source files contain **no personal literals** — the footer, avatar alt text, SEO
metadata, PWA manifest, generated `humans.txt`, and browser `<title>` all derive from
`metadata/metadata.ts` at build or runtime.

## Deploying

Push to GitHub with a [Cloudflare Workers](https://developers.cloudflare.com/workers/)
project connected for automatic deployment.

## Documentation

Detailed documentation is in [`docs/`](docs/index.md), organized following the [Diataxis](https://diataxis.fr/) framework.
