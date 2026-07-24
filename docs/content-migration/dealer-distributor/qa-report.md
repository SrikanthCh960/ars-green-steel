# Dealer & Distributor Reconciliation QA Report

## 1. Starting State

- Repository: `/Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign`
- Branch: `homepage-figma-refresh`
- Starting HEAD: `c07d06887fbe4c97376ff6ecc2e8993e61aa6f70`
- Pre-existing unrelated changes retained: `PROJECT_HANDOFF.md`, `docs/content-migration/README.md`, `pnpm-lock.yaml`, and `pnpm-workspace.yaml`.

## 2. Sources Reviewed

- Project handoff, design rules, design system, migration audit, migration matrix, implementation sequence, and shared-foundation QA
- Approved legacy record for `/steel-distributors-dealers`
- Current dynamic route, shared audience guide, existing `/become-a-dealer` form page, contact, product, manufacturing, quality, header, footer, sitemap, and local assets

## 3. Page Purpose

The page is a commercial entry point for prospective Dealer and Distributor enquiries. It introduces the available product paths, links to existing product and quality information, and directs partnership interest to the existing contact route. It does not promise commercial terms or represent an application workflow.

## 4. Dealer and Distributor Content Decision

Treat Dealer and Distributor as one combined audience. The approved source does not state a distinct eligibility model, responsibility, territory, commercial arrangement, or onboarding process for either role. Separate categories would be unsupported.

## 5. Content Mapping

| Approved requirement | Implemented location | Status | Notes |
| --- | --- | --- | --- |
| Construction-excellence page purpose | Hero | Retained | Uses the approved source heading and a source-aligned partner statement |
| Partnership or commercial enquiry | Hero and final CTA | Replaced | One clear `Contact ARS about partnership` route replaces the non-working dealer-form destination |
| Product range | Product portfolio | Retained | Links only to ARS 550D and ARS CRS 550D pages |
| Quality as a construction consideration | Quality-information section | Merged | Links to existing quality and manufacturing pages; unverified proof is not repeated |
| Source enquiry prompt | Enquiry-expectation panel | Reordered | Limits the request to basic information and explicitly defers requirements to ARS confirmation |
| Dealer/distributor distinction | Page-purpose copy | Needs business confirmation | No distinction is stated by the approved source |
| Source FAQ technical/certification answers | Not rendered | Removed | The statements include unsupported performance and certification claims |
| Brochure and leaflet actions | Not rendered | Removed | Source files are unavailable; no download is exposed |

## 6. Existing Content Decisions

- Retained: source route, construction-excellence heading, product-range intent, phone contact, and product references.
- Replaced: the shared audience-guide layout with a dedicated commercial-enquiry structure and a unique metadata declaration.
- Merged: product-quality context into links to the existing product, quality, and manufacturing routes.
- Reordered: contact is presented after product context and remains the primary conversion action.
- Removed: unsupported claims about growth, local demand, territory, onboarding, price guidance, certification support, sales support, and the generic non-submitting dealer form as the page CTA.
- Deferred: eligibility, operational requirements, Dealer versus Distributor responsibilities, onboarding, commercial terms, and any form fields beyond basic information.

## 7. Conversion and CTA Review

The primary action is `Contact ARS about partnership` and routes to `/contact`. The supporting action is `View product range`. The route does not expose the existing `/become-a-dealer` form as its primary conversion because its submission endpoint is not confirmed. A verified telephone action remains available in the enquiry-expectation panel.

## 8. Future Form Recommendation

- Form purpose: collect a Dealer or Distributor commercial-enquiry request for ARS follow-up.
- Likely user: a prospective commercial partner.
- Required outcome: ARS receives the enquiry and confirms the next step directly.
- Approved information needs: only basic information is supported by the source.
- Items requiring business confirmation: contact fields, business identity, location or coverage, product interest, consent, routing owner, service-level expectation, and CRM/email destination.

## 9. Files Changed

- `src/app/[slug]/page.tsx`
- `src/components/dealer-distributor-page.tsx`
- `src/components/homeowners-guide-page.tsx`
- `docs/content-migration/dealer-distributor/qa-report.md`

## 10. Asset and Download Verification

| Asset | Required by source | Available file | Current usage | Final status |
| --- | --- | --- | --- | --- |
| Contact banner | Existing page imagery | `/ars-assets/Contact_banner.png` | Hero | Available and retained |
| ARS 550D product image | Product context | `/ars-assets/TMT-Bars.png` | Product card | Available and retained |
| ARS CRS 550D product image | Product context | `/ars-assets/CRS.png` | Product card | Available and retained |
| Civil Circle source images | Listed by source | Not available as approved dealer assets | Not used | Needs approved asset if required later |
| SGS / EPD source artwork | Listed by source | Not available as approved dealer assets | Not used | Needs evidence and asset approval |
| Corporate brochure / product leaflet | Listed by source | Files absent | Not exposed | Disabled by omission |

## 11. Internal-Link Verification

The implementation uses existing `/contact`, `/products`, `/products/ars-550d`, `/products/ars-crs-550d`, `/our-quality`, and `/manufacturing` routes. Header, audience-journey, footer, and sitemap references retain the public `/steel-distributors-dealers` route. No navigation changes were required.

## 12. Semantic and Accessibility Verification

- One H1 is present in the hero; major page sections use H2 and product cards use H3.
- All internal destinations use `next/link`; the telephone action uses a descriptive `tel:` anchor.
- Existing focus-ring treatments are used for every changed interactive control.
- Image alt text describes the image purpose; icon-only decoration is hidden from assistive technology.
- The desktop two-column sections collapse to a single column at smaller widths.

## 13. SEO Verification

`createPageMetadata` provides a unique title, description, canonical, Open Graph, Twitter, and preview-safe robots inheritance for `/steel-distributors-dealers`. The existing route remains included through the dynamic legacy-route sitemap generation. No structured-data claims were added.

## 14. Responsive Review

The dedicated page uses responsive hero type, wrapping CTA controls, two-column grids that stack below desktop widths, fixed image-card bounds, and no viewport-width horizontal rails. Live browser review at approximately 1440px, 768px, and 390px is unavailable in this environment and remains pending.

## 15. Validation Results

| Check | Result |
| --- | --- |
| Targeted lint | Passed with three pre-existing unused-helper warnings in `homeowners-guide-page.tsx`; no errors or new lint failures |
| `pnpm --ignore-workspace qa:routes` | Passed — 21 internal hrefs, 29 local assets, and 140 routes checked |
| `pnpm --ignore-workspace exec tsc --noEmit` | Passed |
| `pnpm --ignore-workspace build` | Passed — generated 143 static pages, including the Dealer & Distributor route |
| `git diff --check` | Passed |

## 16. Deviations from Approved Sources

The authoritative source is largely contractor/product material and does not define commercial-partnership terms. The page preserves a combined partnership enquiry purpose without inventing eligibility, benefits, margins, territories, network scale, certification, performance, or onboarding claims. Unsupported FAQ answers and unavailable downloads are intentionally omitted.

## 17. Remaining Issues

- ARS must confirm commercial eligibility, Dealer versus Distributor distinction, onboarding process, and any future form fields/routing.
- The source-listed certificate artwork and download files are unavailable and remain unexposed.
- Live device/browser review remains pending.

## 18. Readiness Status

NEEDS BUSINESS CONFIRMATION
