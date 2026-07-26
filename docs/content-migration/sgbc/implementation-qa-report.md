# SGBC Standalone Page — Implementation QA Report

## Scope and source

- Route: `/sgbc`
- Navigation label: `SGBC`
- Authoritative visible-copy source: `Sustainability - SGBC.docx`
- Source location: `/Users/baburao/Downloads/ARS Web content/Sustainability /Sustainability - SGBC.docx`

## Content-parity matrix

| Source section | Implementation | Status |
|---|---|---|
| Hero Banner | Shared fixed interior `PageHero` with the source tag, H1, and subheading | Exact |
| Winner strip | Source winner line with the document-embedded SGBC 4-Ticks Leader badge | Exact copy; approved embedded badge used |
| Understanding SGBC | Source heading and two paragraphs | Exact |
| Why It Matters | Source heading, paragraph, and four cards | Exact |
| Our Achievement | Source heading, two paragraphs, certificate preview, open, and download actions | Exact copy; approved local certificate used |
| More Than a Certificate | Source heading, paragraph, and three evidence cards | Exact copy; no unsupported logos added |
| The ARS Advantage | Source heading and two paragraphs | Exact |
| FAQs | All five source question-and-answer pairs | Exact |
| Final CTA | Source tag, headline, body, and both CTA labels | Exact |

## Route and navigation

- `/sgbc` is registered in `src/app/sitemap.ts`.
- The Sustainability mega-menu entry is `SGBC` → `/sgbc`.
- `/certifications`, `/green-steel`, and `/ars-green-steel` were not changed for this route.

## Evidence and assets

- Used: the SGBC Leader badge embedded in the source DOCX, copied as `public/ars-assets/sgbc/sgbc-4-ticks-leader-badge.png`.
- Used: existing local certificate preview `public/ars-assets/certifications/previews/sgbc-certificate.png` and source PDF `public/ars-assets/certifications/SGBP-6210-ARS-Steels-Alloy-International-Private-Limited-4-1.pdf`.
- Visual refinement: the existing local ARS manufacturing visual `public/ars-assets/homepage-manufacturing-detail.jpg` is used as a contextual, non-claiming editorial image. Evidence and certification-card icons remain code-native Lucide icons; no new third-party logos were added.
- Missing: explicit permission/citation for third-party badge use; confirmation of rating currency, certificate scope, award date, and the three requested evidence-card logos. No replacement logos, seals, or diagrams were created.

## Accessibility and SEO

- One H1, ordered H2/H3 hierarchy, semantic `main` and section landmarks, descriptive certificate controls, existing focus-ring styles, and `MotionSection` reduced-motion behaviour are implemented.
- `createPageMetadata` supplies title, description, canonical, Open Graph, Twitter, and preview-safe robots behaviour.

## Verification status

- Source DOCX was rendered and visually inspected across all four pages before implementation.
- Passed: `git diff --check`, focused ESLint for the new page and changed shared files, `npx tsc --noEmit`, `npm run qa:routes` (23 internal hrefs, 83 local assets, 144 routes), and `npm run build` (static `/sgbc` generated).
- Full `npm run lint` is blocked by nine pre-existing errors in `steel-price-today` and `tmt-calculator`; the SGBC files produce no lint errors.
- The existing production preview at `http://127.0.0.1:3001/sgbc` must be checked after the route rename. Automated visual desktop/tablet/mobile, keyboard, focus, and reduced-motion review is pending because the workspace Playwright browser executable is not installed; no browser was downloaded or altered.

## Known limitations

- The page should not be treated as production-approved until ARS confirms the claim, rating, dates/scope, citations, and third-party asset permissions.
