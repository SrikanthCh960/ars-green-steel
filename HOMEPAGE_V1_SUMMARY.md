# ARS Green Steel Homepage V1 Summary

## Purpose

This document captures the approved Homepage Version 1 baseline.

Use this as the reference point for future homepage refinements, component extraction, page expansion, and client review discussions.

## Homepage V1 Sections

### 1. Fixed Header

Purpose:

- Keep ARS branding and key conversion actions visible.
- Provide quick access to products, steel price, calculator, dealer locator, contact, and quote.

Content:

- ARS Green Steel light logo
- Navigation links:
  - Products
  - Steel price
  - Calculator
  - Dealer locator
  - Contact
- Primary header CTA:
  - Get quote

Design pattern:

- Dark translucent header over video hero.
- White logo.
- Blue primary CTA.
- Blue hover states for navigation.

### 2. Video Hero

Purpose:

- Establish premium industrial confidence immediately.
- Communicate strength, safety, trust, and green steel through motion and typography.

Content:

- Full-screen background video: `public/videos/ars-intro.mp4`
- Main headline:
  - We Build
  - Animated feature word
  - Structures.
- Supporting copy explaining price clarity, product proof, calculator, and dealer discovery.
- Primary CTA:
  - Check today’s price
- Secondary CTA:
  - Explore products

Design pattern:

- Full viewport hero.
- Dark navy overlay for readability.
- Large uppercase display typography.
- Red animated accent word.
- Blue primary button.

### 3. Track Record / Proof

Purpose:

- Move from brand impression into trust evidence.
- Surface measurable proof before sales messaging.

Content:

- Section label: Track record
- Headline:
  - Proof, not promises.
- Supporting copy about price, requirement, dealer, and sales contact.
- Metrics:
  - 32 yrs
  - 2.5L MT
  - 550D
  - SGS+
- Certification strip:
  - SGS certified
  - ISO quality systems
  - EPD / GRIHA / LEED ready
  - Dealer network

Design pattern:

- Light surface background.
- Large editorial H2.
- Thin dividers for metrics.
- Red used only for editorial emphasis and metric suffixes.
- Blue used for markers and interaction states.

### 4. Buying Assistant

Purpose:

- Convert homepage interest into practical next steps.
- Route users into price, calculation, dealer, or quote flows.

Content:

- Section label: Buying assistant
- Headline:
  - The fastest route from enquiry to steel.
- Supporting copy explaining the four decision paths.
- Cards:
  - Check price
  - Calculate steel
  - Find dealer
  - Request quote

Design pattern:

- White section.
- Four-card grid on desktop.
- Light surface cards with thin borders.
- Lucide icons in blue.
- Blue text links and hover states.
- Card lift on hover.

### 5. Product Range

Purpose:

- Introduce the core ARS product family.
- Help users understand grade and use case direction.

Content:

- Section label: Product range
- Headline:
  - Steel made for real structures.
- Products:
  - ARS 550D
  - ARS CRS 550D
- Supporting tags:
  - Superior bendability
  - Consistent rib pattern
  - Tested strength
  - CRS protection
  - Longer life
  - Ideal for exposed zones
- Product CTA:
  - View details

Design pattern:

- Warm white section background.
- Editorial row layout.
- Video media panel.
- Light technical card.
- Large product stat typography.
- Blue links and icon accents.
- Red used only for the italic word and product index.

### 6. Audience Paths

Purpose:

- Route different visitor types to relevant proof, tools, and actions.
- Reduce the need for every visitor to decode the same content.

Audiences:

- Home owners
- Engineers
- Dealers
- Contractors

Content:

- Section label: Audience paths
- Headline:
  - One website, four clear journeys.
- Interactive tabs.
- Audience-specific:
  - Headline
  - Proof cards
  - Recommended next steps
  - Quote-style need statement

Design pattern:

