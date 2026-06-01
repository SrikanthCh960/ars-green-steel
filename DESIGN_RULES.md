# ARS Green Steel Design Rules

## Purpose

These rules define how the ARS Green Steel website should look, feel, and behave across the homepage, product pages, conversion tools, and future content pages.

The website must feel:

- Premium
- Industrial
- Editorial
- Trustworthy
- Precise
- Conversion-focused

The website must not feel:

- SaaS-like
- Startup-like
- Dashboard-like
- Generic template-based
- Decorative without purpose

## Color System

### Primary Brand Blue

Hex: `#004B9B`

Use for:

- Primary CTAs
- Primary links
- Active navigation states
- Important interaction states
- Trust-oriented labels
- Form focus states
- Key conversion moments

Meaning:

- Trust
- Reliability
- Engineering confidence
- Professionalism

Rules:

- Blue is the primary brand color.
- Use blue for the main action on a page or section.
- If a user should click one main action, that action should usually be blue.

### Accent Red

Hex: `#F76369`

Use for:

- Editorial emphasis
- Italic highlight words
- Small arrows or markers
- Secondary highlights
- Important metric suffixes
- Selected motion/interaction accents

Meaning:

- Energy
- Action
- Innovation
- Heat and steel-making intensity

Rules:

- Use red sparingly.
- Red must not become the dominant identity color.
- Do not use red for every button, icon, line, and highlight.
- Red should support blue, not compete with it.

### Dark Navy

Hex: `#0F172A`

Use for:

- Hero overlays
- Dark text emphasis
- Footer or rare dark sections
- Strong editorial contrast

Rules:

- Use dark navy with intention.
- Do not default to dark sections after the hero.
- Prefer light editorial sections unless a dark treatment adds real impact.

### Steel Grey

Hex: `#64748B`

Use for:

- Body copy
- Supporting copy
- Metadata
- Dividers
- Technical labels
- Secondary UI

Rules:

- Use grey to create hierarchy and reduce visual noise.
- Do not use grey for primary actions.

### Light Surface

Hex: `#F8FAFC`

Use for:

- Section backgrounds
- Card backgrounds
- Tool surfaces
- Light contrast bands

Rules:

- Light surfaces should feel clean, premium, and editorial.
- Avoid heavy shadows and overly rounded SaaS-style cards.

### White

Hex: `#FFFFFF`

Use for:

- Primary page background
- Content surfaces
- Cards
- Forms
- High-readability areas

Rules:

- White and light surface should dominate the site.
- Preserve generous whitespace.

### Recommended Color Ratio

- 60% White
- 20% Light Surface
- 10% Brand Blue
- 5% Dark Navy
- 3% Steel Grey
- 2% Accent Red

## Typography System

### Display

Use for:

- Hero statements
- Major campaign lines
- Large editorial section headlines

Style:

- Uppercase where appropriate
- Very bold
- Tight line height
- Large scale
- Minimal wording

Guidelines:

- Use display typography to create confidence and scale.
- Do not use oversized typography in every section.
- Display type should be reserved for major brand/story moments.

### H1

Use for:

- Page titles
- Product detail page hero titles
- Main landing page statements

Guidelines:

- Clear, confident, and short.
- Should explain the core page promise.
- Avoid generic marketing phrases.

### H2

Use for:

- Major section headings
- Product range titles
- Proof sections
- Conversion sections

Guidelines:

- H2s can use editorial emphasis.
- Use one italic accent word when it strengthens meaning.
- Keep line breaks intentional.

### H3

Use for:

- Card titles
- Product names
- Tool titles
- Audience path titles

Guidelines:

- Clear and scannable.
- Strong enough to support quick decision-making.

### Body

Use for:

- Section descriptions
- Product explanations
- Technical summaries
- Form/helper text

Guidelines:

- Minimum 16px.
- Prefer 18px for major section copy.
- Use comfortable line height.
- Keep sentences direct and proof-led.

### Caption

Use for:

- Metadata
- Labels
- Technical notes
- Certification labels
- Small supporting copy

Guidelines:

- Use uppercase tracking for editorial kickers.
- Keep caption text short.
- Avoid long paragraphs in caption scale.

## Grid System

### Desktop

- Use a max content width around `1440px`.
- Prefer 12-column thinking even when using custom CSS grids.
- Use asymmetrical editorial layouts when useful.
- Use 2-column and 3-column grids for product, proof, and conversion sections.

### Tablet

- Collapse dense 3-column layouts into 2-column or stacked layouts.
- Preserve visual hierarchy.
- Avoid shrinking text until it becomes cramped.

### Mobile

- Use single-column layouts.
- Keep CTAs large and easy to tap.
- Avoid horizontal overflow from large typography.
- Stack media before dense technical cards when the visual is important.

## Spacing System

Use an 8px-based spacing rhythm.

### Section Spacing

- Small section: 64px vertical padding
- Standard section: 96px vertical padding
- Major editorial section: 112-128px vertical padding
- Hero: minimum 100vh

Rules:

