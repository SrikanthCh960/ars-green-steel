# What Is Green Steel — Implementation QA Report

## Scope and controlling source

- Route: `/green-steel`
- Controlling visible-copy source: `/Users/baburao/Downloads/ARS Web content/Sustainability /Sustainability - What is Green Steel.docx`
- The supplied document supersedes the earlier source-derived handoff for visible copy.
- Visible copy is preserved in document order: Banner, Green Steel Explained, Process, Why It Matters, Certifications, FAQs, and Final CTA.

## Implementation

- The existing public route, shared interior hero treatment, H1 scale, shared header/footer, `SectionKicker`, and `MotionSection` were retained.
- The hero now preserves the document CTA hierarchy and all three right-card headings and descriptions.
- The existing process and Why It Matters content were retained because they match the supplied document.
- The source-listed `Highlights` heading is now visible above the approved list.
- The unsupported visible Embodied Carbon sections, numeric `40–60%` statistic, unsupported certification CTA, and undocumented FAQ heading were removed.
- Embodied Carbon is now a separate route outside this page’s implementation scope; `/green-steel` retains no embodied-carbon content.
- The source note that a Certifications table remains in the design was not published or represented as a table because no table content was supplied.
- Existing local ARS placeholder imagery supports the premium industrial presentation; source copy, claims, and CTA labels remain unchanged.

## Claims and evidence

The source contains emissions, recycled-material, electric-arc-furnace, strength/performance, testing/compliance, certification, and embodied-carbon claims. No citations, certificates, reports, or approved comparison data were supplied with the document. The page is source-parity compliant, but production claim approval and evidence remain required.

## SEO and accessibility

- Existing unique page metadata, canonical, Open Graph, Twitter, and preview-safe robots behaviour are retained.
- Sitemap continues to contain exactly one `/green-steel` URL.
- The page retains one H1, ordered H2/H3s, a semantic ordered process list, keyboard-focusable FAQ disclosures, visible focus styling, and reduced-motion support.

## Validation

- Targeted ESLint passed for `src/app/green-steel/page.tsx`.
- TypeScript no-emit passed.
- Internal route and asset validation passed: 23 internal hrefs, 83 local assets, and 144 routes checked.
- `git diff --check` passed.
- Browser verification passed at 1280, 1024, 768, and 390 px with no horizontal overflow or runtime error overlay.
- The local mobile FAQ disclosure receives keyboard focus; final manual release QA remains required.

## Remaining inputs

- Certifications table data and source evidence.
- Citations or written claim approval for sustainability, performance, testing, and certification statements.
- Approved page-specific imagery, if imagery is desired.
- No additional implementation input is required for the approved `/green-steel` page.

## Readiness

APPROVED FOR PUBLISHING — CLAIM EVIDENCE AND CERTIFICATIONS TABLE FOLLOW-UP PENDING
