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
| `SiteHeader` | `src/components/site-header.tsx` | Global header, navigation, mega menu, and primary enquiry actions | Shared across public pages; Codex-owned | Homepage and pages |
| `SiteFooter` | `src/components/site-footer.tsx` | Global footer with ARS trust, links, and contact pathways | Shared across public pages; Codex-owned | Homepage and pages |
| `SectionKicker` | `src/components/section-kicker.tsx` | Standard section label with horizontal rule | `brand`, `light`, `green`; optional center/end-line mode | Homepage and page sections |
| `MotionSection` | `src/components/motion-section.tsx` | Scroll reveal wrapper for editorial sections | Use only when motion supports comprehension | Homepage sections |
| `HomeHero` | `src/components/home-hero.tsx` | Homepage hero with video, animated word, CTAs, and proof copy | Codex-owned; do not reuse blindly for inner pages | Homepage |
| `AudienceJourneySection` | `src/components/audience-journey-section.tsx` | Figma-aligned audience cards for homepage journey routing | Default active card is Dealers; hover expands desktop cards | Homepage Section 2 |
| `AnimatedHeroWord` | `src/components/animated-hero-word.tsx` | Legacy rotating hero word helper | Uses brand red token | Available where needed |
| `ContactCta` | `src/components/contact-cta.tsx` | Reusable lead-generation CTA band rendered immediately before the global footer | Supports custom eyebrow, headline, body, primary CTA, and secondary CTA | Page shells and homepage ending |
| `LeadForm` | `src/components/lead-form.tsx` | Reusable enquiry form UI | Final submission destination pending client input | Contact and quote flows |
| `PageShell` | `src/components/page-sections.tsx` | Shared page wrapper with header, hero, content, and CTA | For structured interior pages | Multiple pages |
| `PageHero` | `src/components/page-sections.tsx` | Video-led interior page hero | Uses shared brand hierarchy | Multiple pages |
| `SectionIntro` | `src/components/page-sections.tsx` | Standard kicker, H2, body intro block | Uses `SectionKicker` internally | Multiple pages |
| `CardGrid` | `src/components/page-sections.tsx` | Reusable card grid for proof, product, service, and content cards | 2, 3, or 4 column modes | Multiple pages |
| `ContentBand` | `src/components/page-sections.tsx` | Image/text editorial content band | Use for page proof sections | Multiple pages |
| `ProofMetrics` | `src/components/page-sections.tsx` | Reusable metrics/proof row | Use for trust and capability proof | Multiple pages |

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