- Light surface section.
- Blue active tab indicator.
- Video-led audience panel.
- White proof cards.
- White quote panel.
- Blue links and icon accents.
- Framer Motion tab transition.

### 7. Quality And Manufacturing

Purpose:

- Add manufacturing credibility before the contact section.
- Support engineers, procurement users, and contractors with trust-oriented proof.

Content:

- Section label: Quality and manufacturing
- Headline:
  - Proof built into every decision.
- Supporting copy about quality, certification, and manufacturing confidence.
- Proof cards:
  - SGS certification and quality checks visible before the pitch.
  - Grade clarity for engineers, contractors, and procurement teams.
  - Dealer-ready proof that supports local purchase confidence.
- CTA:
  - Request technical support

Design pattern:

- White section.
- Light surface editorial text panel.
- Video media panel.
- White proof cards.
- Blue primary CTA.
- Green certification/check icon accent.

### 8. Contact CTA And Footer

Purpose:

- End the homepage with clear lead-generation actions and useful site structure.

Content:

- Section label: Contact ARS
- Headline:
  - Ready to move from planning to supply?
- Supporting copy:
  - Start with a quote, call sales, or find the right dealer path for your site.
- CTAs:
  - Request quote
  - Call sales
- Footer columns:
  - Products
  - Tools
  - Trust
  - Company
- Footer brand statement.

Design pattern:

- White section.
- No dark footer treatment.
- Blue primary CTA.
- Secondary outline CTA.
- Structured footer links.
- Thin dividers.

## Components Used

### Page-Level Components

- `Header`
  - Defined inside `src/app/page.tsx`
  - Handles logo, navigation, and header CTA.

- `MotionSection`
  - Located at `src/components/motion-section.tsx`
  - Used for scroll reveal on main homepage sections.

- `AnimatedHeroWord`
  - Located at `src/components/animated-hero-word.tsx`
  - Rotates the hero feature word.

- `AudiencePaths`
  - Located at `src/components/audience-paths.tsx`
  - Handles audience tab interaction and animated content switching.

### Data Structures Used

- `credibilityMetrics`
  - Defines proof metrics in the Track Record section.

- `products`
  - Defines homepage product rows.

- `buyingActions`
  - Defines Buying Assistant action cards.

- `qualityProof`
  - Defines Quality and Manufacturing proof cards.

- `footerColumns`
  - Defines footer navigation columns.

### Asset Components

- `next/image`
  - Used for ARS logos.

- Native `video`
  - Used for hero and supporting industrial media panels.

- `lucide-react`
  - Used for CTA and utility icons.

## CTA Patterns

### Primary CTA

Use:

- Main user actions.
- Quote, price, calculator, dealer, and technical support routes.

Style:

- Background: `#004B9B`
- Text: white
- Radius: 6px
- Height: 48px where button-sized
- Hover: darker blue
- Focus: blue focus outline

Examples:

- Check today’s price
- Get quote
- Request quote
- Request technical support

### Secondary CTA

Use:

- Supporting actions.
- Product exploration.
- Call sales.

Style:

- Transparent or white background.
- Border treatment.
- Dark navy text or white text depending on background.
- Hover uses blue or white contrast.

Examples:

- Explore products
- Call sales

### Text Link CTA

Use:

- Card-level and section-level actions.

Style:

- Blue text.
- Arrow icon.
- Bold small text.

Examples:

- Start flow
- View details
- View this journey

## Typography Patterns

### Display Typography

Used in:

- Hero headline
- Track Record headline
- Buying Assistant headline
- Product Range headline
- Quality and Manufacturing headline
- Contact CTA headline

Pattern:

- Uppercase
- Heavy weight
- Tight line height
- Responsive `clamp()` sizing
- Used for major editorial moments only

### Serif Italic Accent

Used in:

- Animated hero word
- "not" in Proof, not promises
- "real" in Product Range
- Metric suffixes

Pattern:

- Serif italic
- Accent red `#F76369`
- Used sparingly for editorial emphasis