- Use generous whitespace.
- Do not crowd sections.
- Let major headings breathe.

### Component Spacing

- Tight internal spacing: 8-12px
- Standard gap: 16-24px
- Card padding: 24-32px
- Editorial content gap: 40-64px

### Divider Spacing

- Use thin dividers for industrial precision.
- Dividers should separate proof, metrics, rows, and technical content.
- Prefer borders over heavy shadows.

## Motion Rules

Motion should feel precise, restrained, and useful.

Allowed:

- Subtle fade/slide section reveals
- Hero word animation
- Tab content transitions
- Button hover states
- Tool result transitions
- Small directional motion for interactive states

Avoid:

- Decorative parallax without purpose
- Bouncy startup-style motion
- Over-animated cards
- Motion that delays content
- Random 3D or decorative objects

Video rules:

- Prefer real industrial media.
- Hero video is approved as `public/videos/ars-intro.mp4`.
- Do not replace the hero video with 3D without approval.
- Use video only when it supports product, plant, manufacturing, or trust storytelling.

3D rules:

- Three.js / React Three Fiber / Drei may be used only for meaningful product or engineering storytelling.
- Do not use decorative 3D scenes.
- Do not add 3D just to look modern.

## Card Styles

Cards should feel industrial and editorial, not SaaS-like.

Recommended:

- Radius: 6-8px
- Thin borders
- Light backgrounds
- Minimal shadows
- Clear hierarchy
- Strong headings
- Practical content

Avoid:

- Large rounded cards
- Nested cards
- Heavy shadows
- Glassmorphism
- Decorative gradients
- Random icon-heavy layouts

Card types:

- Product card
- Proof metric card
- Certification card
- Dealer card
- Application card
- Technical spec card
- Tool/result card

Rules:

- Cards should contain useful decision-making content.
- Avoid cards that exist only as decoration.

## CTA Styles

### Primary CTA

Use:

- Brand Blue `#004B9B`
- White text
- Solid fill

Use for:

- Request quote
- Contact sales
- Find dealer
- Check price
- Calculate requirement

Rules:

- Only one primary CTA should dominate a section.
- Primary CTAs should not use accent red by default.

### Secondary CTA

Use:

- White or transparent background
- Blue text or blue border
- Subtle hover state

Use for:

- Learn more
- View product
- Download brochure
- Explore applications

### Ghost CTA

Use:

- Transparent background
- Thin border
- Dark navy or blue text

Use for:

- Lower-priority actions
- Secondary navigation inside sections

### Text Link

Use:

- Brand Blue for standard links
- Accent Red only for editorial/action emphasis

Rules:

- Text links should include a clear action label.
- Avoid vague labels like "Click here."

## Industrial Design Principles

### Proof Before Claims

Every major claim should be supported by:

- Certification
- Capacity
- Product data
- Testing proof
- Application context
- Dealer/network strength

### Real Materials Over Decoration

Use:

- Steel
- Rebar
- Factory
- Testing
- Construction
- Infrastructure
- Engineers
- Dealers

Avoid:

- Generic business stock imagery
- Startup-style abstract shapes
- Cartoon illustrations
- Purely decorative visuals

### Editorial Confidence

Use:

- Strong headlines
- Short copy
- Large media
- Thin dividers
- Structured sections
- Clear proof points

Avoid:

- Long corporate paragraphs
- Repeated generic claims
- Cluttered product grids

### Conversion With Trust

Primary conversion paths:

- Check steel price
- Calculate TMT requirement
- Find dealer
- Request quote
- Contact sales

Rules:

- CTAs should feel useful, not pushy.
- Conversion tools must be easy to find.
- Technical proof should appear before high-friction asks.

## Accessibility Rules

### Contrast

- Maintain WCAG AA contrast for all text.
- Do not place low-contrast grey text on video or image backgrounds.
- Text over video must have a strong overlay.

### Typography

- Body text should be at least 16px.
- Avoid cramped line height.
- Large display text must not overflow on mobile.

### Interaction

- Buttons and links must have visible focus states.
- Tap targets should be at least 44px tall.
- Interactive tabs must be keyboard-friendly.
- Forms must show clear validation states.

### Media

- Video should not block core content.
- Provide fallback backgrounds for video areas.
- Avoid auto-playing video with sound.

### Semantic Structure

- Use one clear H1 per page.
- Use H2/H3 hierarchy logically.
- Use descriptive links and button labels.
- Important content should not exist only inside images or videos.

## Brand Consistency Rules

- The site should primarily feel Blue + White + Industrial.
- Accent red should appear as a controlled highlight.
- Do not let red become the primary brand color.
- Avoid visual drift toward Oura-style lifestyle warmth unless it serves the ARS audience.
- Avoid SaaS-like dashboard cards.
- Avoid decorative UI that does not help trust, clarity, or enquiry generation.

## Implementation Rules

- Reuse existing patterns before creating new ones.
- Audit current implementation before building new UI.
- Extract reusable components as sections mature.
- Keep page layouts SEO-friendly.
- Review desktop, tablet, and mobile before considering work complete.
