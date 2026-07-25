# Certifications & Awards Page Audit

**Audit date:** 2026-07-25  
**Audit status:** **FAIL — evidence, parity, and conversion blockers**  
**Current route:** `/certifications`  
**Legacy reference:** `https://arsgroup.in/our-certification`  
**Audited preview:** `https://ars-green-steel.vercel.app/certifications`

## Scope

- **Audience:** Engineers, architects, contractors, infrastructure and institutional procurement teams, dealers, sustainability consultants, and project buyers.
- **Primary objective:** Let users verify ARS quality, system, statutory, product, and sustainability proof before specification or purchase.
- **Primary action:** Open or download the required current certificate or approval.
- **Secondary action:** Request a specific document or clarification from ARS.
- **Copy status:** Locked. No visible copy was changed during this audit.
- **Implementation scope:** Audit only. No application source, component, metadata, route, asset, deployment, or production configuration was changed.

## Controlling content sources

No page-specific approved SEO document was found for the complete certifications page. The controlling sources are therefore:

1. `docs/content-migration/sgbc/implementation-handoff.md`
2. `docs/content-migration/sgbc/qa-report.md`
3. `docs/content-migration/sustainability-content-stream/qa-report.md`
4. `docs/content-migration/master-migration-matrix.md`
5. The existing redesigned `/certifications` page for content not superseded above
6. The original `/our-certification` page as historical and current-public evidence, not automatic copy authority

The SGBC migration QA is explicit: only the source-confirmed **SGBC certificate** entry and a contact path were approved. Rating, scope, issuer detail, dates, environmental-performance claims, and logo use require supplied and approved evidence.

## Sources reviewed

- **Current redesigned page:** `src/app/certifications/page.tsx` and the testing preview at `https://ars-green-steel.vercel.app/certifications`
- **Original ARS page:** `https://arsgroup.in/our-certification`
- **Approved content source of truth:** `docs/content-migration/sgbc/implementation-handoff.md` for SGBC; the existing redesigned page only for material not superseded by a higher source
- **Migration evidence:** SGBC QA, Sustainability Content Stream QA, master migration matrix, shared-foundation QA, legacy page record, and legacy asset manifest
- **Design governance:** `DESIGN_RULES.md`, `DESIGN_SYSTEM.md`, `COMPONENT_INVENTORY.md`, and `PAGE_AUDIT_PROCEDURE.md`
- **Existing reusable components:** `SiteHeader`, `SiteFooter`, `MotionSection`, `SectionKicker`, shared metadata helper, and `QualityDocumentGallery`
- **Supplied Certifications content document:** None found
- **Supplied Certifications asset folder:** `public/ars-assets/certifications/` exists but is empty
- **Existing certificate previews:** two 368 × 523 px images; these are suitable for card-size previews but marginal for detailed full-screen reading

## Interface context

The page sits late in a high-consideration buying journey. Visitors are not primarily looking for brand storytelling; they need fast, reliable proof for technical review, tender submission, material approval, sustainability assessment, or procurement due diligence. The main business risk is loss of trust when a named certificate cannot be inspected or when unsupported claims appear stronger than the available evidence.

## Content parity matrix

