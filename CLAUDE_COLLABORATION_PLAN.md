# ARS Claude Collaboration Plan

This document is the working handoff for Claude.

Project path:

`/Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign`

Current shared baseline branch:

`homepage-figma-refresh`

Latest baseline checkpoint:

`9f16dd0 - Finalize homepage QA baseline`

Repository:

`https://github.com/baburao/ars-green-steel-redesign`

## Current Project Context

ARS Green Steel is being redesigned from the existing ARS website into a premium industrial website.

The client has approved the Figma Make design direction.

The current task is to apply the approved design language across the full website while preserving old-site business content, page structure, important copy, images, and lead-generation paths.

## Shared Source Of Truth

Read these files before editing:

- `AGENTS.md`
- `PROJECT_BRIEF.md`
- `DESIGN_RULES.md`
- `DESIGN_SYSTEM.md`
- `TASKS.md`
- `COMPONENT_INVENTORY.md`
- `ARS-DESIGN-HANDOFF.md`

Use the approved Figma Make direction as the visual reference.

## Core Design Rules

- Primary blue: `#0D2B6E`
- Secondary red: `#DE121A`
- Dark navy: `#060D1E`
- Font: IBM Plex Sans
- The site should feel premium, industrial, editorial, and trustworthy.
- It must not feel like a SaaS page, dashboard, or generic template.
- Use the standard section structure:
  - Kicker
  - H2
  - Paragraph
  - Content
- Use `SectionKicker` for all section labels.
- Do not manually recreate kicker lines or one-off label styles.
- Do not create new colors manually.
- Do not generate fake people, founder, team, or management photos.
- Use existing assets from `public/ars-assets` unless the user provides replacements.

## Reusable Component Rule

Before creating any component, check:

- `COMPONENT_INVENTORY.md`
- `DESIGN_SYSTEM.md`

If an existing component can solve the need, reuse it.

If a new component is useful for more than one page:

1. Create it in the right shared component location.
2. Add it to `COMPONENT_INVENTORY.md`.
3. Mention its purpose, file path, variants, current usage, and future usage.
4. Update `DESIGN_SYSTEM.md` if the component changes the design system.
5. Keep the same update in the same commit.

This prevents Claude and Codex from creating duplicate components for the same pattern.

## Ownership Split

### Codex Owns

Codex should own global design-system and integration work:

- `src/app/globals.css`
- `src/components/site-header.tsx`
- `src/components/site-footer.tsx`
- `src/components/section-kicker.tsx`
- `src/components/home-hero.tsx`
- `src/components/audience-journey-section.tsx`
- `COMPONENT_INVENTORY.md`
- `DESIGN_SYSTEM.md`
- `DESIGN_RULES.md`
- `TASKS.md`
- Final QA
- Final integration review

Claude should not edit these files unless specifically assigned.

### Claude Owns

Claude should focus on page-level design and content migration:

- `src/app/about/page.tsx`
- `src/app/products/**`
- `src/app/services/**`
- `src/app/industries/**`
- `src/app/projects/**`
- `src/app/certifications/**`
- `src/app/contact/**`
- `src/components/page-sections.tsx`
- `src/components/homeowners-guide-page.tsx`
- Assigned legacy/detail pages

Claude can polish copy, improve layouts, and structure migrated content, but should preserve the original business meaning.

## Branch Workflow

Always start from the latest pushed baseline.

Recommended first command flow:

```bash
cd /Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign
git fetch origin
git checkout homepage-figma-refresh
git pull origin homepage-figma-refresh
```

Create one branch per focused task:

```bash
git checkout -b claude/about-page-figma-sync
```

Use branch names like:

- `claude/about-page-figma-sync`
- `claude/products-page-figma-sync`
- `claude/services-page-figma-sync`
- `claude/contact-page-figma-sync`
- `claude/legacy-page-polish`

Do not work directly on `main`.

Do not deploy.

## First Claude Task

Start with the About page.

Goal:

Redesign the About page using the approved Figma design rules while preserving ARS business content.

Requirements:

- Follow the approved Figma Make visual direction.
- Use primary blue `#0D2B6E`.
- Use secondary red `#DE121A`.
- Use dark navy `#060D1E` only where the design requires dark industrial sections.
- Use IBM Plex Sans typography rules.
- Use `SectionKicker` for all section labels.
- Reuse current shared components where possible.
- Replace raw “old content” style blocks with polished client-demo-ready sections.
- Preserve old ARS business meaning.
- Use real existing ARS assets only.
- Do not edit header, footer, homepage hero, or global tokens.

Suggested branch:

`claude/about-page-figma-sync`

## Page QA Checklist

Before reporting a task as done:

- Production build passes.
- Page has no horizontal scroll.
- Desktop view looks aligned with the approved Figma direction.
- Tablet view is readable and well spaced.
- Mobile view is clean and not crowded.
- Header and footer remain consistent.
- CTA hierarchy is clear.
- Kicker style uses `SectionKicker`.
- Existing ARS content is preserved or improved.
- No fake people/team/founder/management images were introduced.
- Any new reusable component is added to `COMPONENT_INVENTORY.md`.

## Build Command

Use:

```bash
pnpm build
```

## Report Format After Each Task

Claude should report:

- Branch name
- Files changed
- Reusable components used
- New reusable components created, if any
- Visual changes made
- Content preserved from old site
- Build status
- Remaining risks or client-verification items

## Important Notes

- Codex is acting as design-system guard and final integration reviewer.
- Claude should work page by page, not across the whole site at once.
- If a shared component is needed, first check `COMPONENT_INVENTORY.md`.
- If a new shared component is clearly useful, create it carefully and document it.
- If unsure whether something should be global, keep it page-local and mention it in the report.
- Deployment happens only after the user approves the reviewed branch.

