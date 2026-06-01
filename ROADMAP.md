# ARS Green Steel Website Roadmap

## Roadmap Priority Order

All work should be prioritized in this order:

1. Business impact
2. UX improvements
3. Design consistency
4. Technical improvements

The website must generate trust and enquiries first. Visual polish and technical structure should support that goal, not distract from it.

## Current State

The project is a Next.js 16 homepage prototype for ARS Green Steel.

Implemented:

- Homepage route `/`
- Video-led hero using `public/videos/ars-intro.mp4`
- ARS light logo integration
- Editorial hero headline with animated feature word
- Light proof / track-record section
- Light product range section
- Interactive audience paths section
- Basic final CTA/footer block

Current strategic issue:

- The homepage has a strong beginning, but the full conversion journey is not complete.
- Price, calculator, dealer locator, enquiry, and contact flows are currently represented as CTAs only, not as real experiences.
- The brand hierarchy must be corrected so `#004B9B` is primary and `#F76369` remains a controlled accent.

## Phase 1: Fix Brand Hierarchy And Trust Foundation

Priority: Business impact + design consistency

Goal:

Make the current homepage feel unmistakably like ARS Green Steel: blue-led, industrial, premium, and trust-oriented.

Tasks:

- Add and enforce primary brand blue `#004B9B`.
- Use blue for primary CTAs, navigation highlights, links, focus states, and key interaction states.
- Keep accent red `#F76369` only for editorial emphasis, small markers, metric suffixes, and selected highlights.
- Replace older red token usage where red behaves like the primary brand color.
- Remove or retire legacy red values `#d71920` and `#b9151b` unless explicitly required.
- Make all post-hero sections primarily light mode.
- Redesign the final CTA/footer so it no longer feels like a separate dark-mode section.

Success criteria:

- The site visually reads as Blue + White + Industrial.
- Red is visibly secondary.
- CTAs feel consistent and business-focused.

## Phase 2: Complete Homepage Conversion Journey

Priority: Business impact

Goal:

Turn the homepage from a visual prototype into a lead-generation journey.

Required homepage sections:

1. Hero
2. Track Record / Proof
3. Product Range
4. Buying Assistant
5. Audience Paths
6. Quality and Manufacturing
7. Green Steel / Sustainability
8. Applications
9. Clients / Projects / Testimonials
10. Contact / Request Quote
11. Footer

Highest-impact additions:

- Buying Assistant section with entry points for:
  - Check steel price
  - Calculate TMT requirement
  - Find dealer
  - Request quote
- Contact / Request Quote section with a lead form.
- Sticky or repeated conversion CTA for high-intent users.

Success criteria:

- A visitor can quickly move from interest to action.
- Each key conversion path is visible without hunting.
- The homepage supports home owners, engineers, contractors, dealers, and procurement teams.

## Phase 3: Build Conversion Tools

Priority: Business impact + UX improvements

Goal:

Create useful tools that make the site operational, not just informational.

Tools to build:

- Steel Price Today module
- TMT Calculator
- Dealer Locator
- Request Quote form
- Contact Sales form
- WhatsApp / Call CTA system

Recommended order:

1. Request Quote form
2. Steel Price Today module
3. TMT Calculator
4. Dealer Locator
5. WhatsApp and phone CTA integration

UX requirements:

- Each tool should be simple, mobile-friendly, and fast.
- Primary actions should use brand blue.
- Error states and form focus states should be accessible.
- Results should lead to dealer/contact/request quote actions.

Success criteria:

- Users can complete high-intent actions.
- Sales enquiries become easier to capture.
- The website provides practical value beyond brand presentation.

## Phase 4: Product And Trust Pages

Priority: Business impact + UX improvements

Goal:

Create pages that support technical confidence and product decision-making.

Required pages:

- `/products`
- `/products/ars-550d`
- `/products/ars-crs-550d`
- `/quality-certifications`
- `/manufacturing`
- `/green-steel`

Content requirements:

- Product grades
- Use cases
- Bar sizes
- Technical specifications
- Certifications
- Testing proof
- Manufacturing capability
- Sustainability credentials
- Downloadable brochures/certificates

Success criteria:

- Engineers can evaluate product credibility.
- Home owners can understand safety and trust.
- Contractors can understand availability and use cases.
- Procurement users can find proof quickly.

## Phase 5: Audience Journey Pages

Priority: UX improvements + business impact