| Source item or section | Current page location | Status | Required action |
|---|---|---|---|
| Certificates & Awards page identity | Hero: “Proof before purchase.” | Partial | Keep the stronger hierarchy, but retain an explicit, immediately visible “Certifications & Awards” page label for task confidence and search clarity. |
| Sustainability report download | Missing | Missing | Add only after the report file, title, reporting period, issue date, and publication approval are verified. |
| SGBC certificate download | SGBC section; “file coming soon” | Conflicting | The public legacy page exposes a PDF, but the repository does not contain an approved local file. Reconcile the source file and approval status; then provide direct view/download access. |
| NISST Green Steel Taxonomy certificate | Mentioned indirectly as “India’s Green Steel Taxonomy” | Conflicting | Do not use the standard as supporting proof until the certificate, scope, date, validity, and approved wording are verified. Add the verified document to the library when approved. |
| PWD brand approval | Generic “PWD and NHAI references” card | Partial | Replace generic explanation with a verified document record, including authority, product/scope, issue/validity information, and file action. |
| TMT bar renewal | Generic “Product renewals” card | Partial | Add a verified, distinctly named document record; do not combine it with billet renewal. |
| Billets renewal | Generic “Product renewals” card | Partial | Add a separate verified record and check the legacy source’s apparent PDF/title mismatch before migration. |
| NHAI source approval document | Generic “PWD and NHAI references” card | Partial | Add a verified document record and clarify whether it is an NHAI approval, contractor/TES source-approval letter, or another document type. |
| ISO 9001 | Hero stat and “System proof” | Partial | Add verified certificate details and a file action. Do not present “ISO” as complete proof without inspectable evidence. |
| ISO 14001 | “System proof” | Partial | Add verified certificate details and a file action. |
| ISO 45001 | “System proof” | Partial | Add verified certificate details and a file action. |
| Environmental Product Declaration | Hero stat and SGBC proof card | Conflicting | Add the approved EPD file and verified programme, declaration number, product scope, publication/validity dates, and verification status. Escalate the current carbon-intensity wording for approval before publication. |
| GRIHA certificate/catalogue entry | “Green proof” card | Partial | Add the approved document record and use the exact verified document type; do not imply a project-level certification. |
| Excellence in Green Product Initiative recognition | Generic awards card | Partial | Add an award/recognition record only after title, organiser, year, recipient, and image/publication rights are verified. |
| ISPAT Udyog Ratan recognition | Generic awards card | Partial | Verify the exact award title, presenting body, recipient, and whether “Ministry of Steel” is an organiser, presenter, or endorsement before publishing. |
| Direct download behaviour | Replaced by request/contact CTAs | Missing | Restore direct file access for approved public documents. Keep enquiry as a fallback, not the default path for already-public proof. |
| Breadcrumb / page orientation | Missing | Missing | Add `Home > About or Sustainability > Certifications & Awards` using the approved information architecture. Do not repeat the legacy page’s incorrect “Applications” placement. |
| Testing explanation | “Testing proof” section | Unsupported extra | Trace each visible statement to approved quality/testing content or escalate it. This section does not replace certificate records. |
| Long-form SGBC education and FAQs | SGBC section | Unsupported extra | Hold from launch until the exact copy and claims are approved against the supplied certificate and authorised SGBC source material. |

## 1. What works

### Keep

- The redesigned page has a clear single H1, strong editorial hierarchy, disciplined ARS blue/white/red colour use, and a credible industrial tone.
- The hero is substantially more premium and focused than the legacy split-banner treatment.
- The broad grouping into quality, systems, sustainability, approvals, renewals, and recognition is a useful direction for procurement scanability.
- The page-level metadata uses the shared metadata helper, preserves the `/certifications` canonical intent, and the route is included in the sitemap.
- The `#sgbc-recognition`, `#certification-library`, and `#downloads` anchors exist.
- Desktop and 390 px mobile review showed no horizontal overflow. Mobile stacking, section spacing, CTA wrapping, and footer accordions remained usable.
- Interactive FAQs use native `details`/`summary`, giving a functional keyboard-operable baseline.
- The primary request CTAs are visible at the top and near the end of the page.

## 2. Problems identified

### Essential fixes

1. **Critical — the page does not provide the certification library its name and navigation promise.**  
   The legacy page currently exposes 14 proof items. The redesign exposes zero certificate/report downloads and instead sends users to generic pages or the contact form. This blocks the page’s primary verification task and weakens tender/procurement confidence.

