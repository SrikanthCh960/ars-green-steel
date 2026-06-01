# ARS Green Steel Homepage Review

## Source Documents Reviewed

- `DESIGN_SYSTEM.md`
- `ROADMAP.md`

## Review Summary

The homepage has a strong premium-industrial direction: the video-led hero, large editorial typography, proof-led messaging, product framing, and audience path concept are all aligned with the intended ARS Green Steel positioning.

The main issue is that the page still feels like a strong prototype rather than a complete business website. The conversion journey is not finished, the primary brand blue `#004B9B` is not yet dominant, red still behaves like a primary action color in several places, and key business flows such as price, calculator, dealer locator, and request quote are not yet real homepage experiences.

Highest-priority work:

- Correct the brand color hierarchy.
- Convert primary CTAs from red/white-led treatment to blue-led treatment.
- Add a real Buying Assistant section.
- Improve the final CTA/footer.
- Add missing trust and lead-generation sections.

---

## 1. Header / Navigation

Priority: High Priority

### What Works

- The fixed header gives the page a polished, premium feeling.
- ARS light logo is visible and works well over the dark hero.
- Navigation focuses on high-intent items: products, steel price, calculator, and dealer locator.
- The header CTA makes quote generation visible early.

### What Doesn't

- Navigation is still too limited for the required website structure.
- There is no mega menu for products, tools, applications, quality, or resources.
- Header CTA is white, not primary brand blue.
- Hover states use white rather than the system-defined `#004B9B`.
- Mobile navigation is not yet represented.

### Business Impact

High. Visitors can see important actions, but they cannot yet discover the full ARS ecosystem: products, applications, certifications, manufacturing, green steel, and contact routes.

### UX Impact

High. The current navigation is simple but incomplete. It works for the prototype, but it will not scale once the required pages are added.

### Recommended Improvements

- Convert the header CTA to primary blue.
- Add a full navigation model:
  - Products
  - Steel Price
  - Calculator
  - Dealer Locator
  - Applications
  - Quality
  - About
  - Contact
- Create a mega menu for Products, Tools, Applications, and Resources.
- Add mobile menu behavior with visible quote, price, and dealer actions.
- Use blue for active, focus, and interaction states.

---

## 2. Hero Section

Priority: High Priority

### What Works

- The approved background video creates the correct industrial tone.
- The hero feels strong, premium, and editorial.
- The animated word concept is effective and matches the reference direction.
- The headline communicates strength, safety, trust, and green steel clearly.
- The overlay improves text readability over video.

### What Doesn't

- Primary CTAs are not aligned with the design system:
  - The main CTA is white instead of brand blue.
  - The secondary CTA is border-only and visually competes with the primary CTA.
- Accent red is visually prominent in the animated word and pills, but blue is not visible enough.
- The hero subtext is useful but still broad; it should more directly lead to action.
- The hero currently links multiple actions back to `#actions`, but those tools are not real yet.

### Business Impact

High. The hero makes a strong first impression, but it does not yet convert that attention into a clear business action with enough confidence.

### UX Impact

High. Users understand the brand mood, but the next step is not as practical as it should be. The CTA labels should map to real flows.

### Recommended Improvements

- Change the primary hero CTA to blue.
- Keep the animated red word but ensure the rest of the hero system is blue-led.
- Make CTA labels more action-specific:
  - Check Steel Price
  - Calculate Requirement
  - Find Dealer
  - Request Quote
- Ensure the CTAs lead to meaningful sections or pages.
- Keep the video as approved; do not replace with 3D.

---

## 3. Track Record / Proof Section

Priority: High Priority

### What Works

- The section successfully separates proof from the hero.
- The large editorial headline creates a strong premium feel.
- The phrase "Proof, not promises" is strategically strong.
- Metrics such as 32 years, 2.5L MT, 550D, and SGS are relevant to trust.
- Certification chips add useful credibility.

### What Doesn't

- Red is still used as a major visual driver in the section.
- The CTA is styled as a dark/outlined editorial button rather than a blue conversion button.
- The section has strong visual style but does not yet guide users into a real buying flow.
- Some proof claims need client-verified content before becoming final.
- Metrics are visually impressive, but could be clearer for non-technical users.

### Business Impact

High. This section is critical for trust. It can reduce hesitation for home owners, engineers, contractors, and procurement users.

### UX Impact

High. The section is memorable, but users need clearer next actions after reading the proof.

### Recommended Improvements

- Reduce red usage to small accents only.
- Introduce brand blue for CTA and/or active proof highlights.
- Connect proof cards to relevant pages:
  - Quality Certifications
  - Manufacturing
  - Green Steel
  - Dealer Network