Goal:

Create focused pathways for each major audience.

Recommended pages:

- Home owners
- Engineers / architects
- Contractors
- Dealers / distributors
- Become a dealer

Each page should include:

- Audience-specific problem framing
- Relevant products
- Proof points
- Common use cases
- FAQs
- Clear next actions

Success criteria:

- Each visitor type feels directly addressed.
- CTAs match the visitor’s intent.
- The site reduces confusion and increases enquiry confidence.

## Phase 6: Applications And SEO Content

Priority: Business impact + SEO

Goal:

Create search-friendly pages that capture construction and steel-intent traffic.

Required pages:

- `/applications`
- `/applications/residential-construction`
- `/applications/commercial-construction`
- `/applications/coastal-construction`
- `/steel-price-today`
- `/tmt-calculator`
- `/dealer-locator`
- `/blogs`
- `/blogs/[slug]`

SEO requirements:

- Clear H1/H2 structure
- Page-specific metadata
- Internal linking
- FAQ sections where useful
- Structured data where relevant
- Search-intent-focused copy

Success criteria:

- The site can rank for product, price, calculator, dealer, and application searches.
- Users from search can find conversion paths quickly.

## Phase 7: Design System Formalization

Priority: Design consistency

Goal:

Turn the emerging visual style into reusable patterns.

Components to create or formalize:

- Header
- Footer
- SectionHeader
- EditorialHeading
- BrandAccentText
- MetricGrid
- ProofMetric
- PrimaryCTA
- SecondaryCTA
- GhostCTA
- TextLink
- VideoPanel
- MediaPanel
- Card
- CertificationStrip
- Tabs
- LeadForm

Rules:

- Use blue for primary actions.
- Use red only as an accent.
- Prefer thin dividers and structured layouts over heavy shadows.
- Keep cards sharp, useful, and industrial.
- Avoid SaaS-like card grids unless the content is genuinely tool-like.

Success criteria:

- New pages can be built without visual drift.
- Design patterns feel consistent across homepage, product pages, and tools.

## Phase 8: Technical Refactor

Priority: Technical improvements

Goal:

Improve maintainability without slowing down business-critical progress.

Tasks:

- Extract inline homepage sections into components.
- Move section data into structured constants.
- Remove unused code if no longer needed, including unused 3D components if not approved for use.
- Add reusable layout primitives.
- Review Next.js 16 docs before major framework-level changes.
- Keep build stable with `next build --webpack`.

Suggested component extraction order:

1. Header
2. HeroSection
3. TrackRecordSection
4. ProductRangeSection
5. AudiencePaths refinement
6. FooterCTA
7. Shared CTA components

Success criteria:

- Code becomes easier to extend.
- New pages reuse existing components.
- Build remains stable.

## Phase 9: QA, Performance, And Accessibility

Priority: UX improvements + technical quality

Goal:

Prepare the website for client approval and production deployment.

QA checks:

- Desktop layout
- Tablet layout
- Mobile layout
- Navigation behavior
- CTA visibility
- Form behavior
- Video loading
- Fallback states
- Accessibility
- SEO metadata
- Performance

Accessibility requirements:

- WCAG AA contrast
- Visible focus states
- 44px minimum tap targets
- Logical heading hierarchy
- Descriptive links and buttons
- Video must not contain essential text only
- Text over media must remain readable

Performance requirements:

- Optimize video delivery.
- Avoid unnecessary 3D or heavy assets.
- Use responsive media.
- Keep animation lightweight.

Success criteria:

- Site feels polished across devices.
- No layout collisions.
- No inaccessible interactions.
- Client can review with confidence.

## Immediate Next Steps

1. Correct the current color hierarchy: blue primary, red accent.
2. Redesign the final CTA/footer in light or blue-primary style.
3. Refine Audience Paths to match the editorial industrial system.
4. Add the Buying Assistant section with price, calculator, dealer, and quote entry points.
5. Extract homepage sections into reusable components.
6. Build the Request Quote flow.
7. Build Steel Price Today and TMT Calculator pages.

## Definition Of Done

A task is complete only when:

- It improves business conversion, UX, brand consistency, or maintainability.
- It follows the ARS design rules.
- It does not introduce generic SaaS/startup styling.
- It respects the color hierarchy.
- It works on desktop, tablet, and mobile.
- It passes build and lint checks when code is changed.
- It supports trust, credibility, and enquiry generation.
