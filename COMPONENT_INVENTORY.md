# ARS Reusable Component Inventory

This is the shared component registry for Codex, Claude, and future contributors.

Before creating a new reusable component, check this file and `DESIGN_SYSTEM.md`.

After creating or materially changing a reusable component, update this file in the same commit.

## Component Governance Rules

- Reuse existing components before creating a new pattern.
- Extend a component with a clear variant only when the new use case belongs to the same pattern.
- Do not create parallel components for the same job.
- Do not hard-code brand colors if a token or component variant exists.
- Do not manually recreate `SectionKicker`; use the component.
- Keep reusable components small, documented by purpose, and safe across pages.

## Active Reusable Components

| Component | File | Purpose | Variants / Notes | Current Usage |
|---|---|---|---|---|
| `SiteHeader` | `src/components/site-header.tsx` | Global header, navigation, mega menu, and primary enquiry actions | Shared across public pages; 76 px navigation row with a 55 px logo and animated brand-red active/hover underline, including the home icon | Homepage and pages |
| `SiteFooter` | `src/components/site-footer.tsx` | Global footer with ARS trust, links, and contact pathways | Rendered once by `src/app/layout.tsx`; page components and `ContactCta` must not render it | All routes |
| `SectionKicker` | `src/components/section-kicker.tsx` | Standard section label with horizontal rule | `brand`, `light`, `green`; optional center/end-line mode | Homepage and page sections |
| `MotionSection` | `src/components/motion-section.tsx` | Scroll reveal wrapper for editorial sections | Uses no reveal transition when the visitor prefers reduced motion; use only when motion supports comprehension | Homepage and interior sections |
| `HomeHero` | `src/components/home-hero.tsx` | Homepage hero with full-bleed video, animated word, and primary CTAs | Simplified single-column composition; Codex-owned, do not reuse blindly for inner pages | Homepage |
| `AudienceJourneySection` | `src/components/audience-journey-section.tsx` | Four image-led audience cards for homepage journey routing | Square image-overlay cards with red/blue hover line, lift, and shadow treatment | Homepage Section 2 |
| `AudienceGuidePage` | `src/components/homeowners-guide-page.tsx` | Shared audience-page shell and source-led guide content | Contractor route uses an exact-copy, ordered contractor guide with semantic FAQs; other audience routes retain their existing shared presentation | Audience solution routes |
| `AnimatedHeroWord` | `src/components/animated-hero-word.tsx` | Legacy rotating hero word helper | Uses brand red token | Available where needed |
| `AboutJourneyTimeline` | `src/components/about-journey-timeline.tsx` | Scroll-led visual timeline for ARS company milestones | Desktop uses a reduced-motion-safe horizontal rail; tablet and mobile use a semantic vertical timeline | `/about` |
| `ContactCta` | `src/components/contact-cta.tsx` | Reusable lead-generation CTA band rendered immediately before the global footer | Supports custom eyebrow, headline, body, primary/secondary CTA, optional page-specific primary-action colour treatment, and a `solid` tone for pages that require a no-gradient surface | Page shells and homepage ending |
| `SteelTestingProof` | `src/components/steel-testing-proof.tsx` | Shared engineering-proof section with local ARS test recordings | Native HTML5 videos with controls, metadata-only preload, responsive aspect ratio, and accessible test labels | All steel-size product pages |
| `LeadForm` | `src/components/lead-form.tsx` | Reusable enquiry form UI | Final submission destination pending client input | Contact and quote flows |
| `ProductLeadCaptureForm` | `src/components/product-lead-capture-form.tsx` | Product-specific quote capture form with trust proof, validation, hidden product/source fields, and honeypot protection | Product prop controls heading and hidden product tag; trust items are product-specific; public submission routing pending ARS confirmation | `/product-550d`, `/product-crs-550d`, `/ars-binders` |
| `PageShell` | `src/components/page-sections.tsx` | Shared page wrapper with header, hero, content, and CTA | For structured interior pages | Multiple pages |
| `PageHero` | `src/components/page-sections.tsx` | Video- or image-led interior page hero | Uses shared brand hierarchy and the global `ars-page-hero` responsive height baseline; optional `backgroundImageSrc`, `backgroundImageAlt`, and `backgroundImagePosition` support approved page-specific imagery while `showActions` and `preserveTitleCase` retain locked source-led hero order and typography where needed | Multiple pages |
| `SectionIntro` | `src/components/page-sections.tsx` | Standard kicker, H2, body intro block | Uses `SectionKicker` internally | Multiple pages |
| `CardGrid` | `src/components/page-sections.tsx` | Reusable card grid for proof, product, service, and content cards | 2, 3, or 4 column modes | Multiple pages |
| `ContentBand` | `src/components/page-sections.tsx` | Image/text editorial content band | Use for page proof sections | Multiple pages |
| `ProofMetrics` | `src/components/page-sections.tsx` | Reusable metrics/proof row | Use for trust and capability proof | Multiple pages |
| `DealerLocatorExperience` | `src/components/dealer-locator-experience.tsx` | Searchable dealer discovery experience powered by supplied ARS dealer data | Search, state, city, and reset controls; popular city shortcuts; load-more results; call and map actions; dealer codes remain internal only | `/dealer-locator` |
| `BlogArchive` | `src/components/blog-archive.tsx` | Native blog discovery experience with search, topic filters, article cards, and progressive loading | Client-side filtering over static repository content; no CMS dependency | `/blog` |
| `CertificationDocumentPreview` | `src/components/certification-document-preview.tsx` | Accessible image enlargement for available certificate and approval scans | Native dialog, Escape/close handling, scroll-safe preview, and focus restoration; accepts `title` and `image` props | `/certifications` |
| `EngineersArchitectsGuideContent` | `src/components/homeowners-guide-page.tsx` | Source-led technical guide content for the Engineers & Architects audience route | Page-specific composition with locked-copy cards, product comparison, semantic technical tables, certification cards, support pathway, and native FAQ disclosures | `/tmt-steel-bar-guide-engineers-architects` |
| `DealerDistributorPage` | `src/components/dealer-distributor-page.tsx` | Source-led commercial partnership page for Dealers & Distributors | XML-aligned hero, partnership and quality bands, canonical product/network links, three native FAQ disclosures, and shared contact/footer CTAs | `/steel-distributors-dealers` |
| `LegalPage` | `src/components/legal-page.tsx` | Shared legal page shell for readable policy and terms content | Dark legal hero, sticky section index, long-form content column, support CTA, and related-policy link | `/privacy-policy`, `/terms-of-use` |
| `SteelPriceLookup` | `src/components/steel-price-lookup.tsx` | Interactive workbook-backed price lookup for region, product, and diameter | Uses the `Price Chart Per Ton` mapping; displays GST-inclusive price per kg and per ton | `/steel-price-today`, `/tmt-steel-price-today` |
| `FaqList` | `src/components/faq-list.tsx` | Shared accessible FAQ disclosure list for page-owned question and answer content | Supports multiple open answers, long React content, keyboard focus, stable IDs, and reduced-motion-safe interaction | FAQ sections across product, calculator, project, sustainability, audience, and informational pages |
| `ManufacturingProcessFlow` | `src/components/manufacturing-process-flow.tsx` | Ordered nine-stage manufacturing process grid with local ARS icons | Responsive 3-column, 2-column, and single-column layouts; semantic ordered list; icon mapping remains presentation-owned | `/manufacturing` |