- Add short explanatory copy under technical metrics.
- Replace placeholder/general proof with verified ARS claims when available.

---

## 4. Product Range Section

Priority: High Priority

### What Works

- The section correctly introduces ARS 550D and ARS CRS 550D.
- The row-based product structure feels industrial and editorial.
- Product tags help users quickly understand benefits.
- The video/media block gives the product area more weight.
- Product stats such as 550D and CRS are highly scannable.

### What Doesn't

- Product CTAs are red text links instead of blue system links.
- The same hero video is reused for every product, which may feel repetitive.
- Product detail links do not yet go to real product pages.
- Technical information is still thin for engineers and contractors.
- There are no bar sizes, specifications, standards, downloads, or comparison tools.

### Business Impact

High. Product understanding is central to enquiry generation, especially for engineers, contractors, dealers, and procurement teams.

### UX Impact

High. Users get the product names and rough positioning, but not enough information to make a decision.

### Recommended Improvements

- Change product links to brand blue.
- Create real routes for:
  - `/products`
  - `/products/ars-550d`
  - `/products/ars-crs-550d`
- Add product specification tables.
- Add applications, certifications, bar sizes, and brochure CTAs.
- Use distinct product media or product-specific imagery when available.
- Add "Compare products" as a supporting action.

---

## 5. Audience Paths Section

Priority: Medium Priority

### What Works

- The concept is strong and aligned with the roadmap.
- It recognizes different user needs instead of forcing every visitor through one generic journey.
- Tabs for home owners, engineers, dealers, and contractors make the site feel more useful.
- Copy is audience-specific and practical.
- Motion between tabs is restrained and useful.

### What Doesn't

- The warm beige/brown palette feels less aligned with the blue-white industrial system.
- Some cards use brown surfaces that feel closer to lifestyle/product UI than ARS industrial steel.
- Red still appears in icons and links as a primary action color.
- The "View this journey" action does not yet lead to real audience pages.
- The section has strong UX logic, but needs visual alignment with the rest of the homepage.

### Business Impact

Medium to High. Audience routing can improve conversion quality by helping each visitor find the right proof and next action.

### UX Impact

High. This is one of the most useful sections conceptually, especially once linked to real pages.

### Recommended Improvements

- Shift the section background to white or `#F8FAFC`.
- Use blue for active tabs and primary links.
- Keep red only as a small accent.
- Add real audience routes or filtered paths:
  - Home owners
  - Engineers / architects
  - Contractors
  - Dealers / distributors
- Replace lifestyle-like card colors with industrial light surfaces, blue accents, and technical proof cards.
- Add clearer next actions per audience.

---

## 6. Final CTA / Footer Strip

Priority: High Priority

### What Works

- The section makes contact actions visible.
- It includes both call and request quote routes.
- It gives the homepage a basic closing action.

### What Doesn't

- It feels like a placeholder rather than a finished footer.
- It uses dark mode, which conflicts with the user preference and roadmap direction for post-hero sections.
- The main button uses legacy red as the primary action.
- There is no real footer information architecture.
- There are no product, tool, application, certification, or contact columns.
- The copy says "Ready for the homepage prototype," which is not client-facing.

### Business Impact

High. This is the final conversion area, but it currently does not create enough trust or structure for real users.

### UX Impact

High. Users who reach the end need clear options, contact details, and trust links. The current section is too thin.

### Recommended Improvements

- Replace this with a finished light or blue-primary CTA/footer system.
- Remove prototype wording.
- Add final conversion options:
  - Request quote
  - Call sales
  - Find dealer
  - Check steel price
- Add footer columns:
  - Products
  - Tools
  - Applications
  - Quality / Green Steel
  - Company
  - Contact
- Use blue for primary CTA.
- Add verified contact details when available.

---

## 7. Missing Buying Assistant Section

Priority: High Priority

### What Works

- The roadmap clearly defines this as a required homepage section.
- Existing CTAs already point toward the right intent: price, calculator, dealer, quote.

### What Doesn't

- The section is not yet implemented as its own experience.
- Price, calculator, dealer locator, and quote are only links or concepts.
- Users cannot complete or understand the buying path from the homepage.

### Business Impact

High. This is likely the most important missing section for lead generation.

### UX Impact

High. A Buying Assistant would reduce confusion and help users self-select the right next step.

### Recommended Improvements

- Add a dedicated light section after proof or product range.
- Include four clear cards:
  - Check Price
  - Calculate Steel
  - Find Dealer
  - Request Quote
- Use primary blue CTAs.
- Explain each path in practical, non-technical language.
- Connect each card to a real page or flow.

---

## 8. Missing Quality And Manufacturing Section

Priority: Medium Priority

### What Works

