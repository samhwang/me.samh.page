# Rule: Communication

Standards for documentation, commit messages, and communication style.

## General Principles

### Tone

- Professional and concise
- Code-focused and pragmatic
- Clear, actionable recommendations
- Avoid unnecessary verbosity
- Technical accuracy over emotional validation

### Audience

- **Primary**: Future you (6 months from now)
- **Secondary**: AI assistants and development tools
- **Tertiary**: Potential collaborators or employers

## Documentation Style

### Format

- **Markdown** for all documentation
- Code blocks with language hints:
  ```typescript
  const example = 'like this';
  ```
- Bullet points for lists (use `-`)
- Numbered lists for sequential steps only

### Structure

- **Clear headings**: Use `##` for major sections, `###` for subsections
- **Short paragraphs**: 2-4 sentences max
- **Examples**: Include code examples for complex concepts
- **Tables**: Use for comparisons or reference data

### Code References

Reference files with paths and line numbers:
- **Format**: `filename.tsx:123`
- **Example**: "The icon rendering logic is in `src/icons/lang-icon.tsx:45`"

This allows easy navigation to specific code locations.

### External Links

Link to official documentation when referencing libraries:
- [React Documentation](https://react.dev)
- [TanStack Router](https://tanstack.com/router)
- [PandaCSS](https://panda-css.com)
- [Vitest](https://vitest.dev)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)

Prefer official docs over blog posts or tutorials.

## Writing Style

### Language

**American English spelling**:
- ✅ color, optimize, center, behavior, license
- ❌ colour, optimise, centre, behaviour, licence

### Punctuation

**Use commas for separating clauses**:
- ✅ "The component renders the user profile, and it handles loading states"
- ❌ "The component renders the user profile — and it handles loading states"

**Em dashes (—)**: Avoid in technical documentation
- Use commas or parentheses instead
- Em dashes acceptable in creative writing only

**Semicolons**: 
- Use in TypeScript/JavaScript code (enforced by Biome)
- Avoid in prose (use periods or commas instead)

### Voice

**Active voice preferred**:
- ✅ "The component renders the profile"
- ❌ "The profile is rendered by the component"

**Second person for instructions**:
- ✅ "Run `pnpm build` to create a production build"
- ❌ "One should run `pnpm build` to create a production build"

### Clarity

- **Short sentences**: Prefer sentences under 20 words
- **Avoid jargon**: Use common terms unless technical term is necessary
- **Define acronyms**: Spell out on first use (e.g., "LCP (Largest Contentful Paint)")
- **Use examples**: Show, don't just tell

### Lists

- Use `-` for unordered lists (not `*` or `+`)
- Capitalize first word of each item
- End with period if complete sentence
- Keep formatting consistent

**Example:**
```markdown
- Install dependencies with `pnpm install`
- Run the dev server with `pnpm dev`
- Open browser to http://localhost:5173
```

## Commit Messages

### Format

Follow Conventional Commits (loosely):

```
type(scope): description

Optional body explaining the change in detail.

Optional footer with breaking changes or issue refs.
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic change)
- **refactor**: Code refactoring (no behavior change)
- **test**: Adding or updating tests
- **chore**: Maintenance tasks (deps, config, tooling)
- **perf**: Performance improvements

### Scope

Optional, indicates area of change:
- `resume`: Resume page components
- `icons`: Icon components
- `router`: Routing logic
- `build`: Build configuration
- `tests`: Testing infrastructure
- `deps`: Dependencies

### Description

- **50-72 characters max** for first line
- **Imperative mood**: "add" not "added" or "adds"
- **Lowercase**: Start with lowercase letter
- **No period**: Don't end with period
- **Be specific**: "fix icon rendering bug" not "fix bug"

### Body

- **Wrap at 72 characters**
- **Explain what and why**, not how
- **Separate from subject** with blank line
- **Use bullet points** for multiple changes

### Examples

**Simple change:**
```
feat(resume): add projects section component
```

**With body:**
```
feat(resume): add projects section component

Adds a new projects section to the resume page with filtering
by technology stack. Includes project cards with descriptions,
tech stack badges, and links to live demos and source code.
```

**Bug fix:**
```
fix(icons): correct devicon class generation

Fixes bug where icon names with hyphens weren't properly
converted to devicon class names. Now handles cases like
"react-native" correctly.
```

**Documentation:**
```
docs: update deployment guide for Cloudflare Pages
```

**Refactoring:**
```
refactor(resume): extract reusable section layout component

Extracts common layout pattern used across all resume sections
into a shared component to reduce duplication and improve
maintainability.
```

**Testing:**
```
test(icons): add tests for social icon component
```

**Chore:**
```
chore(deps): update dependencies to latest versions
```

### Breaking Changes

If introducing breaking changes:

```
feat(api)!: change metadata hook return type

BREAKING CHANGE: useMetadata now returns an object with
metadata and loading state instead of just metadata.

Before: const metadata = useMetadata();
After: const { metadata, isLoading } = useMetadata();
```

## Code Comments

### Philosophy

**Avoid comments unless necessary.**

See `code-style.md` for detailed comment guidelines.

### Summary

- Explain **"why"** and **"what"**, not **"how"**
- Use descriptive variable names instead of comments
- Acceptable for:
  - Complex algorithms
  - Non-obvious workarounds
  - Important constraints
  - Business logic that's not intuitive

### Examples

**✅ Good comment:**
```typescript
// Cloudflare Pages requires trailing slashes for SPAs
const normalizedPath = ensureTrailingSlash(path);
```

**❌ Bad comment:**
```typescript
// Normalize the path
const normalizedPath = ensureTrailingSlash(path);
```

## Issue Tracking

### GitHub Issues

If using GitHub Issues, structure with:

**Title**: Clear, concise description
- "Fix: Icon not rendering on mobile"
- "Feature: Add dark mode toggle"

**Description**:
- **Problem**: What's wrong or what's needed
- **Steps to reproduce**: For bugs
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: Browser, OS (if relevant)
- **Screenshots**: If applicable

### Labels

Common labels:
- `bug`: Something isn't working
- `enhancement`: New feature or improvement
- `documentation`: Documentation improvements
- `good first issue`: Easy for newcomers
- `help wanted`: Extra attention needed

## Pull Requests

### PR Structure

**Title**: Like commit message
- "feat(resume): add projects section"
- "fix(icons): correct rendering bug"

**Description**:
```markdown
## Summary
Brief description of changes

## Changes
- Specific change 1
- Specific change 2
- Specific change 3

## Testing
How these changes were tested

## Screenshots
(if UI changes)
```

### Checklist

Include in PR description:
```markdown
- [ ] Tests added/updated
- [ ] Types checked (`pnpm typecheck`)
- [ ] Linting passes (`pnpm lint`)
- [ ] Documentation updated (if needed)
```

## Git Workflow

### Pre-commit Hooks

Husky runs automatically on commit:
- **Lint-staged**: Formats changed files with Biome
- **Type check**: Optional (if configured)

### Pre-push Checks

Configured in `.lint-prepushrc.json`:
- Runs linting on push
- Prevents problematic code from reaching remote

### Branch Naming

Use descriptive names:
- `feature/project-section`
- `fix/icon-rendering`
- `refactor/resume-layout`
- `docs/deployment-guide`
- `chore/update-deps`

**Pattern**: `type/short-description`

## Output Expectations for AI Agents

When AI agents (like Claude, Copilot, etc.) respond:

### Structure

1. **Mention active rules**: "Following code-style.md and patterns.md..."
2. **Analysis**: Brief analysis of the situation
3. **Recommendations**: Actionable items, ordered by priority
4. **Implementation**: Code examples or detailed steps
5. **Considerations**: Potential issues or tradeoffs

### Format

```markdown
## Analysis
[Brief analysis of the situation]

## Recommendations
- Specific actionable item 1
- Specific actionable item 2
- Specific actionable item 3

## Implementation
[Code examples or detailed steps]

## Considerations
[Potential issues, tradeoffs, or important notes]
```

### Code Examples

- Include full code blocks with syntax highlighting
- Show before/after for refactoring
- Include imports and context
- Explain non-obvious parts

### File References

- Cite specific files and line numbers
- Use format: `src/components/button.tsx:45`
- Link to relevant documentation

### Risk Awareness

Call out potential issues:
- Performance implications
- Breaking changes
- Migration requirements
- Edge cases

## Frontend Engineering Terminology

Use standard frontend vocabulary:

**Preferred terms:**
- **Component**: React components (not "widget")
- **Props**: Component properties
- **State**: React state
- **Hook**: Custom hooks, React hooks
- **Route**: TanStack Router routes (not "page" unless referring to full page)
- **Build**: Production build process
- **Bundle**: JavaScript bundle output
- **Chunk**: Code-split chunks

**Avoid:**
- "Widget" (use "component")
- "Element" (unless referring to DOM element specifically)
- "Properties" (use "props" in React context)

## Avoiding Hype Language

Stay technical and factual:

**❌ Avoid:**
- "Amazing performance boost"
- "Super easy refactor"
- "Blazingly fast"
- "Game-changing improvement"

**✅ Prefer:**
- "Reduces bundle size by 30%"
- "Simplifies component structure"
- "Improves load time by 200ms"
- "Reduces code duplication"

Be specific and measurable.

## Documentation Types

Follow Diátaxis framework:

### 1. Tutorials (Learning-oriented)

- Step-by-step lessons
- For beginners
- Hand-holding approach
- Example: "Building your first component"

### 2. How-to Guides (Task-oriented)

- Solve specific problems
- For intermediate users
- Practical steps
- Example: "How to add a new route"

### 3. Reference (Information-oriented)

- Technical descriptions
- For lookup
- Comprehensive and accurate
- Example: "API reference", "Available commands"

### 4. Explanation (Understanding-oriented)

- Clarify and illuminate
- Discuss concepts
- Provide context
- Example: "Why we use PandaCSS"

## Best Practices Summary

1. **Be concise** - Short sentences, clear structure
2. **Be specific** - Concrete examples, measurable outcomes
3. **Be consistent** - Follow established patterns
4. **Be clear** - Avoid jargon, define acronyms
5. **Be actionable** - Provide next steps
6. **Be accurate** - Technical correctness over hype
7. **Use American English** - Consistent spelling
8. **Avoid em dashes** - Use commas instead
9. **Active voice** - Direct and clear
10. **Show examples** - Code, screenshots, demonstrations
