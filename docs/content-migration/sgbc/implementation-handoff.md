# SGBC — Implementation Handoff

## Scope and placement

- Approved source: the preserved `/our-certification` record identifies `SGBC certificate` as a certificate-library item.
- Final placement: `/certifications#sgbc-recognition`.
- It does not belong in the general educational `/green-steel` body or the ARS product/proof page. It is a certification-library item that may be cross-linked from those routes after the certificate is published.
- No new route, navigation item, or standalone metadata is required.

## Final section order and exact content

Insert the item into the existing certification library before the broader testing section.

1. **Section anchor:** `sgbc-recognition`
2. **Section label:** `Sustainability documentation`
3. **H2:** `SGBC certificate`
4. **Public body copy:** none. The supplied source confirms the certificate title but supplies no approved rating, scope, date, certificate wording, or explanatory paragraph.
5. **Card content:**
   - Title: `SGBC certificate`
   - Supporting text: none
   - Download action: disabled until the approved certificate PDF is supplied
   - Do not show a badge, logo, rating, date, or status.
6. **Contact action:** `Contact ARS for certificate information` → `/contact`

## Metadata and SEO

- No unique page metadata: the content is an anchor within `/certifications`.
- Canonical remains `/certifications`.
- Do not add a page title, Open Graph override, Twitter override, Certificate schema, Organization claim, or rating structured data.
- The `/certifications` route remains in the sitemap; do not add the anchor as a sitemap URL.

## Internal links

- From `/green-steel`: a contextual `View certifications` link to `/certifications#sgbc-recognition` may be added only after this section exists.
- From `/ars-green-steel`: use the same contextual link only when it does not imply a rating or eligibility claim.
- `/contact` is the only CTA.

## Asset gaps

- Missing: approved certificate PDF, permitted image/scan, permitted SGBC logo/badge, rating wording, award/scope date, and approved explanatory copy.
- These are design/asset and evidence follow-ups. They do not prevent the source-confirmed certificate title from being placed in the certificate library.

## Implementation notes

- Keep the card visually neutral and do not use green confirmation styling that implies a verified rating.
- Do not expose a broken download or placeholder document.

READY WITH ASSET GAPS
