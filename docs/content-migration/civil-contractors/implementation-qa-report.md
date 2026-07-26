# Civil Contractors implementation QA report

## Scope and source

- Route: `/tmt-steel-bar-guide-civil-contractors`
- Controlling visible-copy source: `Solutions  - Civil Circle (Contractors).docx`
- Audience: contractors and builders
- Primary actions: **Explore Products**, **Find Nearest Dealer**, **Contact Us**, and **Request Quote**
- Visible copy: locked and implemented in document order. Document authoring labels such as `Tag`, `Heading`, `CTA`, and `Cards` are not published as literal labels.

## Content parity

| Source section | Implementation | Status | Notes |
| --- | --- | --- | --- |
| Banner | Shared audience hero | Exact | Uses source heading, body, and two CTA labels/routes. |
| Buyer's Guide | Contractor guide | Exact | All six factors and descriptions retained. |
| ARS Products | Contractor guide | Exact | Three source product cards and labels retained. |
| Site Performance | Contractor guide | Exact | Six source performance cards retained. |
| Why ARS | Contractor guide | Exact | Source introduction and six proof points retained. |
| Quality Assurance | Contractor guide | Exact | Source heading, body, CTA, and phone action retained. |
| Tools & Support | Contractor guide | Exact | Three source labels retained. Brochure label is non-interactive because no approved file exists. |
| Certifications & Recognition | Contractor guide | Exact | Source intro and eight certification labels retained. |
| FAQs | Native details disclosures | Exact | All eight questions and answers retained. |
| CTA | Shared `ContactCta` | Exact | Source heading, body, and CTA labels retained. |

## Evidence and asset blockers

- The Binders image is an existing temporary placeholder and requires approved ARS product imagery before production release.
- No approved product brochure is available; the source label remains visible but does not imply a download.
- ARS must confirm current scope, currency, and display permission for BIS, ISO 9001, ISO 14001, SGS, EPD, GreenPro, SGBC, and Tamil Nadu PWD claims.
- ARS must confirm the availability and scope of free on-site spectrometer testing and the 35+ years, supply, dealer-network, quality, technical-performance, and corrosion-resistance claims.

## Verification

- Targeted ESLint: this file has no new lint errors. The shared file retains pre-existing `react/no-unescaped-entities` errors in the concurrently modified homeowner block, plus existing unused-helper warnings.
- TypeScript no-emit: pending final shared-worktree lint cleanup.
- Browser visual verification: blocked. Existing local processes own ports 3000 and 3001 but return connection-refused; they were not stopped or replaced.
