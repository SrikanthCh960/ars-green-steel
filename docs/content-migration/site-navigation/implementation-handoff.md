# Updated Sitemap Header — Implementation Handoff

## Source and scope

- Source: `/Users/baburao/Downloads/WEBSITE SITEMAP - ARS.docx`
- Scope implemented: global header navigation only.
- Footer navigation remains unchanged.
- Existing pages omitted from the new header remain available by direct URL; no page or migrated content was deleted.

## Primary header order

1. Home icon
2. About
3. Products
4. Sustainability
5. Solutions
6. Resources
7. Press Media

The Steel Price and Get Quote actions remain visible at the right side of the desktop header.

## Menu implementation

### About

- ARS Group
- Vision & Mission
- Leadership
- Manufacturing
- Quality Policy
- Certifications
- Clients

### Products

- ARS 550D TMT Bar
- ARS CRS 550D
- ARS Binders
- Product Comparison
- Technical Specifications
- Download Product Brochure

`All Products` is intentionally omitted from the mega-menu.

### Sustainability

- What is Green Steel
- ARS Green Steel
- Embodied Carbon
- SGPC
- Certifications & Recognitions
- Reports & Downloads

The source label `SGPC` is preserved pending confirmation of whether it should be `SGBC`.

### Solutions

The mega-menu is divided into two visible groups.

**Audience**

- For Home Owners
- For Engineers & Architects
- For Contractors
- For Dealers

**Project Types**

- Institutions
- Bridges & Flyovers
- Road Projects

### Resources

- Steel Price Today
- Price Calculator
- Construction Estimation
- Blog / Knowledge Center
- Guides & Articles
- TMT Bar Calculator
- Construction Cost Estimator
- Career
- FAQs

### Press Media

- TV Commercials
- News & Press Releases
- Events
- Gallery
- Videos
- Success Stories

## Reserved routes

Destinations without approved page content use the shared planned-page renderer. Each reserved route:

- displays only its approved title and `Contact ARS`;
- uses the standard interior hero height and H1 scale;
- is marked `noindex, follow`;
- is excluded from `src/app/sitemap.ts`; and
- can be replaced with a fully audited page when approved content becomes available.

Reserved routes are registered in `src/data/planned-pages.ts`.

ARS Binders uses its intended route, `/products/ars-binders`, and currently contains only the approved product name and `Contact ARS`. Product descriptions, claims, sizes, specifications, imagery, certificates, availability, and brochure actions remain blocked until approved source material is supplied.

## Preservation rule

Removing a page from header navigation does not delete it. Existing page implementations, migrated content, routes, and direct URL access must remain intact unless the user separately approves retirement or redirection.

## Verification completed

- Production build passed.
- TypeScript passed.
- 159 static pages generated.
- Internal route and local asset check passed.
- Desktop header fit and horizontal overflow checked.
- Home control verified.
- Solutions grouping verified.
- Resources links verified.
- Press Media links verified.
- No framework error overlay detected.

## Pending work

- Replace reserved pages only after page-specific content audits and approval.
- Confirm `SGPC` versus `SGBC`.
- Confirm whether `Career` should be displayed as `Careers`.
- Update footer navigation in a separate approved task.
- Add finished routes to the XML sitemap only when they contain approved, publishable content.
