# Certifications & Awards Implementation QA Report

## Scope

- Route: `/certifications`
- Legacy route: `/our-certification`
- Implementation date: 2026-07-25
- Copy status: locked; only user-approved audit recommendations were implemented

## Evidence boundary

No page-specific Certifications content document was supplied. The preserved legacy record supplies the exact 14 document and award titles. On 2026-07-25, the user explicitly approved downloading the documents and images linked from the original public Certifications page and publishing them on the redesigned page.

## Implemented changes

- Replaced unsupported SGBC rating, exclusivity, environmental-performance, manufacturing, and standards claims with the source-confirmed SGBC certificate entry.
- Removed the unsupported SGBC FAQs, benefit cards, and testing narrative.
- Rebuilt the page as a grouped 14-item certification library.
- Added category navigation, breadcrumb orientation, `#certification-library`, `#downloads`, and `#sgbc-recognition` anchors.
- Added locally generated, high-resolution first-page previews for the 12 PDF records.
- Added full-resolution previews for the two award images.
- Added direct open and download actions for every correctly mapped source file.
- Kept the Billets Renewal Certificate request-only because its original link downloads a TMT-bar renewal rather than a billet certificate.
- Added a permanent redirect from `/our-certification` to `/certifications`.
- Excluded `/our-certification` from the generated sitemap.
- Updated the page title and description without adding unsupported structured data.
- Registered `CertificationDocumentPreview` in `COMPONENT_INVENTORY.md`.

## Document and asset status

| Item | Visible record | Local source file | Local preview |
|---|---|---:|---:|
| Sustainability report | Yes | Yes | Yes |
| SGBC certificate | Yes | Yes | Yes |
| NISST green steel taxonomy certificate | Yes | Yes | Yes |
| PWD Brand approval certificate | Yes | Yes | Yes |
| TMT Bar Renewals certificate | Yes | Yes | Yes |
| Billets Renewal Certificate | Yes | No — source mismatch | No |
| NHAI Source Approval Document (TES) | Yes | Yes | Yes |
| ISO 9001 Certificate | Yes | Yes | Yes |
| ISO 14001 Certificate | Yes | Yes | Yes |
| ISO 45001 Certificate | Yes | Yes — expired 2025-06-09 | Yes |
| Environmental Product Declaration Certificate | Yes | Yes | Yes |
| GRIHA Certificate | Yes | Yes | Yes |
| Excellence in Green Product Initiative (ABP India Infrastructure 2024) | Yes | Yes | Yes |
| ISPAT Udyog Ratan Award for Green Initiative Leadership (2024) Ministry of Steels | Yes | Yes | Yes |

All 14 source files linked from the original page are stored under `public/ars-assets/certifications/`. This includes both TMT renewal PDFs. The newer renewal is connected to the TMT record; the older renewal is retained in the asset archive but is not mislabeled as a billet certificate.

## Accessibility implementation

- One page H1 is retained.
- Breadcrumb and category navigation use semantic navigation landmarks.
- Document records use grouped headings and lists.
- All actions are keyboard reachable and use the existing visible focus treatment.
- Preview triggers have descriptive accessible names.
- The native dialog supports Escape, explicit close, scroll-safe viewing, and focus restoration.
- Decorative duplicate thumbnails use empty alternative text; the enlarged scan uses the document title.
- Interactive targets use a practical minimum height of 44 px.

## SEO safety

- Canonical remains `/certifications`.
- Page-level Open Graph and Twitter metadata continue through `createPageMetadata`.
- Preview environments remain `noindex, nofollow`.
- The legacy route uses a permanent redirect.
- The duplicate legacy URL is excluded from the sitemap.
- No Certificate, Organization rating, or other unsupported structured data was added.

## Remaining blockers

- A correct Billets Renewal Certificate file is still missing. The original Billets link resolves to `TMT-bar-renewal-certificate-1.pdf`, which is an older BIS TMT-bar renewal.
- A current ISO 45001 certificate is still missing. The supplied source file expired on 2025-06-09.
- Approval is still required before adding extracted issuer, document number, product/site scope, issue date, validity, rating, or explanatory copy to the visible cards.

## Verification

- Focused ESLint passed for the Certifications page, preview component, sitemap, and Next.js configuration.
- Internal route and asset QA passed: 22 internal hrefs, 56 local assets, and 140 routes checked.
- TypeScript passed with `--noEmit`.
- The production Webpack build passed and generated `/certifications`.
- `git diff --check` passed.
- Browser rendering confirmed one H1, all 14 document records, and the required `#downloads`, `#sgbc-recognition`, `#management-systems`, and `#awards-recognitions` anchors.
- Browser verification at 390 px confirmed no horizontal overflow.
- The ISO 9001 preview opened from its keyboard-accessible trigger, Escape closed it, and focus returned to the same trigger.
- `/our-certification` resolved to `/certifications` in the local browser.
- No missing local certificate assets or application runtime errors were observed. A Next.js LCP advisory appeared during the artificial full-page capture when a below-fold preview image was brought into the capture viewport; the preview remains lazy-loaded in normal page flow.
