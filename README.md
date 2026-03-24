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
- [Biome](https://biomejs.dev) (linting and formatting)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) (hosting and CI/CD)

## Using as a Resume Template

1. Clone this repo
2. Update the metadata in `src/resume/` components
3. Push to GitHub with Cloudflare Workers connected for automatic deployment

## Documentation

Detailed documentation is in [`docs/`](docs/index.md), organized following the [Diataxis](https://diataxis.fr/) framework.
