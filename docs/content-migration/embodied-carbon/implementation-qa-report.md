# Embodied Carbon — Implementation QA Report

## Source and scope

- Authoritative visible-copy source: `Sustainability  - Embodied Carbon.docx`, supplied at `/Users/baburao/Downloads/ARS Web content/Sustainability /Sustainability  - Embodied Carbon.docx`.
- The five-page source was rendered and visually inspected before implementation.
- A standalone public route is implemented at `/embodied-carbon`. The Sustainability header and footer now link to this route; the former `/green-steel#embodied-carbon` content and anchor were removed. `/ars-green-steel` was not changed.

## Source-to-page parity

| Source section | Destination | Status |
| --- | --- | --- |
| Banner | Hero | Present, including tag, H1, and subhead |
| What Is Embodied Carbon | Basic section | Present |
| Why Embodied Carbon Is Reshaping Construction | Editorial section and four highlights | Present |
| Why Steel Plays a Critical Role | Editorial section | Present |
| How Green Steel Reduces Embodied Carbon | Advantage section, four proof cards, and callout | Present |
| How Material Choice Changes a Project's Carbon Footprint | Project requirement, emission table, accessible engineering comparison, calculation note, and reduction statement | Present |
| Measure Carbon. Don't Estimate It. | Verified-data section and four proof points | Present |
| FAQs | Five native disclosure items | Present |
| Final CTA | Closing section and both CTAs | Present |

Author/implementation labels such as `Banner`, `Highlight Cards`, `Visual`, `Proof Cards`, `Primary CTA`, and `Secondary CTA` were not published as visible page copy. The supplied engineering visual is represented with semantic text, table data, and visible calculation note so it remains readable without colour, hover, or animation.

## Metadata, accessibility, and responsive design

- Uses `createPageMetadata` for canonical, Open Graph, Twitter, and preview-safe robots handling.
- One H1; source-led H2/H3 hierarchy; native table headers; keyboard-operable FAQ disclosures; existing focus-ring styles; and `MotionSection` reduced-motion behaviour.
- The comparison uses labels and text values in addition to colour. Its horizontal table container prevents page-level overflow on narrow screens.

## Evidence and known limitations

- All numbers, emissions figures, EPD references, standards/framework labels, calculation wording, and claims shown are reproduced from the supplied source.
- No new certificate, report, download, product data, citation, or visual asset was invented.
- The source does not provide a linked EPD, source citation for the comparison, assessment boundary documentation, date, or underlying calculation dataset. These remain content-owner evidence gaps and should be resolved before a production claim review.
## Verification

- `git diff --check` passed.
- Targeted ESLint passed for the new route, Green Steel, navigation, and sitemap files.
- `npx tsc --noEmit` passed.
- `npm run qa:routes` passed: 23 internal hrefs, 83 local assets, and 144 routes checked.
- `npm run build` passed and generated both `/embodied-carbon` and `/green-steel`.
- Production preview returned HTTP 200 for both routes. The rendered Embodied Carbon HTML includes the hero H1, key source headings, calculation statement, and closing CTA; the Green Steel HTML contains neither the former `embodied-carbon` anchor nor the moved Embodied Carbon heading.
- Repository-wide `npm run lint` remains blocked by nine pre-existing `@next/next/no-html-link-for-pages` errors in `src/app/steel-price-today/page.tsx` and `src/app/tmt-calculator/page.tsx`; these files were not changed.
- Browser automation is unavailable in this workspace (`agent-browser` is not installed), so screenshot-led desktop/tablet/mobile and manual keyboard traversal remain a final release check.
