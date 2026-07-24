# Institutional Projects QA Report

## 1. Starting State

- Working directory: `/Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign`
- Branch: `homepage-figma-refresh`
- Committed HEAD: `c74f77dcf3413628e3acca737f98df83e15118d8`
- No files were staged.
- Uncommitted Road Projects and Bridges & Flyovers work was present and preserved.
- `PROJECT_HANDOFF.md` had a pre-existing uncommitted modification.
- `pnpm-lock.yaml` and `pnpm-workspace.yaml` were untracked before work and were not modified.

## 2. Sources Reviewed

- `PROJECT_HANDOFF.md`
- `DESIGN_RULES.md` and `DESIGN_SYSTEM.md`
- `docs/content-migration/institutional-projects/implementation-handoff.md`
- Road Projects and Bridges & Flyovers handoffs and QA reports
- `docs/content-migration/master-migration-matrix.md`
- `docs/content-migration/revised-implementation-sequence.md`
- `docs/content-migration/shared-foundation/qa-report.md`
- Existing Institutional Projects route record in `src/data/legacy-pages.json`

## 3. Shared Template Reuse

- Reused `ProjectTypePage`, its typed configuration model, shared metadata helper, ARS design-system tokens, header, footer, contact CTA, related-link pattern, and FAQ disclosure pattern.
- No template extension was needed: the existing configurable hero, application cards, condition cards, related links, and FAQ sections represent the approved Institutional handoff.
- Road Projects and Bridges & Flyovers continue to render through the same component. Their content, headings, CTAs, and metadata remain independently configured.

## 4. Approved Scope

- Existing route retained: `/institutions-projects-tmt-steel-bars`.
- Institutional Projects content only; no forms, new routes, or blocked content areas were added.
- Primary CTA: `Request project quote` → `/request-quote`.
- Secondary CTA: `View product specifications` → `/products/ars-550d#specifications`.

## 5. Content Mapping

| Approved section | Implemented location | Status | Notes |
| --- | --- | --- | --- |
| Institutional-project hero | Shared project-page hero | Implemented | Unique H1, route-specific description, primary and secondary CTA |
| Importance of TMT in institutional construction | Engineering rationale | Implemented | Frames safety, durability, and structural-integrity requirements as project review inputs |
| Schools and universities | Application cards | Implemented | Source-led education-facility context |
| Hospitals | Application cards | Implemented | Source-led large/complex-facility context |
| Government buildings | Application cards | Implemented | Source-led long-term public-use context |
| Benefits/conditions | Project-condition cards | Implemented | Safety/durability, complex structures, and environmental conditions without unsupported product claims |
| Product and quality information | Related-link section | Implemented | ARS 550D specifications, comparison, quality, and manufacturing links |
| FAQ | Native details FAQ section | Implemented | Three source-backed planning questions |
| Project enquiry | Hero and shared contact CTA | Implemented | Existing quote route; no form was added |

## 6. Existing Content Decisions

- **Retained:** the route, enquiry intent, schools/hospitals/government-building application themes, and institutional FAQ topics.
- **Replaced:** the generic legacy renderer with the shared project-type template and route-specific metadata.
- **Merged:** the source application sections into three concise, distinct application cards and the general benefits into planning-oriented condition cards.
- **Removed:** unsupported 4–6% savings, SERC, spectrometer, SGS/EPD, maintenance-free, earthquake-resistance, brochure/leaflet-download, and phone-number-only content. Supporting proof files are not available locally.

## 7. Files Changed

- `src/app/[slug]/page.tsx`
- `src/components/project-type-page.tsx`
- `src/components/site-header.tsx`
- `src/components/site-footer.tsx`
- `docs/content-migration/institutional-projects/qa-report.md`

## 8. Semantic and Accessibility Verification

- The shared hero renders exactly one H1.
- Major sections use H2; application and condition cards use H3.
- Breadcrumb navigation is labelled and marks the current page with `aria-current`.
- CTAs and all contextual links use descriptive Next.js `Link` components and the existing visible focus treatment.
- FAQs use native keyboard-operable `details`/`summary` disclosure.
- The responsive layout preserves source order, stacks grids on smaller viewports, and keeps action controls at least 48px tall.