2. **Critical — unsupported SGBC and sustainability claims conflict with approved migration QA.**  
   The current page asserts:
   - a **4-Ticks Leader Rating**;
   - the **highest level** of SGBC recognition;
   - **“Only Indian TMT manufacturer”** status;
   - lower-carbon performance;
   - Electric Arc Furnace production using recycled steel;
   - increasing renewable-energy integration;
   - carbon-emission-intensity evidence; and
   - support from GreenPro, BIS, ISO, SGS, and India’s Green Steel Taxonomy.

   The approved handoff requires the certificate, rating wording, scope, date, validity, logo permission, and supporting proof before these claims can be published. The repository currently contains neither the SGBC PDF nor an approved local badge/logo.

3. **High — public-source and redesigned-page states contradict each other.**  
   The legacy page currently links an SGBC PDF and sustainability report, while the redesign says “SGBC certificate file coming soon” and that final PDFs are still to be supplied. This inconsistency is visible to buyers and must be resolved through an approval and asset-ingestion review.

4. **High — proof categories are links to adjacent marketing pages, not document records.**  
   “Quality proof,” “System proof,” and “Green proof” navigate to `/our-quality`, `/manufacturing`, and `/green-steel`. A user expecting certificate evidence is diverted into general content with no document-level completion state.

5. **High — current navigation promises a broken anchor journey.**  
   Header/footer links target `/certifications#downloads`, but the “Downloads” section contains no downloads. The anchor technically resolves but fails the user’s intent.

6. **High — claims lack document metadata.**  
   There are no certificate numbers, issuing bodies, product/scope labels, issue dates, expiry/valid-through dates, revision status, or clear “superseded” handling. Procurement users cannot determine whether proof is applicable or current.

7. **Medium — the content flow overweights SGBC education.**  
   The SGBC narrative and five FAQs occupy more vertical space than the entire proof library. This turns a verification destination into a long sustainability explainer and delays the main task.

8. **Medium — the page lacks orientation and category navigation.**  
   There is no breadcrumb or compact jump/filter navigation. Users arriving from search or a tender workflow cannot immediately see where they are in the information architecture or jump to ISO, product approvals, sustainability documents, or awards.

9. **Medium — some assets are visually misleading or incomplete.**  
   The “System proof” and “Green proof” card images render as grey/empty gradients in the audited preview, reducing trust and making the three cards feel unfinished. The hero contains no authentic certificate, facility, testing, or product evidence.

10. **Medium — the mobile page is excessively long for the primary task.**  
    At 390 px, users must pass three marketing cards, extensive SGBC copy, seven benefit/proof cards, five FAQs, and a testing section before reaching the supposed download area.

11. **Medium — legacy evidence requires source-level verification before reuse.**  
    The legacy “Billets Renewal Certificate” link appears to point to a file named `TMT-bar-renewal-certificate-1.pdf`. NHAI wording, award attribution, and some certificate validity details also require manual document inspection. Legacy labels and filenames must not be migrated blindly.

12. **High — the legacy public route is not redirected to the canonical redesigned route.**  
    `/our-certification` remains registered in `legacy-pages.json` and is generated by the catch-all legacy route, while `/certifications` is also in the sitemap and declares itself canonical. Without an explicit permanent redirect, users and crawlers can reach two competing page experiences and legacy internal links retain the obsolete route.

13. **High — document preview and zoom behavior is absent from the audited route.**  
    `QualityDocumentGallery` provides an existing native-dialog image preview pattern, but `/certifications` does not import or render it. There are no certificate thumbnails that open, no PDFs, no view/download actions, and therefore no certificate-specific Escape, focus-restoration, zoom, or download behavior to complete or test.

14. **Medium — existing preview resolution is insufficient for detailed document verification.**  
    The two available certificate images are only 368 × 523 px. They can support small previews, but enlarged text is unlikely to remain reliably legible for technical verification. Approved PDFs or higher-resolution scans are required.

