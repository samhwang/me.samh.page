---
name: update-docs
description: Audit and update all project documentation to reflect recent changes
---

# Update Documentation Skill

## Purpose

Audit and update all project documentation to reflect recent code changes, ensuring docs stay in sync with the codebase.

## Trigger Condition

When user asks to:

- Update documentation
- Sync docs with recent changes
- Audit docs for accuracy
- Update README or AGENTS.md
- Check if docs are up to date

Also trigger automatically when:

- A new feature is added (documentation is mandatory for every new feature)
- Dependencies or build configuration change
- Project structure changes

## Documentation Locations

| Location | Content | Key Sections |
|----------|---------|-------------|
| `README.md` | Project overview, tech stack, quick start | Entry point, links to `docs/` |
| `docs/` | Developer-facing docs ([Diataxis](https://diataxis.fr/) framework) | How-to guides, reference, explanation |
| `AGENTS.md` | Agent control manifest | Project structure, tech stack, available skills/rules, commands |
| `.agents/rules/` | Domain-specific guidelines | Code style, patterns, commands, testing, deployment, communication |
| `.agents/skills/` | Task-specific toolkits | Each skill's SKILL.md |

## Workflow

### Step 1: Identify Recent Changes

Determine the scope of changes to review:

```bash
# If user specifies a range, use it. Otherwise, find recent changes:
git log --oneline --since="2 weeks ago"
git log --oneline HEAD~20..HEAD

# Get a summary of what changed:
git diff --stat <range>
```

Ask the user for a commit range if not provided. Default to the last 20 commits or 2 weeks, whichever is smaller.

### Step 2: Categorize Changes

Group changes by their documentation impact:

- **New features**: New resume sections, components, routes
- **Config changes**: Build config, new dependencies
- **Architecture changes**: New modules, directory restructuring
- **Command changes**: New scripts, modified workflows
- **Skill/rule changes**: New or modified agent skills and rules

For each category, note which documentation locations are affected using the mapping:

| Change Type | Docs to Check |
|-------------|---------------|
| New resume section | `docs/how-to/02-add-resume-section.md`, `docs/reference/02-project-structure.md` |
| New component | `docs/reference/02-project-structure.md` |
| New dependency | `README.md`, `AGENTS.md` (tech stack), `docs/reference/01-commands.md` |
| New pnpm script | `docs/reference/01-commands.md`, `.agents/rules/commands.md` |
| New route | `docs/reference/02-project-structure.md`, `AGENTS.md` |
| New design token | `docs/reference/03-design-tokens.md` |
| New skill/rule | `AGENTS.md` (available skills/rules) |
| Test changes | `.agents/rules/testing.md` |
| Deployment change | `docs/explanation/01-architecture.md`, `.agents/rules/deployment.md` |
| Build config change | `docs/reference/01-commands.md`, `.agents/rules/commands.md` |
| Styling change | `docs/reference/03-design-tokens.md`, `.agents/rules/patterns.md` |

### Step 3: Audit Each Location

For each affected documentation file:

1. **Read the doc file** to understand its current content
2. **Read the relevant source files** to understand what the doc should say
3. **Identify gaps**: missing features, outdated instructions, wrong commands, stale references
4. **Identify removals**: documented features that no longer exist

Pay special attention to:
- pnpm script names (do they match `package.json`?)
- File paths (do they still exist?)
- Project structure trees (match actual directory layout?)
- Design tokens (match `panda.config.ts`?)
- External links (do they still resolve?)

### Step 4: Apply Updates

Update each affected file following these principles:

- **Preserve existing style**: Match the tone, formatting, and structure of each file
- **Minimal changes**: Only update what is actually out of date
- **American English**: Consistent spelling per `.agents/rules/communication.md`
- **No fluff**: Concise, factual documentation
- **Diataxis compliance**: Do not mix content types (no how-to steps in reference docs)

### Step 5: Verify

Review all changes for:

- All file paths referenced in docs exist
- All commands referenced in docs are valid
- Cross-references between docs are consistent
- `docs/index.md` links are current and complete

```bash
# Verify commands still work
pnpm typecheck
pnpm lint
```

## Checklist

- [ ] Commit range identified and all changes reviewed
- [ ] Changes categorized by documentation impact
- [ ] `README.md` checked (entry point still accurate)
- [ ] `docs/` files checked and updated for affected topics
- [ ] `docs/index.md` links verified
- [ ] `AGENTS.md` checked: project structure, tech stack, skills, rules, commands
- [ ] `.agents/rules/` checked for affected rules
- [ ] `.agents/skills/` checked for affected skills
- [ ] Cross-references between docs are consistent
- [ ] American English spelling throughout
- [ ] No stale file paths or broken references
- [ ] Passes `pnpm lint` (for any code-adjacent changes)

## Documentation Framework

The `docs/` directory follows the [Diataxis](https://diataxis.fr/) framework. Each document must serve **one** primary purpose:

| Type | Purpose | Question It Answers |
|------|---------|---------------------|
| **How-to guide** | Goal-oriented steps | "How do I...?" |
| **Reference** | Information-oriented lookup | "What is...?" |
| **Explanation** | Understanding-oriented discussion | "Why...? Can you tell me about...?" |
| **Tutorial** | Learning-oriented guided experience | "Can you teach me to...?" |

Current `docs/` structure:

- **`how-to/`**: `01-quick-start`, `02-add-resume-section`
- **`reference/`**: `01-commands`, `02-project-structure`, `03-design-tokens`
- **`explanation/`**: `01-architecture`

When updating docs, do not mix content types. Move how-to steps out of reference docs, move reference tables out of explanation docs, etc.

### External Linking Rule

Every mention of an external tool, framework, pattern, or standard must include a hyperlink on first mention per document.

## Notes

- This skill audits and updates existing documentation. It does not create new `docs/` files unless a major new feature clearly warrants one.
- When in doubt about whether a change needs documentation, err on the side of updating, stale docs are worse than verbose docs.
- The `docs/` files are numbered for ordering. If a new file is needed, pick the next available number.
- `AGENTS.md` is the most frequently impacted file since it tracks project structure, tech stack, and available skills/rules.
- Run this skill after completing a feature, before cutting a release, or whenever the user suspects docs have drifted.
