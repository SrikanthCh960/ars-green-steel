# Sustainability Content Stream QA Report

## 1. Starting State

The stream began with approved implementation handoffs for What Is Green Steel, Embodied Carbon, and SGBC. Existing broad sustainability-page copy was not treated as approved source material.

## 2. Sources Reviewed

- The approved What Is Green Steel handoff and source-derived copy.
- The approved Embodied Carbon handoff and source-derived copy.
- The approved SGBC handoff, whose source confirms only the title `SGBC certificate`.
- The current `/green-steel`, `/ars-green-steel`, and `/certifications` routes.

## 3. What Is Green Steel Implementation

`/green-steel` is now the single general educational explainer. It contains the approved definition, production pathways, comparison context, limitations, applications, and lower-carbon considerations, with a route-out to ARS-specific information.

## 4. `/green-steel` and `/ars-green-steel` Content Boundary

`/green-steel` owns general education. `/ars-green-steel` retains only ARS product-information and proof-document navigation, links to ARS 550D and ARS CRS 550D, and directs general questions back to `/green-steel`. Generic production explanations and unsupported ARS claims were removed from `/ars-green-steel`.

## 5. Embodied Carbon Implementation

The approved content is implemented as `/green-steel#embodied-carbon`. It explains the topic generally, separates it from product proof, and gives project teams neutral documentation-review questions without adding values or evidence claims.

## 6. SGBC Implementation

`/certifications#sgbc-recognition` presents only `SGBC certificate` and a contact path for certificate information. It does not state a rating, scope, date, issuer detail, or certificate evidence that is not supplied.

## 7. Content Mapping

| Item | Required placement | Implementation status | Remaining issue |
| --- | --- | --- | --- |
| What Is Green Steel | `/green-steel` | Implemented | None for text content |
| Embodied Carbon | `/green-steel#embodied-carbon` | Implemented | None for text content |
| SGBC | `/certifications#sgbc-recognition` | Implemented | Certificate/rating/logo evidence not supplied |

## 8. Claims and Evidence Review

No unsupported numbers, specifications, certifications, environmental performance claims, ratings, or evidence statements were introduced. ARS-specific proof is referenced only as currently published documentation, without representing unavailable material as evidence.

## 9. Asset and Download Gaps

- SGBC certificate, rating/scope evidence, and any approved logo or badge are unavailable.
- No unavailable download action is exposed.
- These gaps are deferred to the design-and-asset phase and do not block text implementation.

## 10. SEO and Metadata Review

`/green-steel` uses the approved unique title and description. `/ars-green-steel` uses distinct ARS-specific metadata. The SGBC entry remains under the existing Certifications page metadata; no duplicate page metadata was created.

## 11. Internal-Link Review

- `/green-steel` links to `/ars-green-steel` and `/contact`.
- `/ars-green-steel` links to `/green-steel`, `/products/ars-550d`, `/products/ars-crs-550d`, `/certifications`, and `/contact`.
- Embodied Carbon links to `/ars-green-steel` and `/certifications#sgbc-recognition`.
- SGBC enquiry links to `/contact`.

## 12. Semantic and Accessibility Review

The educational page has one H1 and ordered H2/H3 sections. The new certification entry uses a section heading and descriptive text link. No image alt text is required because this stream adds no images.

## 13. Responsive Review

The changes use existing responsive containers, spacing, and grid patterns. Live browser/device verification remains pending for the dedicated visual-review phase.

## 14. Validation Results

- Focused lint passed for `src/app/green-steel/page.tsx`, `src/app/ars-green-steel/page.tsx`, and `src/app/certifications/page.tsx`.
- `pnpm --ignore-workspace qa:routes` passed: 20 internal hrefs, 29 local assets, and 140 routes checked.
- `pnpm --ignore-workspace exec tsc --noEmit` passed.
- `pnpm --ignore-workspace build` passed; `/green-steel`, `/ars-green-steel`, and `/certifications` were generated successfully.
- `git diff --check` passed.

## 15. Files Changed

- `src/app/green-steel/page.tsx`
- `src/app/ars-green-steel/page.tsx`
- `src/app/certifications/page.tsx`
- `docs/content-migration/what-is-green-steel/qa-report.md`
- `docs/content-migration/embodied-carbon/qa-report.md`
- `docs/content-migration/sgbc/qa-report.md`
- `docs/content-migration/sustainability-content-stream/qa-report.md`

## 16. Remaining Blocked Documents

- Leadership Messages / From the Mouth of Horses — BLOCKED — INSUFFICIENT SOURCE CONTENT.
- Products – Binders — BLOCKED — INSUFFICIENT SOURCE CONTENT.

## 17. Readiness Status

READY WITH ASSET GAPS