15. **Medium — no certification-specific structured data is present.**  
    This is currently safer than inventing Certificate, Organization, or rating claims, and the SGBC handoff explicitly forbids such unsupported schema. Breadcrumb structured data could be considered only after the page’s final information architecture and visible breadcrumb are approved.

### Unsupported current copy

Unsupported or not-yet-approved visible copy was found. It includes the SGBC rating/exclusivity claims, performance/manufacturing claims, sustainability-standard support claims, several testing statements, and broad statements that imply independent verification without exposing the evidence. These require content-owner approval and document-level substantiation; they must not be silently edited during design implementation.

### Required assets and documents

The repository manifest records certification assets, but only two certificate preview images are local:

- `/ars-assets/awards-certificates-img2.png`
- `/ars-assets/awards-certificates-img3.png`

The sustainability report, SGBC certificate, NISST certificate, PWD approval, TMT/billet renewals, NHAI document, three ISO certificates, EPD, GRIHA file, and award media are not available as approved local files. SGBC logo/badge usage permission is also unresolved.

## 3. UX improvements

### Add

- Put the actual document library immediately after a short page introduction.
- Use procurement-oriented categories: **Sustainability**, **Product & statutory approvals**, **Management systems**, and **Awards & recognitions**.
- Add a compact category jump navigation or filter with a visible result count.
- Make every verified record show:
  - exact document title;
  - issuer;
  - applicable product/site/scope;
  - certificate/reference number where approved;
  - issue and valid-through dates;
  - status such as Current, Renewal pending, Superseded, or Historical;
  - `View document` and `Download PDF` actions.
- Preserve request support as the fallback for unavailable, tender-specific, or additional documents.
- Add a clear breadcrumb using the approved About/Sustainability architecture.

### Remove or combine

- Move the long SGBC educational content below the document library, or combine it into a concise evidence-backed recognition feature after the SGBC record.
- Combine repeated “why it matters” and “ARS advantage” explanations after copy approval; they currently restate the same sustainability benefit.
- Remove the testing section from this page if it cannot be traced to approved copy; otherwise reduce it to a contextual link to the dedicated quality/testing route.

## 4. Visual improvements

### Improve

- Replace the empty/grey card media with verified certificate crops, issuer marks used with permission, or a restrained text-first document-list treatment.
- Use a dense editorial document index rather than large marketing cards. Certificate pages benefit from visible metadata and comparison more than oversized imagery.
- Create stronger distinction between a certification, approval, report, declaration, and award. They should not share an identical visual treatment or imply equal evidentiary weight.
- Use status chips sparingly and semantically; avoid green status styling unless the document is verified as current.
- Reduce the oversized empty hero area and introduce authentic proof imagery only when approved.
- Keep the current typography, colour hierarchy, section kickers, and restrained red accents.

## 5. Accessibility improvements

### Essential fixes

- Add visible focus styling and keyboard verification for every document action, filter, category jump, CTA, and accordion.
- Make download links announce file type and, when known, approximate file size; do not rely on an icon alone.
- Ensure external or new-tab document behaviour is disclosed in the accessible name and visible helper text.
- Use a real list or grouped sections for document records and retain a logical H2/H3 hierarchy.
- If certificate thumbnails are informative, give them document-specific alt text. If the same title is adjacent, use empty alt text to avoid duplication.
- Preserve minimum 44 × 44 px touch targets for filters, accordions, and file actions.
- Add a visible focus indicator to native `summary` markers and confirm focus is not clipped by section overflow.
- Do not represent “coming soon” as an interactive-looking pill with only `aria-disabled`; use plain status text or a disabled control with a clear reason.

### Verification still required

- Full keyboard-only navigation through the mobile menu, every FAQ, and any future preview/download controls. The initial tablet tab order was logical: skip link, logo, utility links, navigation control, hero CTAs, then proof cards.
- Screen-reader announcement of navigation menus and footer accordions.
- WCAG AA contrast measurements for small steel-grey text, pale-red labels, and white text on translucent blue cards.
- Reduced-motion behavior for `MotionSection`.
- Tablet landscape and standard laptop widths.

