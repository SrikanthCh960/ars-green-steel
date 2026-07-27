# ARS Binders — Implementation Handoff

## Scope and route

- Intended route: `/products/ars-binders`.
- Intended navigation placement: `Products > Product range`; add a footer Product-column link only when the page has approved publishable content.
- Intended breadcrumb: `Home > Products > ARS Binders`.
- Intended search intent: ARS Binders / factory-made TMT binders and stirrups.

## Source-content finding

No approved Binders source document, product description, sizes, specifications, product image, brochure, certification, availability confirmation, or substantiated product claim is available in the supplied local records. The migration matrix provides the public name and proposed route only; it is not sufficient to create a meaningful product page.

## Reserved implementation structure

After approved product copy is supplied, implement the product-page pattern in this order:

1. **Hero**
   - H1: `ARS Binders`
   - Body: exact approved product introduction only
   - Interim CTA: `Contact ARS` → `/contact`, unless the source approves another valid destination
2. **Product overview**
   - H2: exact approved product positioning
3. **Available product range**
   - H2: exact approved sizes/types only
4. **Specifications**
   - H2: approved table only; omit every unavailable value
5. **Product information and downloads**
   - Do not expose a brochure/leaflet action until the approved file is present
6. **Closing contact CTA**
   - `Contact ARS` → `/contact`

## Metadata and SEO

Use only after source approval:

- Title: `ARS Binders | ARS Green Steel`
- Description: requires approved product description; do not generate it from an unverified label.
- Canonical: `/products/ars-binders`
- Open Graph/Twitter: use approved product image only; otherwise the site default image.
- Sitemap: add the route only with publishable product content.
- No Product schema until product identity, specifications, availability, and supported claims are confirmed.

## Internal links

When content is approved, link to `/products/ars-550d`, `/products/ars-crs-550d`, `/tmt-calculator`, `/dealer-locator`, and `/contact` only where the approved copy makes the relationship useful. Do not infer compatibility, performance, or manufacturing process from the two existing product pages.

## Asset gaps

- Missing: product master copy, sizes/types, technical specifications, product photographs, brochure/leaflet, certificates, availability confirmation, and substantiated performance claims.
- Brochure/download actions remain disabled; the absence of an asset must never produce a broken link.

## Required source to proceed

- Approved product description and use case
- Approved sizes/types and specifications
- Approved product imagery and brochure decision
- Approved claims/certifications and availability confirmation

BLOCKED — INSUFFICIENT SOURCE CONTENT
