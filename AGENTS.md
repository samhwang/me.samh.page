# Personal Portfolio Website - Agent Guidelines

## Universal Agents Control Manifest

All agents must emulate `.agents/` support even when the runtime does not load those files automatically. Treat this document as the control manifest: it lists available metadata, where to read it, and how to compose it during a conversation.

## About the Project

This is a personal portfolio and resume website. The project focuses on:

- **Performance**: Fast load times, optimized bundles, efficient rendering
- **Accessibility**: WCAG compliant, semantic HTML, keyboard navigation
- **Maintainability**: Clean code, comprehensive tests, clear documentation
- **Modern web standards**: Latest React patterns, TypeScript strict mode

## Role & Technical Context

- **Domain**: Personal portfolio, resume showcase, professional web presence
- **Owner**: Personal project (single developer)
- **Tech Stack**: React 19, TypeScript, TanStack Router, Vite (Rolldown), Vitest, PandaCSS
- **Architecture**: Static site with client-side routing, optimized for performance
- **Deployment**: Cloudflare Workers with automatic deployments

## Change Management Philosophy

All changes must be:

- **Atomic**: The smallest possible and logically complete unit of change
- **Safe**: Type-checked, linted, and tested before commit
- **Tested**: Qualitative high coverage on core modules (`src/resume/**`, `src/icons/**`)
- **Linted**: Must pass `pnpm lint` and `pnpm typecheck` before commit
- **Documented**: Clear commit messages following Conventional Commits pattern
- **Delivered**: Pushed to main branch, automatically deployed to Cloudflare Workers

## Project Structure

```
docs/                   # Developer-facing documentation (Diataxis framework)
├── index.md            # Hub page linking to all docs
├── how-to/             # Goal-oriented guides
├── reference/          # Information-oriented lookup
└── explanation/        # Understanding-oriented discussion

.agents/
├── rules/              # Agent-specific guidelines and constraints
│   ├── commands.md     # Development workflow commands
│   ├── code-style.md   # Formatting, naming, file organization
│   ├── patterns.md     # React, TanStack Router, PandaCSS patterns
│   ├── testing.md      # Vitest, React Testing Library best practices
│   ├── deployment.md   # Cloudflare Workers deployment process
│   └── communication.md # Commit messages, docs, writing style
└── skills/             # Task-specific toolkits
    └── update-docs/    # Documentation audit and update workflow
```

## Execution Protocol

1. **Always read this file first** before starting a task so you know which skills or rules to load from `.agents/`.

2. **Rules**:
   - Rules are long-lived constraints (coding practices, patterns, deployment processes)
   - Load relevant rules based on the task at hand
   - Located in `.agents/rules/[rule-name].md`
   - Treat these as required context: preload them before drafting any response

3. **Skills**:
   - Skills are task-specific toolkits with proven workflows
   - Load a skill only if its trigger condition matches the task
   - Once loaded, follow the process and output format defined in the skill
   - Located in `.agents/skills/[skill-name]/SKILL.md`

4. **Response contract**:
   - Explicitly mention which rules are in effect
   - Derive recommendations while enforcing all loaded constraints
   - If conflicts arise, ask for clarification before diverging

## Available Rules

Load these rules when working on relevant domains:

- **[commands.md](.agents/rules/commands.md)** - Complete reference of available pnpm commands, development workflow
- **[code-style.md](.agents/rules/code-style.md)** - Code formatting, TypeScript conventions, naming, file organization, comment philosophy
- **[patterns.md](.agents/rules/patterns.md)** - React 19 patterns, TanStack Router usage, PandaCSS styling, testing patterns
- **[testing.md](.agents/rules/testing.md)** - Vitest setup, React Testing Library, snapshot tests, coverage expectations
- **[deployment.md](.agents/rules/deployment.md)** - Cloudflare Workers deployment, build process, troubleshooting
- **[communication.md](.agents/rules/communication.md)** - Commit messages, documentation style, American English, writing conventions

## Available Skills

Load these skills when their trigger conditions match the task:

- **[update-docs](.agents/skills/update-docs/SKILL.md)** - Audit and update documentation after code changes. **Trigger**: after adding a new feature, changing dependencies, or modifying project structure. Every new feature MUST include documentation updates.

Add new skills under `.agents/skills/[skill-name]/SKILL.md` as needed.

## Quick Reference

### Tech Stack

- **[React 19](https://react.dev)** with [React Compiler](https://react.dev/learn/react-compiler)
- **[TypeScript](https://www.typescriptlang.org/)** (strict mode)
- **[TanStack Router](https://tanstack.com/router)** (file-based routing)
- **[PandaCSS](https://panda-css.com)** (zero-runtime CSS-in-JS)
- **[Vitest](https://vitest.dev)** + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **[Vite](https://vite.dev)** (with [Rolldown](https://rolldown.rs) bundler)
- **[Cloudflare Workers](https://developers.cloudflare.com/workers/)** (hosting)
- **[Biome](https://biomejs.dev)** (linting and formatting)

### Essential Commands

```bash
pnpm dev           # Development server with HMR
pnpm build         # Production build
pnpm test          # Run tests (watch mode)
pnpm test:run      # Run tests (single run)
pnpm lint          # Check code quality
pnpm lint:fix      # Auto-fix linting issues
pnpm typecheck     # TypeScript type checking
```

### Key Principles

- **Atomic changes**: Smallest logical units
- **Type safety**: Strict TypeScript, explicit types
- **Test coverage**: Qualitative high coverage on core modules
- **Frontend-focused**: React patterns, accessibility, performance
- **Self-documenting code**: Clear names over comments
- **American English**: Consistent spelling and terminology

## Rules vs. Skills at a Glance

| Aspect | Rules | Skills |
|--------|-------|--------|
| Purpose | Written guidelines covering a domain | Full toolkits with templates and workflows |
| Execution | Agent interprets and implements | Drop-in code, docs, and checklists |
| Complexity | Describes guardrails and best practices | Encodes proven patterns for specific tasks |
| Maintenance | Update prose as policies evolve | Refresh package when better solutions emerge |

Think of **rules** as a "manual" that keeps behavior aligned, while **skills** are the "manual + toolbox + demo" bundle for proven solutions.

## Common Workflows

### Before Committing

```bash
pnpm typecheck     # Type check
pnpm lint          # Lint check
pnpm test:run      # Run all tests
```

Pre-commit hooks handle formatting automatically.

### Full Quality Check

```bash
pnpm typecheck && pnpm lint && pnpm test:run && pnpm build
```

Run all checks before pushing to main.

### Deployment

1. Push to GitHub (main branch)
2. Cloudflare Workers automatically builds and deploys
3. Preview deployments for feature branches

## Extending the Manifest

- Additional **rules** can be added under `.agents/rules/` for new domains (e.g., accessibility, performance budgets)
- Additional **skills** can be added under `.agents/skills/` for specific task types
- Keep this file updated so future agents know when to load each artifact and how to combine them safely

## Documentation

The project uses two documentation layers:

- **`docs/`** — Developer-facing documentation following the [Diataxis](https://diataxis.fr/) framework. Contains how-to guides, reference material, and architecture explanation. See `docs/index.md` for the full listing.
- **`.agents/rules/`** — Agent-specific constraints and guardrails. These guide AI agent behavior and enforce coding standards.

Every new feature MUST include documentation updates. Use the [update-docs](.agents/skills/update-docs/SKILL.md) skill to audit and update docs after changes. Every mention of an external tool, framework, or standard must include a hyperlink on first mention per document.

## Project Context

- **Personal project**: Single developer, no team coordination needed
- **Production deployment**: Cloudflare Workers with automatic deployments
- **Focus areas**: Resume components (`src/resume/**`) and icon components (`src/icons/**`)
- **Optimization targets**: Fast load times, high Lighthouse scores, accessible markup
- **Code quality**: Biome for linting/formatting, TypeScript strict mode, comprehensive tests

When in doubt, follow existing patterns in the codebase and refer to the relevant rules in `.agents/rules/`.