- Existing proof metrics hint at quality, SGS, and capacity.
- The product section already uses industrial media and factory language.

### What Doesn't

- There is no dedicated manufacturing story.
- Quality process, testing, plant capability, and certifications are not shown in enough detail.
- Engineers and procurement users do not yet have enough proof.

### Business Impact

Medium to High. This section supports credibility and helps higher-consideration users trust the brand.

### UX Impact

Medium. It strengthens the journey after product interest and before enquiry.

### Recommended Improvements

- Add a section focused on plant capability, testing, and quality systems.
- Link to `/manufacturing` and `/quality-certifications`.
- Use real industrial imagery if available.
- Add certification cards and process steps.

---

## 9. Missing Green Steel / Sustainability Section

Priority: Medium Priority

### What Works

- The brand name already contains "Green Steel."
- Current proof chips mention EPD / GRIHA / LEED readiness.

### What Doesn't

- Sustainability is not yet explained.
- Green credentials are mentioned but not supported with details.
- The section is absent from the homepage journey.

### Business Impact

Medium. Sustainability can improve brand differentiation and support institutional/procurement audiences.

### UX Impact

Medium. Users need a clear explanation of what "Green Steel" means in ARS context.

### Recommended Improvements

- Add a concise sustainability section.
- Explain green steel benefits in practical terms.
- Link to `/green-steel`.
- Use proof-based claims only.
- Avoid vague environmental language.

---

## 10. Missing Applications Section

Priority: Medium Priority

### What Works

- Product copy already references residential, commercial, coastal, and exposed conditions.

### What Doesn't

- Applications are not presented as a dedicated homepage section.
- Users cannot easily map product grades to project types.
- SEO-relevant application routes are missing from the homepage.

### Business Impact

Medium. Application clarity helps users understand fit and supports future SEO pages.

### UX Impact

Medium. It reduces the cognitive load for home owners and contractors.

### Recommended Improvements

- Add application cards:
  - Residential construction
  - Commercial construction
  - Coastal construction
  - Infrastructure projects
- Link to application pages.
- Recommend relevant ARS products per application.

---

## 11. Missing Clients / Projects / Testimonials Section

Priority: Low to Medium Priority

### What Works

- The page already has a proof-first mindset.
- Audience quotes are used conceptually in the Audience Paths section.

### What Doesn't

- There are no real client stories, project examples, testimonials, or case studies.
- The audience quotes feel illustrative rather than evidence-based.

### Business Impact

Medium if real proof is available. Low if content is not yet available.

### UX Impact

Medium. Real testimonials or project proof can build confidence before contact.

### Recommended Improvements

- Add only if verified client/project content is available.
- Use real project categories, not generic testimonials.
- Connect projects to product use cases and certifications.

---

## 12. Overall Homepage Flow

Priority: High Priority

### What Works

- The current sequence has a strong visual rhythm:
  - Hero
  - Proof
  - Product range
  - Audience paths
  - Contact CTA
- The page avoids generic startup design.
- Industrial tone is clear.

### What Doesn't

- The full roadmap sequence is incomplete.
- Brand blue is underused.
- Red is still acting like a primary color.
- Conversion tools are not yet real.
- The footer is not production-ready.
- Current links mostly point to sections rather than dedicated pages or flows.

### Business Impact

High. The homepage needs to become a working lead-generation journey, not just a premium visual prototype.

### UX Impact

High. Users need clearer decision paths, real actions, and consistent visual language from top to bottom.

### Recommended Improvements

- Recommended final homepage order:
  1. Hero
  2. Track Record / Proof
  3. Buying Assistant
  4. Product Range
  5. Audience Paths
  6. Quality and Manufacturing
  7. Green Steel / Sustainability
  8. Applications
  9. Clients / Projects / Testimonials
  10. Contact / Request Quote
  11. Footer
- Shift all primary interactions to `#004B9B`.
- Keep `#F76369` only for accents.
- Replace placeholder text with client-facing copy.
- Build real routes for high-intent CTAs.

---

## Priority Action List

### High Priority

- Correct color hierarchy across homepage.
- Convert primary CTAs to `#004B9B`.
- Add Buying Assistant section.
- Redesign final CTA/footer.
- Create scalable navigation and mega menu.
- Link homepage CTAs to real routes or planned flows.
- Add real request quote/contact conversion path.

### Medium Priority

- Refine Audience Paths visual design.
- Add Quality and Manufacturing section.
- Add Green Steel / Sustainability section.
- Add Applications section.
- Add stronger product specification structure.

### Low Priority

- Add clients/projects/testimonials once verified content exists.
- Add richer motion only after the conversion journey is stable.
- Use 3D only if it supports product or engineering storytelling.