## Cross-page consistency rules

- FAQ presentation must use `FaqList`; page-specific FAQ data and SEO JSON-LD remain separate.
- Visible product lists use the approved order: ARS CRS 550D, ARS 550D, ARS BINDERS.
- Page-level H1s inherit the global standard from `src/app/globals.css`: Title Case, `clamp(2.65rem, 6vw, 4rem)`, IBM Plex Sans display typography, 800 weight, consistent line height/tracking, and responsive wrapping. Hero variants may change only color and layout context.

## Shared Data Sources

| Data Source | File | Purpose | Current Usage | Verification Notes |
|---|---|---|---|---|
| `dealerRecords` | `src/data/dealers.ts` | Normalized ARS dealer list generated from the updated region-wise dealer workbook | `/dealer-locator` | Dealer active status, phone numbers, and city/state spelling should be verified by ARS before final launch |
| `getBlogArchiveArticles` | `src/lib/blog-content.ts` | Normalizes the 88 migrated ARS articles into typed archive records with category, excerpt, image, date, and read-time metadata | `/blog` | Dates and excerpts are derived from migrated source content and should receive editorial verification during article-template migration |

## New Component Checklist

When adding a reusable component, document:

- Component name
- File path
- Purpose
- Variants or props
- Ownership: Codex, Claude, or shared
- Where it is used today
- Where it should be used in future

## Ownership Defaults

- Codex owns global system components: header, footer, tokens, shared section primitives, navigation, forms, and QA.
- Claude may create page-specific components, but should register any component that is useful across more than one page.
- Shared components should be reviewed by Codex before merge.
