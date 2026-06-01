# ARS Green Steel Missing Content Report

Source document: `CONTENT_MIGRATION_AUDIT.md`

Report date: 2026-05-31

## Purpose

This report classifies all business content currently missing from the redesigned ARS Green Steel website.

Priority is based on:

1. Enquiry generation
2. Product decision support
3. Trust and certification proof
4. SEO value
5. Corporate/support value

## High Priority Missing Content

These items should be migrated before or during the next major page builds because they directly affect enquiries, product confidence, buyer decision-making, or technical trust.

| Missing content | Original location | Business importance | Recommended destination page | Recommendation |
|---|---|---|---|---|
| Steel Price Today tool: product, state, city, rod size prices, bundles, rods, weight, total amount, booking details | `/tmt-steel-price-today` | Critical conversion tool; supports high-intent buyers checking price before enquiry | `/steel-price-today` | Improve |
| TMT Calculator tool: building type, category, floors, area, live price context, calculation output | `/tmt-steel-calculator` and repeated calculator blocks | Critical planning tool; supports home owners, contractors, and procurement users | `/tmt-calculator` | Improve |
| Dealer locator / retailer experience | `/our-network` | Critical local purchase path; reduces friction between enquiry and supply | `/dealer-locator` | Improve |
| Contact details: phone numbers, protected email, corporate office, steel plant, contact form | `/contact` | Critical lead-generation and trust content | `/contact` | Improve |
| Request quote / enquiry flow | Product pages, application pages, price page, calculator page, contact page | Critical lead capture; needed across all high-intent journeys | `/request-quote` | Improve |
| ARS 550D product content: features, safety/savings, physical properties, chemical properties, FAQ, enquiry | `/product-550d` | Core product decision content; required for engineers, contractors, and buyers | `/products/ars-550d` | Improve |
| ARS 550D CRS product content: CRS features, benefits, specs, physical/chemical properties, CRS FAQs | `/product-crs-550d`, `/products/ars-550d-crs` | Core product for corrosion-resistant use cases; strong differentiation | `/products/ars-crs-550d` | Improve |
| CRS duplicate product URL/content | `/product-crs-550d`, `/products/ars-550d-crs` | SEO and content duplication risk | Canonical `/products/ars-crs-550d` | Improve |
| Product comparison and full product range | Homepage product section, rod-size pages, product pages | High product clarity value; helps users choose grade/size | `/products` | Improve |
| Physical and chemical property tables | `/product-550d`, `/product-crs-550d`, engineers guide | High technical trust; essential for engineers/procurement | Product detail pages and technical specifications | Keep |
| Full Quality page content: USP, quality control, ARS 550D features, lab/testing, bend/rebend, martensite/ring, tensile, quenching, billet manufacturing, spectro analysis, SGS | `/our-quality` | High trust content; supports technical confidence before enquiry | `/quality-certifications`, `/manufacturing`, `/steel-testing` | Improve |
| Steel Testing content and free on-site spectrometer service request | `/steel-testing`, contractor guide | Strong differentiator; supports engineers and contractors | `/steel-testing` or Services/Testing | Improve |
| Certifications and awards: sustainability report, SGBC, NISST, PWD approval, renewals, NHAI TES, ISO 9001/14001/45001, EPD, GRIHA, ABP, ISPAT Udyog Ratan | `/our-certification` | High trust and compliance proof; essential for technical/procurement users | `/certifications` | Improve |
| Green Steel core proof: green taxonomy, certifications, developer benefits, ESG benefits, environmental credentials | `/ars-green-steel` | High positioning and institutional value | `/green-steel` | Improve |
| Green Steel CO2/tree/vehicle equivalence claims | `/ars-green-steel` | High impact but must be verified before publishing | `/green-steel` | Improve |
| Homeowners guide: quality, durability, cost savings, home calculator CTA, foundations/beams/pillars, expert trust | `/tmt-steel-bar-guide-homeowners` | High audience conversion and SEO value | `/audiences/homeowners` or `/applications/residential-construction` | Improve |
| Engineers/Architects guide: chemical composition, TMT process, quenching, ribs, logo mold, properties, project story | `/tmt-steel-bar-guide-engineers-architects` | High technical buyer value | `/audiences/engineers-architects` and product/quality pages | Improve |
| Civil Contractors guide: spectrometer analysis, ductility, bendability, martensite, support services, testing and calculation assistance | `/tmt-steel-bar-guide-civil-contractors` | High contractor trust and service value | `/audiences/contractors` and `/steel-testing` | Improve |
| Application pages for Road Projects | `/road-projects-tmt-steel-bars` | High SEO and project enquiry value | `/applications/road-projects` or `/industries/road-projects` | Improve |
| Application pages for Bridges/Flyovers | `/bridges-projects-tmt-steel-bars` | High infrastructure buyer value | `/applications/bridges-flyovers` | Improve |
| Application pages for Institutional Projects | `/institutions-projects-tmt-steel-bars` | High institutional/procurement buyer value | `/applications/institutional-projects` | Improve |
| Dealer/distributor page content | `/steel-distributors-dealers` | High business development and dealer confidence value | `/dealers` | Improve |
| Become a Distributor content and dealer lead form | `/become-a-steel-distributor` | High channel-growth value | `/become-a-dealer` | Improve |
| Brochure and ARS 550D CRS leaflet PDFs | Homepage and repeated product/blog CTAs | High sales-support value | Product pages, Resources, footer, enquiry journey | Keep |
| Valuable clients/client proof | Homepage | High trust proof; supports first-time buyers and procurement | Homepage, `/projects`, `/clients` | Improve |
| Project story, including Bridge Phase 2 reference | Engineers guide and project/application pages | High technical/project credibility | `/projects` and relevant application pages | Improve |

