# ARS Green Steel Homepage Baseline

## Purpose

This document captures the current approved homepage journey after the collaborative UX refinement.

Use this as the baseline for future homepage polishing, client review, component extraction, and page expansion.

## Approved Homepage Journey

1. Hero section
2. Audience journey cards
3. Fastest route buying actions
4. ARS 550D and ARS CRS 550D product paths
5. Trusted by builders, partners, and institutions
6. Happy client testimonials slider
7. Blog / knowledge center
8. Contact CTA and footer

## Section Baseline

### 1. Hero Section

Purpose:

- Establish premium industrial confidence immediately.
- Position ARS around strength, safety, trust, and green steel.
- Send high-intent users directly to price or product journeys.

Content:

- Full-screen background video: `public/videos/ars-intro.mp4`
- Headline:
  - We Build
  - Animated feature word
  - Structures.
- Primary CTA: Check today's price
- Secondary CTA: Explore products

Motion:

- The hero word animation is now CSS-driven through `AnimatedHeroWord`.
- It rotates through `STRENGTH`, `SAFETY`, `TRUST`, and `GREEN STEEL`.
- Reduced-motion users see a static first word.

### 2. Audience Journey Cards

Purpose:

- Let users identify themselves before navigating deeper.
- Reduce homepage complexity by routing visitors into focused pages.

Cards:

- Home owners
- Engineers
- Dealers
- Contractors

Pattern:

- Premium image-backed audience cards with a wider first-card layout on desktop.
- On desktop, hovering or focusing any audience card expands that card width-wise while the remaining cards contract smoothly.
- Each card has a blue audience pill, top-right arrow button, dark blue image overlay, strong project-specific headline, and bottom CTA line.
- Hover states lift the card, scale the image, rotate/change the arrow button, shift the audience pill, and extend the CTA rule.
- A proof strip below the cards shows audience-related confidence metrics for homes, projects, dealers, and infrastructure.
- Each card links to its individual audience page.

### 3. Fastest Route

Purpose:

- Give high-intent visitors practical buying actions immediately after audience routing.

Actions:

- Check price -> `/steel-price-today`
- Calculate steel -> `/tmt-calculator`
- Find dealer -> `/dealer-locator`
- Request quote -> `/request-quote`

Pattern:

- Four clean action cards.
- Blue icons and text links.
- White cards on light surface.

### 4. Product Paths

Purpose:

- Keep product choice simple and confidence-led.

Products:

- ARS 550D
- ARS CRS 550D

Pattern:

- Two large product cards.
- Product image, use-case copy, proof points, and View product CTA.
- CTAs route to product detail pages.

### 5. Trusted By Builders, Partners, And Institutions

Purpose:

- Merge partner, brand, certification, and client logo signals into one trust section.
- Avoid splitting the same logo/proof idea into multiple competing sections.

Content:

- Certificate and award imagery from available ARS assets.
- Trust labels: SGS, ISO, EPD, GRIHA / LEED, dealer network, Made in India, 550D, CRS.
- Client/brand names retained as text until final logo assets are provided.

### 6. Happy Client Testimonials Slider

Purpose:

- Preserve social-proof space without overloading the homepage.

Pattern:

- Horizontal scroll slider.
- Quote-style cards with customer name and role.
- Final testimonial text should be replaced with approved client copy when supplied.

### 7. Blog / Knowledge Center

Purpose:

- Support SEO and buyer education after primary conversion paths.

Content:

- CRS steel
- Green steel
- TMT vs HYSD
- House construction cost

Pattern:

- Four article cards.
- Category, title, and Read article CTA.

### 8. Contact CTA And Footer

Purpose:

- End with clear lead-generation actions and complete site navigation.

Pattern:

- Reuses `ContactCta`.
- Includes global `SiteFooter`.
- Maintains light-mode editorial style.

## Component Notes

- `SiteHeader`: global navigation and document-aligned mega menu.
- `AnimatedHeroWord`: CSS-based hero word rotation.
- `MotionSection`: visible-by-default section wrapper with subtle reveal motion.
- `ContactCta`: shared homepage ending and footer wrapper.
- Homepage-specific cards are currently defined in `src/app/page.tsx` and can be extracted after visual approval.

## Design Principles

- Blue remains the primary brand and CTA color.
- Red is only an editorial accent for the hero word and selected emphasis.
- Typography uses Inter for body/UI, IBM Plex Sans for display/headings, and IBM Plex Sans Condensed for technical labels and specification-style text.
- Hero typography may stay large and expressive, but post-hero section headings should use restrained title case, controlled line-height, and medium-bold industrial weight.
- Avoid oversized uppercase section titles after the hero; they reduce scanability and make the page feel more like an agency portfolio than an industrial business website.
- Real ARS assets are preferred over invented visuals.
- The homepage should guide users by journey first, then action, then product, then proof.
- No internal migration or placeholder language should appear in the public homepage flow.
