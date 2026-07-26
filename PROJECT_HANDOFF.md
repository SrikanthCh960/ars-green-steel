# ARS Green Steel Project Handoff

Read this file first when continuing the ARS content migration in a new chat.

## Project location and current checkpoint

```txt
/Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign
```

- Branch: `homepage-figma-refresh`
- Current committed checkpoint: `c74f77dcf3413628e3acca737f98df83e15118d8`
- Latest commits:
  - `c74f77d feat: integrate vision and mission into about page`
  - `a80f4da feat: establish shared SEO and content migration foundation`
  - `e446c80 Use local banners for migrated blog articles`
  - `a7f8375 Complete approved blog migration`

## Deployment and SEO safety

- Testing alias: https://ars-green-steel.vercel.app/
- Production domain: `https://arsgroup.in` — **not assigned or launch-approved**.
- Do not deploy, push, switch domains, or declare production-ready without explicit user approval.
- Preview/testing must remain `noindex, nofollow`.
- Production indexing is enabled only when `NEXT_PUBLIC_SITE_URL=https://arsgroup.in` is available at build time in the Vercel Production environment.
- Testing canonicals intentionally use the planned production domain while testing pages remain noindex.

## Completed work

### What Is Green Steel

- Implemented and approved for publishing at `/green-steel` from the controlling `Sustainability - What is Green Steel.docx` source.
- The source-led Banner, Green Steel Explained, Process, Why It Matters, Certifications, FAQs, and Final CTA are present in order. The page uses the shared interior-hero system, restrained ARS imagery, industrial iconography, and reduced-motion-safe transitions without altering locked copy.
- Page metadata, canonical, Open Graph/Twitter, preview-safe robots, sitemap inclusion, Sustainability navigation, internal links, responsive layouts, focus states, keyboard FAQ interaction, and overflow were reviewed.
- Follow-up evidence remains needed for source sustainability claims and the document-referenced Certifications table; these do not block the approved page publication. See `docs/content-migration/what-is-green-steel/qa-report.md`.

### Embodied Carbon

- Implemented the supplied authoritative `Sustainability  - Embodied Carbon.docx` as a new standalone public page at `/embodied-carbon`.
- Sustainability header/footer links now point to `/embodied-carbon`; the prior Green Steel embodied-carbon section and anchor were removed. `/ars-green-steel` was not changed. Sitemap includes the new route.
- The page preserves source order and publishable copy, including the emissions table, engineering comparison, calculation note, FAQs, and CTA labels. The comparison is semantic and readable without colour or motion.
- Missing citation, EPD, assessment-boundary, date, and underlying calculation evidence are explicitly recorded; no new evidence, asset, certificate, or download was created. See `docs/content-migration/embodied-carbon/implementation-qa-report.md`.

### Blog preservation migration

- 94 WordPress source records are registered.
- 88 migrated blog routes are approved with local featured banner assets.
- Six retired routes remain approved one-hop redirects; do not create pages for them.
- Audit baseline: 94 source posts, 88 routes, six redirects, zero unresolved content or SEO parity issues.
- The `/blog` archive and article template use registry-backed local banner images for visible images, Open Graph/Twitter, and Article schema.
- Do not change XML-backed blog titles, descriptions, canonicals, or approval status without a documented parity review.

### Shared migration foundation

- Reusable metadata helper: `src/lib/site-metadata.ts`.
- Site-wide production canonical, Open Graph, Twitter, default social image, and preview-safe robots handling are in place.
- `src/app/robots.ts` blocks crawling outside the configured production domain.
- `src/app/sitemap.ts` uses production URLs, includes 88 approved blog records, and excludes the six redirects.
- The home Green Steel logo points to its available local asset.
- Missing ARS leaflet actions are disabled rather than linking to a missing PDF.
- Internal route/local-asset validation: `scripts/check-internal-routes.mjs`.

### Vision & Mission

- Implemented as a standalone public page at `/vision-mission` from the supplied authoritative `ABout - Vision & Mission.docx`.
- Header and footer About navigation now point to `/vision-mission`; `/about#vision` content was removed to prevent conflicting duplicate copy. Sitemap includes the new route.
- All publishable source sections are implemented in source order: banner, purpose, vision, mission, values, ARS Promise, and closing CTA. Document author labels are not public copy.
- Metadata uses `createPageMetadata`; no new imagery or schema was added. Shared interior hero video is retained.
- Desktop/tablet/mobile, route checker, TypeScript, and build checks pass. Full lint remains blocked by pre-existing errors outside this work; manual keyboard traversal remains a final release check. See `docs/content-migration/vision-mission/implementation-qa-report.md`.

### ARS 550D product-page reconciliation