## Medium Priority Missing Content

These items matter for trust, SEO, recruiting, brand depth, or journey completeness, but they can follow after the core conversion/product/trust pages.

| Missing content | Original location | Business importance | Recommended destination page | Recommendation |
|---|---|---|---|---|
| Individual rod-size SEO pages: 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm | `/8-mm-steel-rod`, `/10-mm-steel-rod`, `/12-mm-steel-rod`, `/16-mm-steel-rod`, `/20-mm-steel-rod`, `/25-mm-steel-rod`, `/32-mm-steel-rod` | High SEO value, medium build priority after core product pages | `/products/sizes/[size]` or `/steel-rod-sizes/[size]` | Improve |
| Rod-size weight/use-case data | Individual rod-size pages | Strong SEO and buyer education value | Product size pages and calculator support | Keep |
| Rod-size FAQs | Individual rod-size pages | SEO and user education value | Product size pages | Improve |
| Blog archive and full article library | `/blog.html`, `/blog/...` | SEO and education value; not immediate conversion core | `/blogs`, `/blogs/[slug]` | Improve |
| Blog: Corrosion Resistance Steel | `/blog/corrosion-resistance-steel.html` | Supports CRS product and SEO | `/blogs/corrosion-resistance-steel` | Improve |
| Blog: Different Types of TMT Steel Bars | `/blog/exploring-the-different-types-of-tmt-steel-bars.html` | Supports rod-size SEO and product education | `/blogs/different-types-of-tmt-steel-bars` | Improve |
| Blog: Steel Round Bar | `/blog/steel-round-bar.html` | General SEO support; lower product alignment than TMT content | `/blogs/steel-round-bar` | Improve |
| Blog: GST impact on steel industry | `/blog/effects-of-gst-on-the-steel-industries-in-india.html` | Useful SEO but needs current legal/tax verification | `/blogs/gst-impact-steel-industry` | Improve |
| Existing testimonials / happy customers | Homepage, `/become-a-steel-distributor`, engineers guide | Trust value, but needs verification and context | Homepage, `/projects`, `/clients`, About trust sections | Improve |
| About legacy content: group history, vision, mission, MD's Desk | `/about-us` | Brand credibility; partially covered but not complete | `/about` | Improve |
| Core Team / leadership content | `/our-team` | Corporate trust and institutional credibility | `/about` or `/leadership` | Improve |
| CSR content: health, infrastructure, sports initiatives | `/csr` | Corporate trust and brand responsibility | `/csr` or About subpage | Improve |
| Careers content: why work with ARS, benefits, culture, apply now | `/careers` | Recruiting value and company credibility | `/careers` | Improve |
| Video gallery and YouTube links | `/video` | Trust/media support; useful for proof but not core conversion | `/resources/videos` or `/media/videos` | Improve |
| Existing homepage blog preview | `/` | Helps surface educational content | Homepage and Blog archive | Improve |
| Existing homepage product-size application section | `/` | SEO and product education support | Products and size guide pages | Improve |
| Awards content: ABP India Infrastructure 2024 and ISPAT Udyog Ratan 2024 | `/our-certification` | Strong proof if verified; medium priority after certificates | `/certifications` and About proof | Improve |
| Manufacturing process details from distributor page: induction furnace, melting discharge, ladle teeming, continuous casting, rolling mills | `/become-a-steel-distributor` | Good trust content, but should support a dedicated manufacturing story | `/manufacturing` | Improve |
| Dealer/customer support content from distributor pages | `/steel-distributors-dealers`, `/become-a-steel-distributor` | Supports dealer journey; medium after core dealer locator | `/dealers`, `/become-a-dealer` | Improve |
| Application FAQs for roads, bridges/flyovers, institutions | Application pages | Useful SEO and conversion support | Relevant application pages | Improve |

