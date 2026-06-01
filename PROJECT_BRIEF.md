# ARS Green Steel Website Project Brief

## Project Name

ARS Green Steel Website Redesign

## Business Goals

The goal is to redesign the existing ARS Green Steel website into a premium industrial digital experience that improves trust, clarity, and enquiry generation.

Primary business goals:

- Position ARS Green Steel as a trusted, modern, premium industrial steel brand.
- Communicate manufacturing strength, engineering excellence, infrastructure capability, and industry leadership.
- Generate qualified enquiries from home owners, engineers, contractors, dealers, distributors, and procurement teams.
- Make high-intent user actions easier:
  - Check steel price
  - Calculate TMT requirement
  - Find a dealer
  - Request a quote
  - Contact sales
  - Download technical/product material
- Improve perceived credibility through certifications, technical proof, manufacturing capability, green credentials, and product clarity.
- Build a scalable website structure that can support future pages, SEO content, and conversion tools.

## Brand Positioning

ARS Green Steel should be positioned as a premium, modern, industrial steel brand.

The brand should communicate:

- Trust
- Reliability
- Engineering excellence
- Industrial strength
- Manufacturing precision
- Infrastructure capability
- Sustainability and green steel leadership

The website should feel:

- Premium
- Editorial
- Industrial
- Professional
- Confident
- Trustworthy
- Conversion-focused

The website must not feel like:

- A SaaS product
- A startup landing page
- A dashboard application
- A generic template website
- A decorative animation showcase

## Brand Colors

Primary Brand Color:

- `#004B9B`
- Used for primary CTAs, links, navigation highlights, trust-oriented sections, and key interaction states.

Accent Color:

- `#F76369`
- Used sparingly for editorial emphasis, important highlights, secondary CTAs, metrics, and selected interactive moments.

Supporting colors:

- Dark Navy: `#0F172A`
- Steel Grey: `#64748B`
- Light Surface: `#F8FAFC`
- White: `#FFFFFF`

Brand hierarchy:

1. White
2. Light Surface
3. Brand Blue
4. Dark Navy
5. Steel Grey
6. Accent Red

Accent red should never overpower the primary blue identity.

## Audience

Primary audiences:

- Home owners building residential homes
- Engineers and architects specifying materials
- Contractors and site teams planning procurement
- Dealers and distributors
- Procurement teams and institutional buyers

Secondary audiences:

- Builders and developers
- Civil consultants
- Government/infrastructure stakeholders
- Sustainability-conscious project teams
- Existing ARS customers

Audience needs:

- Home owners need trust, simplicity, safety assurance, price clarity, and dealer access.
- Engineers need technical proof, grade data, certifications, testing standards, and application guidance.
- Contractors need price, availability, bar sizes, calculator support, and fast contact routes.
- Dealers need product demand, brand confidence, enquiry flow, and distribution credibility.
- Procurement teams need credibility, capacity, certifications, technical data, and reliable sales contact paths.

## Competitors And Reference Landscape

The project should study industrial and construction-sector patterns, not copy designs directly.

Relevant competitor/reference categories:

- Steel manufacturers
- TMT bar companies
- Infrastructure companies
- Construction material brands
- Industrial manufacturing brands
- Premium product storytelling websites

Design references already considered:

- IWD Agency: proof-led structure and editorial confidence
- Oura: premium spacing, product-led composition, calm layout rhythm
- Phasic: technical-industrial storytelling and modern engineering feel
- Industrial manufacturing references: strong visual mood, large media, manufacturing confidence

Research focus:

- Trust-building methods
- Certification presentation
- Product specification clarity
- Dealer/distributor journeys
- Lead generation patterns
- Technical content architecture
- Industrial editorial layout systems

## Current Stack

Core:

- Next.js `16.2.6`
- React `19.2.4`
- TypeScript
- App Router

Styling:

- Tailwind CSS v4
- Custom design tokens in `src/app/globals.css`

Animation:

- Framer Motion

Visual libraries:

- Three.js
- React Three Fiber
- Drei

Icons:

- Lucide React

Assets:

- ARS light logo SVG
- ARS Green Steel logo SVG
- Hero video: `public/videos/ars-intro.mp4`

Build tooling:

- npm
- ESLint
- Webpack build mode via `next build --webpack`

Technical constraints:

- The approved homepage hero uses `public/videos/ars-intro.mp4`.
- Do not replace the hero video with 3D without approval.
- Do not introduce decorative 3D.
- Use 3D only when it adds meaningful product or engineering storytelling value.
- Prefer real industrial media over synthetic visuals.

## Required Pages

Current implemented page:

- `/` Homepage

Required priority pages:

- `/steel-price-today`
- `/tmt-calculator`
- `/dealer-locator`
- `/products`
- `/products/ars-550d`
- `/products/ars-crs-550d`
- `/contact`

Important supporting pages:

- `/applications`
- `/applications/residential-construction`
- `/applications/commercial-construction`
- `/applications/coastal-construction`
- `/green-steel`
- `/quality-certifications`
- `/manufacturing`
- `/about`
- `/dealers`
- `/become-a-dealer`
- `/blogs`
- `/blogs/[slug]`

Future conversion/support pages:

- `/request-quote`
- `/download-brochure`
- `/technical-specifications`
- `/certificates`
- `/projects`
- `/clients`

## Homepage Direction

The homepage should establish the brand and route visitors into high-intent journeys.

Recommended homepage structure:

1. Hero with video, strong editorial statement, and primary CTAs
2. Track Record / Proof section
3. Product Range
4. Buying Assistant: price, calculator, dealer locator
5. Audience Paths
6. Quality and Manufacturing
7. Green Steel / Sustainability
8. Applications
9. Clients / Projects / Testimonials
10. Contact / Request Quote
11. Footer

## Success Criteria

Business success:

- More qualified enquiries from website visitors.
- Higher engagement with dealer locator, price checker, calculator, and quote/contact flows.
- Better trust and credibility for first-time visitors.
- Better product understanding for engineers, contractors, and home owners.

Brand success:

- The site feels premium, modern, industrial, and credible.
- The visual language clearly belongs to ARS Green Steel.
- The brand hierarchy uses `#004B9B` as the primary color and `#F76369` only as an accent.
- The site does not feel like a SaaS, startup, dashboard, or generic template.

UX success:

- Visitors can quickly understand what ARS offers.
- Each audience can find the right path without friction.
- Primary journeys are clear:
  - Check price
  - Calculate requirement
  - Find dealer
  - Request quote
  - Contact sales
- Navigation and CTAs support enquiry generation.

Technical success:

- Pages are maintainable and componentized.
- Shared patterns are reusable.
- Site builds successfully.
- Pages are responsive across desktop, tablet, and mobile.
- Performance remains strong, especially with video assets.
- SEO foundations are in place for key pages.

Quality success:

- Consistent typography, spacing, colors, and motion.
- Accessible contrast and readable type.
- No layout collisions on common viewport sizes.
- No overuse of animation or decorative effects.
- Content is technically credible and client-ready.