### Labels / Kickers

Used in:

- Section labels
- Metric labels
- Footer column labels

Pattern:

- Uppercase
- Bold
- Wide letter spacing
- Blue or steel grey depending on section importance

### Body Copy

Used in:

- Hero supporting copy
- Section descriptions
- Card descriptions
- Footer brand statement

Pattern:

- Steel grey
- 16-18px range
- Comfortable line height
- Direct, practical language

## Color Hierarchy

### Primary Color

Brand Blue: `#004B9B`

Used for:

- Primary CTAs
- Header CTA
- Section markers
- Buying Assistant icons and links
- Product links
- Audience tab active state
- Footer links hover state
- Focus states

### Accent Color

Accent Red: `#F76369`

Used for:

- Animated hero word
- Select italic editorial words
- Metric suffixes
- Product index numbers

Rule:

- Red is not used as the primary CTA color in Homepage V1.

### Dark Foundation

Dark Navy / Ink:

- `#0F172A` from the design system
- `#0B0D0E` / `#151719` implementation ink tones

Used for:

- Hero overlay
- Header background
- Strong text
- Video panel base colors

### Light Foundation

White and light surface:

- `#FFFFFF`
- `#F8FAFC`
- Similar implementation surfaces: `#f8f9fb`, `#fffdfa`

Used for:

- Main post-hero sections
- Cards
- Footer
- Form-adjacent/CTA surfaces

### Supporting Colors

Steel grey:

- Used for body copy, metadata, labels, and dividers.

Green:

- Used for certification/check indicators.

## Motion Patterns

### Hero Word Rotation

Component:

- `AnimatedHeroWord`

Behavior:

- Rotates between:
  - STRENGTH
  - SAFETY
  - TRUST
  - GREEN STEEL
- Interval: 1800ms
- Transition:
  - Vertical movement
  - Opacity change
  - Subtle rotateX

Purpose:

- Adds energy to the hero without replacing the approved video.

### Section Reveal

Component:

- `MotionSection`

Behavior:

- Initial opacity 0
- Vertical offset 28px
- Reveals once while entering viewport
- Duration 0.7s

Purpose:

- Adds premium motion rhythm between sections.

### Audience Tab Transition

Component:

- `AudiencePaths`

Behavior:

- `AnimatePresence` with active tab content.
- Fade and vertical slide transition.
- Active tab underline animation.

Purpose:

- Makes audience switching clear and smooth.

### Hover Motion

Used in:

- Buying Assistant cards
- Buttons
- Links

Behavior:

- Card lift
- Border color change
- Icon background change
- Button color transition

Purpose:

- Communicates interactivity without excessive animation.

## Responsive Baseline

### Desktop

Pattern:

- Full-screen video hero.
- Editorial multi-column hero layout.
- Four-column proof and Buying Assistant grids.
- Product rows use multi-column layout.
- Audience Paths use three-column content layout.
- Footer uses brand column plus navigation columns.

### Tablet

Pattern:

- Dense grids collapse to two columns where useful.
- Content remains spacious.
- Large type scales down through `clamp()`.
- Product media and card blocks stack more comfortably.

### Mobile

Pattern:

- Single-column section flow.
- Header keeps logo and quote CTA visible.
- Navigation links are hidden on smaller screens.
- CTAs stack vertically when needed.
- Large typography uses lower `clamp()` minimums to reduce overflow risk.
- Product stat divider appears only on large screens.

## Homepage V1 Principles

Homepage V1 should be treated as the baseline for:

- Blue-primary ARS brand hierarchy.
- Video-led industrial hero.
- Proof-before-pitch storytelling.
- Conversion routing through Buying Assistant.
- Product clarity before technical page expansion.
- Audience-specific journeys.
- Light post-hero editorial sections.
- Footer that supports contact and discovery instead of dark-mode decoration.

Future work should preserve these principles unless a deliberate design review approves a change.