## Low Priority Missing Content

These items should be preserved where necessary, but they should not delay the core business pages.

| Missing content | Original location | Business importance | Recommended destination page | Recommendation |
|---|---|---|---|---|
| Privacy policy/legal content | `/privacy-policy` | Legal requirement, but low design priority | `/privacy-policy` | Keep |
| Newsletter/update prompt | Footer and blog pages | Low conversion value compared with quote/dealer/contact | Footer or Blog | Improve |
| Chatbot reference | Existing footer/global UI | Unknown value; depends on whether client wants chatbot retained | Global support or remove until confirmed | Improve |
| Dominant calculator block on legal/media/corporate pages | Repeated across privacy, video, CSR, and other pages | Low relevance in those page contexts | Replace with contextual footer/service link | Remove |
| RD TVC and Couple TVC video labels | `/video` | Low/medium brand media value; useful only if assets are approved | `/resources/videos` | Keep |
| Generic related blog sidebar links | Blog detail pages | Low if not curated; can become clutter | Blog detail related-content module | Improve |
| Subscribe sections on blog pages | Blog detail pages | Low unless newsletter strategy exists | Blog/resources footer | Improve |
| Broad archive list from WordPress blog | `/blog.html` | Low until full content export and SEO decision are made | Blog archive | Improve |
| Older or generic corporate copy that repeats across pages | Multiple old pages | Low if it duplicates stronger proof-led content | Rewrite into reusable proof/CTA sections | Remove |

## Items To Verify Before Migration

These items should not be published as-is until confirmed by ARS/client:

| Item | Original location | Why verification is needed |
|---|---|---|
| Phone numbers: `+91 9710411111`, `044-45606700`, `044-4350 0597`, `+91 93607 69749` | Contact, testing, applications | Contact accuracy directly affects lead generation |
| Protected email address | Contact/global header | Must expose correct official sales/support email |
| Corporate office and plant addresses | Contact/footer | Required for trust and local SEO |
| Physical and chemical property values | Product pages, engineer guide | Technical accuracy is essential |
| Green Steel CO2/tree/vehicle equivalence numbers | `/ars-green-steel` | High-risk sustainability claim; needs source/proof |
| Certificate and award currency | `/our-certification` | Outdated certificates damage trust |
| FAQ text on 12mm rod page | `/12-mm-steel-rod` | Audit found likely duplicate 8mm FAQ content |
| CRS duplicate URL decision | `/product-crs-550d`, `/products/ars-550d-crs` | Needed for canonical SEO and clean content migration |
| Blog archive scope | `/blog.html` | Need full WordPress export before deciding all posts |

## Recommended Build Order Based On Missing Content

1. Services and conversion tools:
   - `/steel-price-today`
   - `/tmt-calculator`
   - `/dealer-locator`
   - `/request-quote`
   - `/contact`

2. Product and technical trust:
   - `/products`
   - `/products/ars-550d`
   - `/products/ars-crs-550d`
   - `/certifications`
   - `/quality-certifications`
   - `/steel-testing`

3. Buyer education and SEO:
   - Rod-size pages
   - Homeowners guide
   - Engineers/architects guide
   - Contractors guide
   - Road, bridge, and institutional application pages

4. Corporate and proof depth:
   - About legacy sections
   - Leadership/team
   - CSR
   - Careers
   - Projects/clients/testimonials
   - Green Steel

5. Resources and support:
   - Blog archive
   - Blog detail pages
   - Video gallery
   - Privacy policy

## Summary

The most urgent missing content is not decorative content. It is the content that helps visitors decide, verify, and enquire:

- Price
- Calculator
- Dealer locator
- Quote/contact
- Product specs
- Quality/testing proof
- Certifications
- Application relevance

These should be treated as the content foundation for the next phase of the redesign.