## 9. SEO Verification

- Unique title: `TMT Bars for Institutional Projects | ARS Green Steel`.
- Unique description, canonical, Open Graph, Twitter, and preview-safe robots behavior use `createPageMetadata`.
- Canonical route: `https://arsgroup.in/institutions-projects-tmt-steel-bars`.
- Social image: local `/legacy-assets/images/TMT-Bars.png`; no approved Institutional-specific social image is present.
- Sitemap inclusion follows the existing legacy top-level page set.
- No structured data was added because visible content does not support project, customer, testing, or certification claims.

## 10. Asset Verification

| Asset group | Expected path | Status | Action |
| --- | --- | --- | --- |
| Institutional banner | `/legacy-assets/images/Applications_Institutions-banner.png` | Missing | Not rendered |
| Three institutional application images | `/legacy-assets/images/Applications-Institutions-1.png` through `-3.png` | Missing | Not rendered |
| Supporting institutional imagery | `/legacy-assets/images/ars-1.png`, `product-section-left.png`, `Segment_SGS-new.png`, `EPD-1.png` | Missing | Not rendered |
| Product social image | `/legacy-assets/images/TMT-Bars.png` | Present | Used only as social image |
| Related CRS asset | `/legacy-assets/images/CRS.png` | Present | Not used on this page |
| Corporate brochure and leaflet | `/legacy-assets/downloads/ARS-Corporate-Broucher-A4-Final-Sep-10.pdf`, `/legacy-assets/downloads/ARS-550D-CRS-Leaflets.pdf` | Missing | No download action rendered |

Eight project imagery files and two downloads are unavailable. No generic or invented institutional imagery was substituted, so no image alt text or responsive image treatment was added.

## 11. Internal-Link Verification

- Added Institutional Projects to the Solutions mega menu and the Solutions footer list.
- The footer now lists Road Projects, Bridges & Flyovers, and Institutional Projects as the complete Project Types stream.
- Added reciprocal contextual links: Road → Institutional, Bridges → Institutional, Institutional → Road and Bridges.
- Verified links to `/request-quote`, `/products/ars-550d#specifications`, `/products`, `/certifications`, and `/manufacturing` through the internal route check.

## 12. Responsive Verification

- The shared page uses mobile-first stacked content, wrapping breadcrumb/action groups, bounded H1 sizing, and content-led card heights.
- No live browser or physical-device test was performed; mobile, tablet, and desktop visual sign-off remains required.

## 13. Cross-Page Regression Verification

- Road Projects, Bridges & Flyovers, and Institutional Projects all render from `ProjectTypePage` during static generation.
- Each route has unique title, description, hero content, application cards, condition cards, related links, FAQ content, and metadata.
- All three routes are exposed in the Solutions mega menu and footer; contextual links resolve between the pages.
- No optional extension was introduced, and Road/Bridges content was not lost.

## 14. Validation Results

- Targeted lint — passed: `src/app/[slug]/page.tsx`, `src/components/project-type-page.tsx`, `src/components/site-header.tsx`, and `src/components/site-footer.tsx`.
- `pnpm --ignore-workspace qa:routes` — passed: 20 internal hrefs, 29 local assets, and 140 routes checked.
- `pnpm --ignore-workspace exec tsc --noEmit` — passed.
- `pnpm --ignore-workspace build` — passed: compiled, type-checked, and generated 143 static pages.

## 15. Deviations from Handoff

- No Institutional-specific imagery was selected because the approved image set is absent locally.
- The available TMT Bars product image is used only as the social image.
- Unsupported savings, testing, certification, and download content was intentionally omitted pending approved evidence.

## 16. Remaining Issues

- Supply and approve the eight missing Institutional project-image assets and their intended placements/alt text.
- Supply approved proof before restoring savings, testing, certification, or download claims.
- Complete live responsive/browser validation.

## 17. Readiness Status

**READY FOR PROJECT-STREAM REVIEW.** All three project-type routes are implemented with shared architecture, unique content and metadata, valid navigation, and passing automated checks. Asset approval and live visual validation remain open.
