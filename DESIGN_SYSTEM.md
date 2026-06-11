# ARS Green Steel Design System

## Purpose

This design system is extracted from the approved Homepage V1 implementation.

It documents the reusable visual patterns that should guide future pages, component extraction, and UI decisions across the ARS Green Steel website.

Primary principle:

- ARS must feel premium, industrial, editorial, trustworthy, and conversion-focused.
- The site must not feel like a SaaS dashboard, startup landing page, or generic template.

## Homepage Pattern Audit

Homepage V1 establishes these reusable patterns:

- Video-led industrial hero
- Blue-primary CTA system
- Editorial display typography
- Proof-before-pitch content flow
- Light post-hero section rhythm
- Thin-divider statistic grids
- Conversion cards for buying actions
- Product rows with media, proof, and stats
- Audience-specific tabbed journeys
- Light CTA/footer system

These patterns should become the foundation for product pages, tool pages, application pages, trust pages, and contact pages.

---

## 1. Color Hierarchy

### Primary Brand Blue

Token:

- `#004B9B`

Current implementation:

- `--brand-blue: #004b9b`
- `--foundation-blue: #004b9b`

Use for:

- Primary CTAs
- Header CTA
- Navigation hover states
- Section markers
- Active tab indicators
- Buying Assistant icons
- Product links
- Footer link hover states
- Focus rings
- Trust-oriented labels

Rule:

- Blue is the primary action and trust color.
- If a user should click one main action, it should usually be blue.

### Accent Red

Token:

- `#F76369`

Current implementation:

- `--brand-red: #f76369`

Use for:

- Animated hero word
- Serif italic emphasis words
- Metric suffixes
- Product index numbers
- Small editorial highlights only

Rule:

- Red must not be used as the default CTA color.
- Red supports the editorial voice; blue drives action.

### Dark Foundation

Tokens:

- `#0F172A` design-system dark navy
- `#0B0D0E` implementation ink base
- `#151719` implementation ink text

Use for:

- Hero video overlay
- Fixed header background
- Strong headline text
- Media panel base color

Rule:

- Dark treatment is strongest in the hero.
- Post-hero sections should usually be light.

### Light Foundation

Tokens:

- `#FFFFFF`
- `#F8FAFC`
- Implementation surfaces: `#f8f9fb`, `#fffdfa`

Use for:

- Section backgrounds
- Cards
- Proof blocks
- CTA/footer
- Tool surfaces

Rule:

- Light surfaces dominate the post-hero experience.

### Supporting Colors

Steel grey:

- Used for body copy, metadata, captions, labels, and supporting text.

Green:

- Used only for certification/check proof moments.

---

## 2. Typography Patterns

### Font Stack

Current implementation:

- Body and UI: `Inter`
- Display and headings: `IBM Plex Sans`
- Technical labels and specification-style text: `IBM Plex Sans Condensed`
- Fallback: `Arial`, `Helvetica`, `system-ui`, `sans-serif`
- The project currently uses a CSS font stack with production-safe fallbacks; self-hosted font files should be added when the approved font files are available.

Rules:

- Use Inter for readable body copy, navigation, forms, buttons, tables, and utility UI.
- Use IBM Plex Sans for hero, page titles, section headings, product names, and strong editorial moments.
- Use IBM Plex Sans Condensed sparingly for technical labels, spec metadata, grade labels, and compact proof markers.
- Do not mix decorative fonts into industrial sections unless there is a clear brand reason.

### Display Heading

Current usage:

- Hero headline
- Major page hero statements
- Product and trust hero sections
- Contact CTA headline

Pattern:

- `font-display`
- IBM Plex Sans
- Heavy weight only for the main hero
- Title case or sentence case after the hero
- Controlled line height around `1.0-1.08`
- Responsive `clamp()` sizing
- Dark navy on light sections
- White on hero

Use for:

- Major campaign statements
- Section-defining industrial headlines
- High-impact proof or conversion moments

Rules:

- Use the largest display scale for the homepage hero only.
- Keep post-hero section headings more restrained for scanability.
- Do not use oversized typography inside small cards.
- Keep copy short and direct.

### Italic Accent

Current usage:

- Hero animated word
- Select editorial emphasis words

Pattern:

- IBM Plex Sans
- Italic
- Accent red
- Used inline with large display text

Rules:

- Use one accent word per major heading when needed.
- Avoid making every section headline use red emphasis.

### Section Label / Kicker

Current usage:

- Track record
- Buying assistant
- Product range
- Audience paths
- Quality and manufacturing
- Contact ARS

Pattern:

- Uppercase
- Bold
- Wide letter spacing
- Small text
- Blue for key sections
- Steel grey for secondary metadata
- Often paired with a 48px horizontal blue rule

Reusable component candidate:

- `SectionKicker`

### Body Copy

Current usage:

- Hero supporting copy
- Section descriptions
- Card descriptions
- Footer statement

Pattern:

- 16-18px
- Comfortable line height around `1.7-2`
- Steel grey
- Practical, proof-led language

Rules:

- Explain what the visitor can do next.
- Avoid decorative marketing copy.

### Card Title

Current usage:

- Buying Assistant cards
- Product names
- Audience proof cards
- Quality proof cards

Pattern:

- Bold or black display/sans
- Clear action or object label
- Short and scannable

Rules:

- Card titles should help users decide quickly.

---

## 3. Section Spacing

### Global Container

Current implementation:

- `.ars-container`
- Width: `min(100% - 40px, 1440px)`
- Centered with auto margins

Reusable component candidate:

- `Container`

### Hero Spacing

Pattern:

- Full viewport height
- Header offset handled with top padding
- Content aligned toward bottom
- Two-column editorial layout on desktop
- Single-column flow on smaller screens

### Standard Section Spacing

Current implementation:

- Most major sections use `py-24`
- Equivalent to 96px vertical padding

Use for:

- Proof section
- Buying Assistant
- Product Range
- Audience Paths
- Quality and Manufacturing

### CTA / Footer Spacing

Current implementation:

- Final CTA/footer uses `py-16`
- Internal footer top padding and border separation

Use for:

- End-of-page conversion and utility navigation

Rules:

- Keep major homepage sections spacious.
- Use thin borders and whitespace instead of heavy shadows.
- Avoid nested card-on-card layouts.

---

## 4. Button Patterns

### Primary Button

Current examples:

- Header: Get quote
- Hero: Check today’s price
- Quality: Request technical support
- Contact: Request quote

Pattern:

- Background: brand blue
- Text: white
- Border radius: 6px
- Height: 44-48px
- Horizontal padding: 16-20px
- Font: bold/semi-bold
- Icon: right-aligned or leading, from Lucide
- Hover: darker blue
- Focus: blue outline through `.focus-ring`

Reusable component candidate:

- `PrimaryButton`

### Secondary Button

Current examples:

- Hero: Explore products
- Contact: Call sales

Pattern:

- Transparent or white background
- Border: white/35 on dark, ink/15 on light
- Text: white on dark, ink on light
- Hover: strong contrast or blue border/text
- Radius: 6px

Reusable component candidate:

- `SecondaryButton`

### Text Link CTA

Current examples:

- Start flow
- View details
- View this journey
- Footer links

Pattern:

- Blue text
- Bold small label
- Optional `ArrowRight` icon
- Used inside cards and section actions

Reusable component candidate:

- `TextCTA`

### CTA Rules

- Primary action uses blue.
- Red is not used for buttons.
- One main CTA should visually dominate each section.
- CTA labels should be action-specific, not generic.

---

## 5. Card Patterns

### Buying Assistant Card

Current section:

- Buying Assistant

Pattern:

- Full-card link
- Light surface background
- Thin border
- 8px radius
- Padding: 28px
- Minimum height: 250px
- Icon tile at top
- Title, description, and text CTA
- Hover lift, border change, shadow, icon inversion

Use for:

- Tool entry points
- Service actions
- Conversion choices

Reusable component candidate:

- `ActionCard`

### Certification / Proof Chip

Current section:

- Track Record certification strip

Pattern:

- White card
- Thin border
- 8px radius
- Icon plus short label
- Compact horizontal layout

Use for:

- Certifications
- Trust badges
- Compliance markers

Reusable component candidate:

- `ProofBadge`

### Technical/Product Info Card

Current section:

- Product Range

Pattern:

- Light surface background
- Thin border
- 8px radius
- Icon
- Body copy
- Tag chips

Use for:

- Product benefits
- Technical details
- Application details

Reusable component candidate:

- `InfoCard`

### Audience Proof Card

Current section:

- Audience Paths

Pattern:

- White card
- Thin border
- Soft shadow
- Label row with proof icon
- Large value
- Short explanation

Use for:

- Audience-specific proof
- Technical proof snippets
- Journey highlights

Reusable component candidate:

- `ProofCard`

### Quality Proof Card

Current section:

- Quality and Manufacturing

Pattern:

- White card
- Thin border
- Blue index
- Green certification icon
- Strong proof sentence

Use for:

- Quality claims
- Manufacturing process points
- Certification statements

Reusable component candidate:

- `QualityProofCard`