## 6. Conversion improvements

### Essential fixes

- Treat direct evidence access as the primary conversion. Making a buyer contact sales for a public certificate adds avoidable friction and can cause tender abandonment.
- Change the fallback journey from a generic `/contact` route to a preselected certification-support request with document, product, project type, company, email/phone, and deadline context. Do not add fields or copy until approved.
- Place the support CTA beside unavailable or tender-specific records, not as a replacement for the whole library.
- Add “Need help confirming applicability?” near document metadata so technical users can ask a precise question.
- Preserve `Request quote` and product discovery as secondary journeys after users complete evidence review.

## 7. Priority level

**Overall priority: Critical.**

The page is visually polished and responsive, but it fails its core user task, contradicts the current public evidence state, and publishes material claims beyond the approved migration evidence. These issues create serious trust, procurement, legal/content-governance, and conversion risk. The page should not be approved for production until the evidence pack is verified, unsupported claims are resolved by the content owner, and direct document access is implemented.

## Recommendation tiers

### Essential fixes

- Resolve and approve the complete certificate/report evidence pack.
- Remove, retain, or replace unsupported visible claims only after the content owner supplies exact approved copy.
- Restore direct viewing/downloading for approved public proof.
- Redirect `/our-certification` permanently to `/certifications`.
- Make the `#downloads` destination fulfil its visible and navigational promise.
- Provide legible PDFs or high-resolution scans and verify preview, Escape, close, focus restoration, and download behavior.

### Recommended improvements

- Put the verified document library before long-form educational content.
- Add categories, document metadata, status handling, and a precise fallback support journey.
- Add a visible breadcrumb and category navigation after the information architecture is approved.
- Reuse and extend the existing document-dialog pattern instead of creating a parallel preview system.
- Complete contrast, keyboard, screen-reader, tablet landscape, laptop, and reduced-motion verification.

### Optional enhancements

- Add search/filtering only if the approved library remains large enough to justify it.
- Add file type, file size, revision history, and superseded-document access where procurement policy requires it.
- Add breadcrumb structured data only after the visible breadcrumb and route hierarchy are approved.
- Add analytics for document views, downloads, failed file loads, and certificate-support requests without collecting unnecessary personal data.

## Recommended implementation sequence

1. Obtain and inspect the latest approved files for all 14 public legacy records.
2. Confirm ownership, publication permission, exact titles, issuer, scope, dates, validity, and supersession status.
3. Resolve SGBC rating, exclusivity, manufacturing, carbon, and logo/badge wording with the content owner.
4. Define the approved content/parity source for the complete page and lock its visible copy.
5. Build the document library and direct file actions using existing tokens and components.
6. Reorder or reduce the SGBC educational content only after exact copy approval.
7. Verify all files, anchors, metadata, keyboard behavior, responsive widths, contrast, reduced motion, and route checks.

## Audit verification record

- Compared the current redesigned route with the original public page.
- Reviewed the implementation, shared header/footer navigation, shared metadata helper, sitemap entry, asset manifest, SGBC handoff, SGBC QA, sustainability-stream QA, migration matrix, design rules, design system, and component inventory.
- Visually inspected the original and redesigned pages at desktop width.
- Visually inspected the redesigned page at 390 × 844.
- Visually inspected the redesigned page at 768 × 1024.
- Confirmed 390 px viewport width equals document scroll width; no horizontal overflow was observed.
- Confirmed 768 px viewport width equals document scroll width; no horizontal overflow was observed.
- Confirmed one H1 and native FAQ `details` elements in the rendered DOM.
- Confirmed the initial keyboard focus order begins with the skip link and proceeds logically through primary controls.
- Confirmed no browser console errors or warnings were observed during the tablet pass.
- Did not submit forms, request downloads, modify the application, run a deployment, commit, push, or change production configuration.
