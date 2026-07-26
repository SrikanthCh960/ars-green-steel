# Engineers & Architects Implementation QA Report

## Scope and source authority

- Route: `/tmt-steel-bar-guide-engineers-architects`
- Controlling visible-copy source: `/Users/baburao/Downloads/ARS Web content/Solutions/Solutions - Engineers & Architects.docx`
- Audience: Engineers & Architects
- Copy status: locked. Document publishing copy is implemented in source order; authoring directions such as “Display as certification cards” and “Icons or Cards” are not visible copy.

## Implementation summary

The shared audience-page shell now uses a source-led Engineers & Architects content variant. It retains the shared header, hero, footer, metadata, and final conversion band while replacing prior generic technical carousel, proof, resource, and support content with the document-led technical foundation, Why ARS, product paths, tables, certification recognition, support areas, and FAQs.

## Visual system

- The Technical Foundation introduction is centered with the shared `SectionKicker` using center alignment and an end rule.
- The six technical parameters use alternating approved local quality, testing, manufacturing, product, and documentation imagery with a white specification panel, thin navy-grey border, navy icon tile, and restrained red rule.
- The source-ordered Why ARS section is a dark-navy proof treatment. It remains in its document position, before Engineered Solutions.
- Product paths, comparisons, and property tables use restrained square-corner surfaces; tables keep visible captions, scoped headers, royal-blue headers, alternating row surfaces, and horizontal overflow on narrow screens.
- Certification cards and technical-support panels use proof markers rather than new logos, downloads, or unsupported certification imagery.
- Native FAQ disclosures expose an explicit plus/minus state and retain the project focus-ring utility.

## Content parity

| Source section | Implementation | Status |
| --- | --- | --- |
| Banner | Shared hero with exact primary and secondary CTA labels | Implemented |
| Technical Foundation | Six parameter cards in source order | Implemented |
| Why ARS | Six numbered reasons and certification highlights | Implemented |
| Engineered Solutions | Two products and product comparison table | Implemented |
| Technical Performance | Mechanical and chemical property tables | Implemented |
| Certifications & Recognition | Eight named certification cards | Implemented |
| Engineer Support | Six support areas and source CTA | Implemented |
| FAQs | Five native disclosure controls | Implemented |
| Closing CTA | Exact source heading, body, and action labels | Implemented |

## Accessibility and responsive design

- One H1 remains in the shared hero; source sections use H2 and H3 hierarchy.
- Comparison and property data use captions plus scoped table headers. Narrow layouts retain readable columns through horizontal table scrolling.
- FAQs use native keyboard-accessible `<details>` disclosures.
- Interactive links use the project focus-ring utility and the content uses existing responsive grid breakpoints.

## Evidence and release blockers

- The source-provided mechanical/chemical values, compliance statement, certification claims, availability statement, and technical-documentation claims require ARS evidence approval before production publication.
- No approved technical-specification, brochure, MTC, or test-certificate download was supplied. The primary hero CTA scrolls to the published technical-property section; it does not imply a file download.
- The local server on port 3000 was unreachable during this task, so live desktop/tablet/mobile, keyboard, link, and performance verification remains outstanding.
- Route metadata retains canonical, Open Graph, Twitter, and preview-safe robots through `createPageMetadata`. FAQ and Product structured data are not added because the supporting evidence/approval is pending.

## Validation

- `npx tsc --noEmit`: passed.
- Targeted ESLint: blocked by existing unrelated `react/no-unescaped-entities` errors in the Homeowner source-led content within the same shared file; existing unused-symbol warnings are also present. No errors were reported from the Engineers & Architects implementation.