### Card Rules

- Radius should stay between 6-8px.
- Use thin borders.
- Use minimal shadows.
- Cards should feel precise and industrial, not soft/SaaS-like.
- Avoid cards inside cards unless the inner card has a clear functional role.

---

## 6. Proof Sections

### Track Record Proof Section

Pattern:

- Light surface background
- Section label with blue rule
- Large editorial proof headline
- Supporting copy and CTA row
- Metric grid below
- Certification strip below metrics

Use for:

- Brand credibility
- Certification summaries
- High-level trust storytelling

Reusable component candidates:

- `ProofSection`
- `MetricGrid`
- `MetricItem`
- `CertificationStrip`

### Quality And Manufacturing Proof Section

Pattern:

- Two-column editorial layout
- Left: light surface text panel with CTA
- Right: media panel plus stacked proof cards
- Blue primary CTA
- Green proof icon accents

Use for:

- Manufacturing page intro
- Quality certifications page
- Green steel proof sections

Reusable component candidates:

- `EditorialProofPanel`
- `MediaProofGrid`
- `QualityProofCard`

### Proof Section Rules

- Lead with evidence, not sales language.
- Keep proof claims short and verifiable.
- Use blue for structure and action.
- Use green only for certification confirmation.

---

## 7. Statistic Sections

### Metric Grid

Current section:

- Track Record

Pattern:

- Border top and bottom
- Four-column desktop grid
- Each metric has:
  - Kicker
  - Large value
  - Optional serif italic suffix
  - Short explanation
- Vertical dividers between desktop columns
- Stack on smaller screens

Use for:

- Company proof
- Product performance
- Manufacturing capacity
- Dealer network scale

Reusable component candidates:

- `MetricGrid`
- `MetricItem`

### Product Stat

Current section:

- Product Range

Pattern:

- Large stat text
- Short explanatory label
- Optional left divider on desktop
- Text link CTA below

Use for:

- Product grade
- Product category
- Technical differentiator

Reusable component candidate:

- `ProductStat`

### Statistic Rules

- Use very large numbers only when they represent real proof.
- Always include a short explanation.
- Avoid decorative metrics without business meaning.

---

## 8. CTA Sections

### Buying Assistant CTA Section

Pattern:

- Section intro
- Four action cards
- Blue icons and text CTAs
- Light cards over white section

Use for:

- Homepage routing
- Tools landing page
- Services entry points

Reusable component candidates:

- `ActionCardGrid`
- `ActionCard`

### Final Contact CTA

Pattern:

- White background
- Top CTA row with heading, body, and two buttons
- Border-bottom divider
- Footer below

Use for:

- End of homepage
- Product pages
- Service/tool pages
- Trust pages

Reusable component candidates:

- `ContactCTA`
- `Footer`

### CTA Section Rules

- Use blue for primary CTA.
- Secondary CTA should be quiet and supportive.
- Keep the final CTA light, structured, and practical.

---

## 9. Footer Patterns

### Footer Layout

Current pattern:

- White background
- Top border from page content
- CTA block above footer links
- Brand column plus navigation columns
- Thin horizontal dividers

Footer columns:

- Products
- Tools
- Trust
- Company

Reusable component candidate:

- `SiteFooter`

### Footer Link Pattern

Pattern:

- Small semibold steel-grey text
- Hover: brand blue
- Grouped under uppercase column labels

### Footer Rules

- Footer should be useful, not decorative.
- Do not use an unrelated dark footer treatment.
- Include practical conversion and discovery links.
- Use verified contact details when available.

---

## 10. Media Patterns

### Hero Video

Pattern:

- Full viewport video
- Absolute cover
- Dark overlay
- Placeholder fallback gradient
- Text layered above

Reusable component candidate:

- `HeroVideoBackground`

### Media Panel

Pattern:

- Rounded 8px
- Dark base
- Video cover
- Reduced opacity for industrial mood

Use for:

- Product rows
- Audience journey panels
- Quality/manufacturing proof

Reusable component candidate:

- `MediaPanel`

### Media Rules

- Use real industrial footage or approved brand media.
- Do not replace the approved hero video with 3D without approval.
- Do not use decorative media that does not support trust or product understanding.

---

## 11. Motion Patterns

### Section Reveal

Current component:

- `MotionSection`

Pattern:

- Fade in
- Move up from 28px
- Trigger once in viewport
- Duration: 0.7s
- Easing: `[0.22, 1, 0.36, 1]`

Reusable component:

- `MotionSection`

### Hero Word Animation

Current component:

- `AnimatedHeroWord`

Pattern:

- Rotating word set
- Vertical slide
- Opacity transition
- Subtle rotateX
- 1800ms interval

Reusable component:

- `AnimatedHeroWord`

### Tab Content Animation

Current section:

- Audience Paths

Pattern:

- `AnimatePresence`
- Fade and vertical slide
- Active underline animation

Reusable component candidate:

- `Tabs`
- `AudienceTabs`

### Motion Rules

- Motion should clarify state, hierarchy, or progression.
- Avoid ornamental animation.
- Keep transitions fast and precise.
- Respect reduced-motion preferences in future refinement.

---

## 12. Reusable Component Map

### Already Reusable

These components already exist and should remain reusable:

| Component | Current File | Purpose |
|---|---|---|
| `MotionSection` | `src/components/motion-section.tsx` | Scroll reveal wrapper for homepage sections |
| `AnimatedHeroWord` | `src/components/animated-hero-word.tsx` | Rotating hero emphasis word |
| `AudiencePaths` | `src/components/audience-paths.tsx` | Audience-specific tabbed journey section |

### Should Become Reusable

These patterns are currently embedded in `src/app/page.tsx` and should be extracted as reusable components:

| Proposed Component | Source Pattern | Recommended Use |
|---|---|---|
| `Container` | `.ars-container` wrapper | All pages and sections |
| `SiteHeader` | `Header` inside `page.tsx` | Global navigation |
| `HeroSection` | Video hero | Homepage and campaign pages |
| `HeroVideoBackground` | Hero video and overlays | Video-led hero sections |
| `SectionKicker` | Label plus horizontal rule | Major section labels |
| `EditorialHeading` | Large uppercase section headings | Hero, proof, product, CTA sections |
| `PrimaryButton` | Blue CTA buttons | Main conversion actions |
| `SecondaryButton` | Outline/secondary buttons | Supporting actions |
| `TextCTA` | Blue text link with arrow | Card and section links |
| `ProofSection` | Track Record section | Trust and overview pages |
| `MetricGrid` | Four-column proof metrics | Statistics and proof blocks |
| `MetricItem` | Individual proof metric | Statistic grids |
| `CertificationStrip` | SGS/ISO/EPD/dealer strip | Trust badges |
| `ActionCardGrid` | Buying Assistant grid | Tool/service entry points |
| `ActionCard` | Buying Assistant card | Reusable conversion card |
| `ProductRow` | Product Range row | Product listing pages |
| `ProductStat` | Product grade/stat area | Product cards and detail pages |
| `InfoCard` | Product technical info card | Product and application pages |
| `MediaPanel` | Rounded video panel | Product/trust/media sections |
| `QualityProofSection` | Quality and Manufacturing section | Trust, quality, manufacturing pages |
| `QualityProofCard` | Indexed proof cards | Certification/process cards |
| `ContactCTA` | Final CTA block | End of major pages |
| `SiteFooter` | Footer columns and brand statement | Global footer |

### Future Reusable Components

These are not fully implemented yet but should be planned:

| Proposed Component | Purpose |
|---|---|
| `MegaMenu` | Product/tool/application/resource navigation |
| `MobileNavigation` | Small-screen site navigation |
| `LeadForm` | Request quote and contact forms |
| `DealerLocatorCard` | Dealer search result card |
| `CalculatorInputGroup` | TMT calculator fields |
| `PriceDisplayPanel` | Steel price display block |
| `DownloadCard` | Brochure/certification downloads |
| `FAQAccordion` | SEO and support pages |

---

## 13. Implementation Priorities

### First Extraction Pass

Extract these first because they repeat across most future pages:

1. `Container`
2. `SiteHeader`
3. `SiteFooter`
4. `PrimaryButton`
5. `SecondaryButton`
6. `TextCTA`
7. `SectionKicker`
8. `EditorialHeading`

### Second Extraction Pass

Extract these after page structure expands:

1. `ActionCard`
2. `ActionCardGrid`
3. `MetricGrid`
4. `MetricItem`
5. `CertificationStrip`
6. `MediaPanel`
7. `ContactCTA`

### Third Extraction Pass

Extract these when product, tool, and trust pages begin:

1. `ProductRow`
2. `ProductStat`
3. `InfoCard`
4. `QualityProofCard`
5. `LeadForm`
6. `MegaMenu`

## Baseline Rule

Homepage V1 is the baseline.

Future work should preserve:

- Blue-primary hierarchy
- Light post-hero sections
- Editorial industrial typography
- Thin borders and restrained cards
- Proof-before-pitch storytelling
- Conversion paths for price, calculator, dealer, and quote
- Motion that supports clarity rather than decoration
