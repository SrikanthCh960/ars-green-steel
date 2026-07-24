# Home and Products Content Stream QA Report

## 1. Starting State

- Repository: `/Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign`
- Branch: `homepage-figma-refresh`
- Starting HEAD: `0b7055979fb54447bb04edf4347f06da2a1602de`
- Pre-existing unrelated changes retained: `PROJECT_HANDOFF.md`, `docs/content-migration/README.md`, `pnpm-lock.yaml`, and `pnpm-workspace.yaml`.
- No files were staged. The product comparison is an accessible section of `/products` at `#comparison`; it is not a separate route.

## 2. Sources Reviewed

- `PROJECT_HANDOFF.md`, `DESIGN_RULES.md`, and `DESIGN_SYSTEM.md`
- `docs/content-migration/implemented-pages-audit.md`
- `docs/content-migration/master-migration-matrix.md`
- `docs/content-migration/revised-implementation-sequence.md`
- `docs/content-migration/shared-foundation/qa-report.md`
- Approved legacy records in `src/data/legacy-pages.json` for Home, ARS 550D, and ARS 550D CRS.

## 3. Pages Reconciled

| Page | Approved sections | Current sections | Missing | Conflicting | Retain | Remove |
| --- | --- | --- | --- | --- | --- | --- |
| Home `/` | Product range, proof, audience and Green Steel content | Existing hero, audience, Green Steel, products, proof and knowledge sections | No new section added in this stream | Product-card copy could drift from Products | Existing hierarchy and Green Steel treatment | Unsupported card-level performance wording |
| Products `/products` | Product range, comparison, sizes, technical CTA | Hero, cards, comparison, sizes and technical section | Approved leaflet file | Separate duplicated product-card data | Existing comparison and size layout | Unsupported comparison rows and active-sounding brochure copy |
| ARS 550D | Product overview, properties, applications and enquiry | Existing hero, overview, properties, actions and CTA | Leaflet is unavailable | Detailed values and certification wording not supported by reviewed record | Source-supported grade and minimum strength values | Unsubstantiated ratios, dimensions and certification claims |
| ARS CRS 550D | CRS overview, chemistry, properties, applications and enquiry | Existing hero, overview, properties, actions and CTA | Leaflet is unavailable | Conflicting 560/620 values versus approved physical-property record | Source-supported alloy and minimum-strength wording | Unsubstantiated ratios, dimensions and performance-duration claims |
| Product Comparison `/products#comparison` | Product comparison and action paths | Accessible comparison table and product links | No standalone comparison route required | Extra inferred rows | Table, caption, row scopes and product links | Inferred bar-size and use-case rows |

## 4. Content-Parity Summary

| Page | Approved content complete | Content gaps resolved | Remaining issues | Status |
| --- | --- | --- | --- | --- |
| Home | Core product content reconciled | Shared names, descriptions, routes, metadata | Broader legacy proof and Green Steel claims remain outside this stream | Ready for next stream |
| Products | Core product and comparison content reconciled | Shared cards, comparison values, leaflet state, metadata | No approved leaflet file | Ready with known asset gap |
| ARS 550D | Core product content reconciled | Unsupported detail removed; source-backed technical wording retained | No approved leaflet file; full technical sheet not supplied | Ready with known asset gap |
| ARS CRS 550D | Core product content reconciled | Unsupported detail removed; source-backed technical wording retained | No approved leaflet file; conflicting source claims deliberately not surfaced | Ready with known asset gap |
| Product Comparison | Reconciled within Products | Inferred rows removed; links and accessible semantics retained | Mobile horizontal scroll remains intentional for table readability | Ready |

## 5. Shared Product Consistency

`src/lib/product-catalog.ts` now supplies the repeated product name, route, description, image, card labels, and comparison facts. Home and Products therefore use the same ARS 550D and ARS CRS 550D wording and destinations. The missing leaflet state is also one shared message.

## 6. Home Page Decisions

- Preserved the current hero structure.
- Confirmed the Green Steel logo uses the available legacy asset.
- Replaced duplicated product-card content with the shared catalog and retained the disabled leaflet state.
- Confirmed manufacturing and quality routes are present in the shared site navigation.

## 7. Products Overview Decisions

- Consolidated the two product cards with Home.
- Kept only source-supported comparison dimensions.
- Preserved the disabled leaflet state; the request action asks for product information and does not imply a download.
- Retained the established visual layout and bar-size section without adding products or routes.

## 8. ARS 550D Decisions

- Retained ARS 550D, Fe-550D, IS 1786:2008, and source-record minimum strength values.
- Removed unsupported elongation, ratio, size, and third-party-certification details from the product property treatment.
- Converted changed internal links to Next.js links.

## 9. ARS CRS 550D Decisions

- Retained the approved micro-alloy names and source-record minimum physical-property values.
- Removed the unsupported 560/620 values, elongation, ratio, and size claims.
- Avoided longevity multipliers and other performance-duration claims from the legacy record.
- Converted changed internal links to Next.js links.

## 10. Product Comparison Decisions

- Compared only ARS 550D and ARS CRS 550D.
- Retained a semantic table with caption, column headers, row headers, keyboard-accessible product links, and a deliberate scroll container for small screens.
- Removed inferred size and application rows rather than presenting unsupported technical values.

## 11. Assets and Downloads

- Verified available: `CRS.png`, `TMT-Bars.png`, `products-all.png`, and `ARS-GREEN-STEEL-Logo.png`.
- Missing: `ARS-550D-CRS-Leaflets.pdf`.
- No replacement PDF was created. No missing download is active.

## 12. Internal-Link Verification

- Home product cards: `/products/ars-550d` and `/products/ars-crs-550d`.
- Products cards and comparison actions: the same two product routes.
- Enquiry, calculator, dealer, quality, and manufacturing destinations remain existing internal routes.

## 13. Semantic and Accessibility Verification

- One H1 is retained on each reconciled route.
- Product-card titles remain H3s beneath section H2s.
- The comparison includes a caption and scoped headers.
- Changed internal links use `next/link`.
- Image alternative text is product-specific.

## 14. SEO Verification

- Each in-scope route uses `createPageMetadata` with a unique title, description, canonical path, Open Graph, Twitter, and preview-safe robots configuration.
- All three product paths and Home are already included in `src/app/sitemap.ts`; comparison is an anchor on `/products` and needs no sitemap entry.

## 15. Responsive Review

- Existing responsive layouts were retained.
- The comparison table intentionally scrolls horizontally on narrow screens instead of compressing technical columns.
- No live browser session was available during this stream; visual viewport verification remains a follow-up limitation.

## 16. Validation Results

| Check | Result |
| --- | --- |
| Targeted lint for changed application files and shared catalog | Passed |
| `pnpm --ignore-workspace qa:routes` | Passed — 20 internal hrefs, 29 local assets, 140 routes |
| `pnpm --ignore-workspace exec tsc --noEmit` | Passed |
| `pnpm --ignore-workspace build` | Passed — Home, Products, ARS 550D, and ARS CRS 550D generated successfully |
| `git diff --check` | Passed |
| Project-type page diff | No changes |
