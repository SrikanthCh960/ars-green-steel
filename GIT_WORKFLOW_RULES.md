# ARS Git Workflow Rules

Follow this workflow for every approved page or feature task in this repository.

## Before preparing a commit

- Do not commit, push, or deploy unless the user has explicitly approved it.
- Confirm that the approved task requirements are fully implemented.
- Review the target page or feature at the required desktop, tablet, and mobile widths.
- Confirm visible copy remains locked unless the user explicitly approved a copy change.
- Verify links, downloads, forms, CTA destinations, keyboard navigation, focus states, reduced-motion behaviour, metadata, and route behaviour when relevant.
- Update required documentation before committing:
  - the page-specific implementation or QA report;
  - `docs/content-migration/implemented-pages-audit.md` where applicable;
  - `docs/content-migration/master-migration-matrix.md` where applicable; and
  - `PROJECT_HANDOFF.md` when project status, completed work, blockers, or next steps change.

## Required checks

Run checks proportionate to the change and report their results:

```bash
git diff --check
```

For page or functional changes, normally also run:

```bash
npm run lint
npx tsc --noEmit
npm run qa:routes
npm run build
```

Use targeted lint where full lint is impractical. Document pre-existing unrelated failures; do not fix unrelated work opportunistically.

Read `LOCAL_SERVER_RULES.md` before starting, stopping, building, or previewing the local site.

## Staging rules

Before staging, inspect the worktree:

```bash
git status --short --branch
git diff --stat
git diff -- <explicit-task-files>
```

- Stage only task-specific files with explicit paths.
- Never use `git add .` or broad path staging.
- Do not stage unrelated local changes.
- Never modify, stage, or commit `pnpm-lock.yaml` or `pnpm-workspace.yaml`.
- If a shared component was created or materially changed, update `COMPONENT_INVENTORY.md` in the same commit.

## Commit and push

After the diff and staged files are confirmed:

1. Create a focused, page-specific commit message.
2. Push only the approved branch, normally `homepage-figma-refresh`.
3. Do not deploy after pushing unless deployment was separately approved.

## Completion report

After a successful push, report:

- Branch name
- Commit SHA and message
- Exact files changed
- Checks run and results
- Local review URL
- Any known limitation, missing approval, or remaining blocker

Do not claim a page is fully verified if any required content source, browser/mobile review, approval, asset, or check remains incomplete.
