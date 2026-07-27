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
| `SiteFooter` | `src/components/site-footer.tsx` | Global footer with ARS trust, links, and contact pathways | Shared across public pages; Codex-owned | Homepage and pages |
| `SectionKicker` | `src/components/section-kicker.tsx` | Standard section label with horizontal rule | `brand`, `light`, `green`; optional center/end-line mode | Homepage and page sections |
| `MotionSection` | `src/components/motion-section.tsx` | Scroll reveal wrapper for editorial sections | Uses no reveal transition when the visitor prefers reduced motion; use only when motion supports comprehension | Homepage and interior sections |
| `HomeHero` | `src/components/home-hero.tsx` | Homepage hero with video, animated word, CTAs, and proof copy | Codex-owned; do not reuse blindly for inner pages | Homepage |
| `AudienceJourneySection` | `src/components/audience-journey-section.tsx` | Four image-led audience cards for homepage journey routing | Square image-overlay cards with red/blue hover line, lift, and shadow treatment | Homepage Section 2 |
| `AudienceGuidePage` | `src/components/homeowners-guide-page.tsx` | Shared audience-page shell and source-led guide content | Contractor route uses an exact-copy, ordered contractor guide with semantic FAQs; other audience routes retain their existing shared presentation | Audience solution routes |
| `AnimatedHeroWord` | `src/components/animated-hero-word.tsx` | Legacy rotating hero word helper | Uses brand red token | Available where needed |
| `AboutJourneyTimeline` | `src/components/about-journey-timeline.tsx` | Scroll-led visual timeline for ARS company milestones | Desktop uses a reduced-motion-safe horizontal rail; tablet and mobile use a semantic vertical timeline | `/about` |
| `ContactCta` | `src/components/contact-cta.tsx` | Reusable lead-generation CTA band rendered immediately before the global footer | Supports custom eyebrow, headline, body, primary/secondary CTA, optional page-specific primary-action colour treatment, and a `solid` tone for pages that require a no-gradient surface | Page shells and homepage ending |
| `LeadForm` | `src/components/lead-form.tsx` | Reusable enquiry form UI | Final submission destination pending client input | Contact and quote flows |
| `PageShell` | `src/components/page-sections.tsx` | Shared page wrapper with header, hero, content, and CTA | For structured interior pages | Multiple pages |
| `PageHero` | `src/components/page-sections.tsx` | Video-led interior page hero | Uses shared brand hierarchy and the global `ars-page-hero` responsive height baseline; `showActions` and `preserveTitleCase` retain locked source-led hero order and typography where needed | Multiple pages |
| `SectionIntro` | `src/components/page-sections.tsx` | Standard kicker, H2, body intro block | Uses `SectionKicker` internally | Multiple pages |
| `CardGrid` | `src/components/page-sections.tsx` | Reusable card grid for proof, product, service, and content cards | 2, 3, or 4 column modes | Multiple pages |
| `ContentBand` | `src/components/page-sections.tsx` | Image/text editorial content band | Use for page proof sections | Multiple pages |
| `ProofMetrics` | `src/components/page-sections.tsx` | Reusable metrics/proof row | Use for trust and capability proof | Multiple pages |
| `DealerLocatorExperience` | `src/components/dealer-locator-experience.tsx` | Searchable dealer discovery experience powered by supplied ARS dealer data | City, state, pincode, dealer name, dealer code, and phone search; popular city shortcuts; load-more results; call and map actions | `/dealer-locator` |
| `BlogArchive` | `src/components/blog-archive.tsx` | Native blog discovery experience with search, topic filters, article cards, and progressive loading | Client-side filtering over static repository content; no CMS dependency | `/blog` |
| `CertificationDocumentPreview` | `src/components/certification-document-preview.tsx` | Accessible image enlargement for available certificate and approval scans | Native dialog, Escape/close handling, scroll-safe preview, and focus restoration; accepts `title` and `image` props | `/certifications` |
| `EngineersArchitectsGuideContent` | `src/components/homeowners-guide-page.tsx` | Source-led technical guide content for the Engineers & Architects audience route | Page-specific composition with locked-copy cards, product comparison, semantic technical tables, certification cards, support pathway, and native FAQ disclosures | `/tmt-steel-bar-guide-engineers-architects` |
| `DealerDistributorPage` | `src/components/dealer-distributor-page.tsx` | Source-led commercial partnership page for Dealers & Distributors | Nine locked-copy sections in source order, source-safe product links, native FAQ disclosures, and a shared contact CTA | `/steel-distributors-dealers` |

## Shared Data Sources

| Data Source | File | Purpose | Current Usage | Verification Notes |
|---|---|---|---|---|
| `dealerRecords` | `src/data/dealers.ts` | Normalized ARS dealer list generated from the supplied dealer locator CSV | `/dealer-locator` | Dealer active status, phone numbers, and city/state spelling should be verified by ARS before final launch |
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