- Implemented the supplied ARS 550D source at `/products/ars-550d`; the controlling visible-copy source is `/Users/baburao/Downloads/ARS Web content/Products/Product - ARS 550D.docx`.
- The source-led route includes the banner, trust bar, overview, eight benefits, mechanical and chemical property tables, certification/download actions, CRS panel, seven FAQs, selling actions, and final CTA. Source-document instructions are not public copy.
- All supplied publishing copy is present. The unavailable brochure remains visibly unavailable; no brochure, current test report, certificate package, approval document, or size/availability document was created.
- Retained assets: `/ars-assets/TMT-Bars.png` and `/ars-assets/CRS.png`. Both are relevant legacy visuals but low-resolution; final crop/usage approval and higher-resolution product, bar-detail, manufacturing, and application imagery remain required.
- Validation completed: targeted ESLint, TypeScript no-emit, production build, `git diff --check`, and a 1280 px built-page browser check with no horizontal overflow. Final post-change tablet/mobile visual QA and manual keyboard interaction checks remain outstanding.
- Metadata uses `createPageMetadata`; product structured data is not implemented. Preview remains index-safe, not production-approved.
- Technical, safety, performance, savings, standards, and certification claims require ARS documentary approval. Local BIS renewal evidence expired on 2025-10-31, and current SGS/SERC product-specific evidence was not supplied.
- See `docs/content-migration/ars-550d/implementation-qa-report.md`. Commit status: pending page-specific commit and push on `homepage-figma-refresh`.

### ARS Binders product page

- Implemented the supplied ARS Binders source at `/products/ars-binders`; the controlling visible-copy source is `/Users/baburao/Downloads/ARS Web content/Products/Products - Binders.docx`.
- The route includes the approved hero, trust bar, overview/technical overview, eight reasons, applications, eight benefits, seven FAQs, selling actions, and final CTA. The source’s brochure actions remain visibly unavailable because no approved brochure file exists.
- Binders is included in the Products footer and sitemap. Metadata uses `createPageMetadata`; Product structured data is not implemented.
- At the user's explicit request, Applications and Key Benefits use temporary generated placeholders under `public/ars-assets/placeholders/`. Replace them with approved ARS product or manufacturing imagery before production release.
- Final shared-server desktop/tablet/mobile and manual keyboard review, the approved brochure, approved imagery, and source-owner claim approval remain outstanding.
- See `docs/content-migration/binders/implementation-qa-report.md`.

## Current worktree — preserve and do not stage by default

The following are currently untracked research/handoff materials or package-manager files:

- `docs/content-migration/README.md`
- `docs/content-migration/road-projects/`
- `docs/content-migration/bridges-flyovers/`
- `docs/content-migration/institutional-projects/`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`

Do not use `git add .`. Do not commit either pnpm file. Never overwrite or delete unrelated working-tree changes.

## SGBC standalone page — implemented, verification pending

- Route: `/sgbc`; controlling source: `/Users/baburao/Downloads/ARS Web content/Sustainability /Sustainability - SGBC.docx`.
- The Sustainability mega-menu link uses the exact `SGBC` label and points to `/sgbc`; the sitemap now includes `/sgbc`.
- All nine source publishing sections are implemented in order. Authoring instructions are excluded from visible copy.
- Evidence used: the badge embedded in the supplied DOCX (`public/ars-assets/sgbc/sgbc-4-ticks-leader-badge.png`) and the existing local SGBC certificate preview/PDF under `public/ars-assets/certifications/`.
- Remaining blockers: ARS confirmation of rating currency, certificate scope/date, citations, and third-party badge/logo permissions; no approved logos exist for the three evidence cards. Build, TypeScript, route, focused lint, and source-render checks pass; desktop/tablet/mobile browser, keyboard, focus, and reduced-motion review remains pending because the workspace Playwright browser executable is unavailable.
- See `docs/content-migration/sgbc/implementation-qa-report.md` for the content-parity matrix and QA status.

## Next task: Road Projects reference template

First inspect all three approved handoffs:

1. `docs/content-migration/road-projects/implementation-handoff.md`
2. `docs/content-migration/bridges-flyovers/implementation-handoff.md`
3. `docs/content-migration/institutional-projects/implementation-handoff.md`

Then implement **Road Projects** at its existing public route as the reference shared project-page template. Do not implement Bridges & Flyovers or Institutional Projects in the same task unless explicitly requested.

Keep their existing routes, do not introduce blocked Binders, Leadership Messages, SGBC, Embodied Carbon, or Green Steel-consolidation work, and do not invent technical claims, assets, project proof, or certifications.

## Required reading before page work

1. `PROJECT_HANDOFF.md`
2. `docs/content-migration/README.md`
3. `docs/content-migration/implemented-pages-audit.md`
4. `docs/content-migration/master-migration-matrix.md`
5. `docs/content-migration/revised-implementation-sequence.md`
6. The applicable page handoff(s)
7. `docs/content-migration/shared-foundation/qa-report.md`
8. `DESIGN_RULES.md` and `DESIGN_SYSTEM.md`

## Verification standard

Before any feature commit:

- Start with `git status --short`, branch, and HEAD verification.
- Explicitly stage only reviewed files.
- Run targeted lint for changed files; document existing unrelated lint failures without cleaning them up opportunistically.
- Run `pnpm --ignore-workspace qa:routes`.
- Run `pnpm --ignore-workspace exec tsc --noEmit` and `pnpm --ignore-workspace build`.
- For blog changes, also run `pnpm --ignore-workspace audit:blog-migration`.
- Use the relevant migration QA report template and document responsive/browser limitations.
- Do not commit, push, or deploy unless the user explicitly authorises each action.

## ARS content progress

- Documents audited: 22/22
- Shared migration foundation: committed
- Content items implemented: 14/22
- Content items fully verified: 0/22
- Ready for development: Road Projects, Bridges & Flyovers, Institutional Projects
- Blocked items: 5
- Estimated content completion: 40–45%
