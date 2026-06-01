# ARS Green Steel Content Migration Audit

Audit date: 2026-05-31

Source site audited: `https://arsgroup.in/`

Redesign status at audit time:

- Implemented: Homepage `/`
- Implemented: About `/about`
- Not yet implemented: Products, Services, Industries, Projects, Certifications, Contact, Enquiry, tools, blog, video, careers, CSR, dealer pages, individual rod-size pages

## Audit Purpose

The redesign must modernize the ARS Green Steel website without losing business-critical content from the existing website.

This audit documents the current site content and gives a migration recommendation for each page/section:

- Keep: Preserve the content and bring it into the redesign.
- Improve: Preserve the business intent, but rewrite, restructure, correct, or redesign.
- Merge: Combine with another page/section to reduce duplication.
- Remove: Do not migrate unless the business specifically requests it.

## High-Level Findings

- The existing website contains significant business content that is not yet present in the redesign.
- The current redesign captures the premium brand direction and some proof themes, but it does not yet cover most legacy content.
- The strongest existing content assets are product pages, rod-size SEO pages, steel price, TMT calculator, certifications, green steel, quality/testing proof, audience guides, project/application pages, dealer/distributor pages, and technical blogs.
- Several pages repeat the same modules: product range, SGS/EPD certifications, ARS benefits, calculator, enquiry, brochure/leaflet CTAs, and FAQs. These should become reusable content sections in the redesign.
- Some content needs correction before migration, including typos, duplicate FAQ text on rod-size pages, inconsistent naming, outdated phrasing, and duplicated CRS product URLs.

## Current Site Global Content

| Current page/section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Global top contact | Email, phone number, WhatsApp-style contact paths | High | Yes | Improve into cleaner utility/contact model | Merge into header/contact/footer | No |
| Main navigation | Products, quality, testing, segments, green steel, about, applications, buy, blogs, media, contact | High | Yes | Simplify labels and hierarchy | Merge into new navigation/mega menu | No |
| Footer | Company summary, links, office address, customer helpline, newsletter/update prompt, chatbot | High | Yes | Improve layout and remove clutter | Merge into new footer system | No |
| Repeated TMT calculator block | Appears on many pages with live price and calculator fields | High | Yes | Convert into reusable calculator/service component | Merge into Services and page-level CTA blocks | No |
| Repeated product range block | Links to ARS 550D, CRS, and rod sizes | High | Yes | Convert into product navigation module | Merge into Products page and related-page cards | No |
| Repeated certification block | SGS and EPD proof appears across product/application pages | High | Yes | Expand to include full certification proof | Merge into certification strip/component | No |
| Repeated enquiry blocks | General enquiry or project enquiry forms on product/application pages | High | Yes | Standardize as lead form variants | Merge into Contact/Enquiry system | No |
| Brochure/leaflet downloads | PDF brochure and ARS 550D CRS leaflet links | Medium | Yes | Use clear download cards and track clicks | Merge into Products/Resources/Footer | No |

## Page-by-Page Migration Audit

### 1. Home

Current URL: `/`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Hero and brand introduction | ARS as TMT bars and steel manufacturing company in Tamil Nadu | High | Yes | Already reimagined in redesign with video hero | Merge with redesigned homepage hero | No |
| Valuable clients | Client/logo proof area | High | Yes | Add stronger context and credible client/project proof | Merge into Projects/Clients section | No |
| Journey / manufacturing scale | ARS journey and capacity proof, including 2,50,000 MT | High | Yes | Clarify exact capacity numbers and present as metrics | Merge into Homepage proof and About/Manufacturing | No |
| Certificates and awards | EPD, GRIHA, LEED, SGS, ABP, STEELEX, EPD certification | High | Yes | Move into dedicated Certifications page and proof strip | Merge into Certifications and homepage trust strip | No |
| ARS benefits | Quality assurance, performance, sustainable construction | High | Yes | Rewrite into proof-led benefit cards | Merge into Homepage and Products | No |
| Product range | ARS 550D, CRS, rod sizes | High | Yes | Already partly represented; add all rod sizes | Merge into Products page | No |
| Truth for everyone | Home owners, experts, dealers/distributors, civil circle | High | Yes | Already conceptually represented as Audience Paths | Merge into audience journey pages | No |
| Different sizes and application of steel bars | 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm with use-case headlines | High | Yes | Create stronger size guide and SEO pages | Merge into Product detail and rod-size pages | No |
| Happy customers | Vijay, Raja, Murthy, Prabhu testimonials | Medium | Yes | Validate authenticity and add context | Merge into Trust/Projects/Testimonial sections | No |
| Blog preview | Links to technical/industry articles | Medium | Yes | Improve blog cards and internal linking | Merge into Blog/Resources | No |
| TMT calculator | Calculator module | High | Yes | Build as real tool | Merge into Services and homepage Buying Assistant | No |

### 2. About Us

Current URL: `/about-us`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| About Us hero | Company introduction | High | Yes | Already partially reimagined in new `/about` | Merge into redesigned About | No |
| About the group | ARS group overview and business background | High | Yes | Add more specific proof and reduce generic copy | Merge into About page | No |
| Vision | Company vision | Medium | Yes | Rewrite into concise brand/industry statement | Merge into About | No |
| Mission | Company mission | Medium | Yes | Rewrite for clarity and credibility | Merge into About | No |
| MD's Desk | Managing Director message | Medium | Yes | Keep if approved by client; modernize layout | Merge into leadership/story section | No |
| Calculator block | Repeated TMT calculator | High | Yes | Use reusable calculator CTA | Merge into Services CTA | No |

Migration note:

- The new About page currently covers trust, manufacturing, dealer confidence, and green steel readiness.
- It still needs the legacy About content: Vision, Mission, MD's Desk, more complete group history, and approved leadership message.

### 3. Core Team

Current URL: `/our-team`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Core Team hero | Team introduction | Medium | Yes | Improve hierarchy | Merge under About or Leadership page | No |
| Board of Directors | Managing Director, Executive Director, Technical Director | High | Yes | Keep only with approved names/titles/photos | Merge into About leadership | No |
| Senior leadership | Finance, global business, supply chain, CMO, project/retail sales, field marketing, people management, IT, business development, strategy, marketing | Medium | Yes | Use clean leadership cards; verify titles | Merge into About or separate Leadership page | No |
| Calculator block | Repeated calculator | Medium | Yes | Replace with contact/quote CTA | Merge into footer/services | No |

### 4. CSR

Current URL: `/csr`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| CSR hero | Corporate Social Responsibility | Medium | Yes | Improve storytelling | Merge into About/CSR page | No |
| Purpose of CSR | CSR purpose statement | Medium | Yes | Rewrite concisely | Merge into CSR page | No |
| Health | Nellai Cancer Hospital health care initiative | Medium | Yes | Add photos/proof if available | Merge into CSR | No |
| Infrastructure | Loyola College infrastructure initiative | Medium | Yes | Add project context | Merge into CSR | No |
| Sports | Sports-related CSR activity | Low/Medium | Yes | Add details and proof | Merge into CSR | No |
| Calculator block | Repeated calculator | Low | No | Replace with relevant contact/footer | Merge into footer only | Yes as page body CTA |

### 5. Careers

Current URL: `/careers`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Careers hero | "Forge your future with us" | Medium | Yes | Keep as recruiting page hero | Standalone Careers page | No |
| Why work with ARS | Employer value proposition | Medium | Yes | Improve clarity and authenticity | Careers page | No |
| Employee benefits | Benefits list | Medium | Yes | Verify current HR details | Careers page | No |
| Culture | Culture section | Medium | Yes | Add real imagery/testimonials | Careers page | No |
| Apply now | Application form/CTA | High for hiring | Yes | Improve form and routing | Careers page | No |

### 6. Contact

Current URL: `/contact`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Contact Us hero | Contact page entry | High | Yes | Build modern contact page | Contact | No |
| Contact form | Form for enquiries | High | Yes | Add validation, enquiry type, routing | Contact/Enquiry | No |
| Get in touch | Sales/contact details | High | Yes | Make scannable and mobile-friendly | Contact/footer/header | No |
| Phone numbers | +91 9710411111, 044-45606700, 044-4350 0597 | High | Yes | Verify official numbers | Contact/footer/header | No |
| Email | Protected email shown on site | High | Yes | Verify exact email and expose safely | Contact/footer | No |
| Corporate office | Chennai corporate office address | High | Yes | Use map/address card | Contact/footer | No |
| Steel plant | Plant address | High | Yes | Use separate plant card | Contact/About/Manufacturing | No |
| Calculator block | Repeated calculator | Medium | Yes | Use as secondary CTA only | Services/contact links | No |

### 7. ARS 550D Product Page

Current URL: `/product-550d`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Product hero | ARS 550D | High | Yes | Build technical product detail hero | Product detail `/products/ars-550d` | No |
| Product explanation | ARS 550D TMT bars | High | Yes | Rewrite for clarity and decision-making | Product detail | No |
| Features | High tensile strength and ductility | High | Yes | Add proof and specs | Product detail | No |
| Safety and savings | Maximum safety and savings | High | Yes | Support with data/examples | Product detail | No |
| Physical properties | Technical table | High | Yes | Must migrate accurately | Product specs component | No |
| Chemical properties | Technical table | High | Yes | Must migrate accurately | Product specs component | No |
| FAQ | TMT process, need for TMT bars, grades, sulphur/phosphorus, reddish color misconception | High | Yes | Rewrite/structure for SEO | Product FAQ | No |
| Enquiry | Product enquiry form | High | Yes | Standardize as quote/enquiry | Enquiry system | No |
| Calculator | TMT calculator | High | Yes | Link to Services tool | Services | No |

### 8. ARS 550D CRS Product Page

Current URLs:

- `/product-crs-550d`
- `/products/ars-550d-crs`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Product hero | ARS 550D CRS steel bar | High | Yes | Create canonical detail page | Merge into `/products/ars-crs-550d` | Remove duplicate URL |
| Corrosion resistance movement | CRS positioning | High | Yes | Keep but make more technical and credible | Product detail | No |
| Unique CRS features | Features that make ARS 550D CRS unique | High | Yes | Add proof and specs | Product detail | No |
| Benefits | True benefits of ARS 550D CRS | High | Yes | Improve with application context | Product detail/applications | No |
| Specifications | Strong structure specs | High | Yes | Use table/cards | Product detail | No |
| Physical properties | Technical table | High | Yes | Must migrate accurately | Product specs component | No |
| Chemical properties | Technical table | High | Yes | Must migrate accurately | Product specs component | No |
| FAQ | Corrosion resistant steel, CRS meaning, corrosion-resistant TMT bars | High | Yes | Rewrite for SEO | Product FAQ | No |
| Enquiry | Product enquiry form | High | Yes | Standardize | Enquiry system | No |

Migration note:

- The two CRS URLs appear to duplicate the same content. The redesign should use one canonical CRS product page and redirect/merge the duplicate.

### 9. Rod Size Pages

Current URLs:

- `/8-mm-steel-rod`
- `/10-mm-steel-rod`
- `/12-mm-steel-rod`
- `/16-mm-steel-rod`
- `/20-mm-steel-rod`
- `/25-mm-steel-rod`
- `/32-mm-steel-rod`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Size-specific hero | Size-specific SEO headline for each rod size | High | Yes | Rewrite for consistency and accuracy | Individual SEO pages or product-size guide | No |
| Size description | Use cases, weight per meter, structural application guidance | High | Yes | Keep facts; improve copy and tables | Product detail / size pages | No |
| Check price CTA | CTA to price tool | High | Yes | Link to live price tool | Services/Steel Price | No |
| Product range | Repeated product range | Medium | Yes | Use reusable related products module | Merge into Product pages | No |
| Quality and certifications | SGS and EPD | High | Yes | Use shared certification strip | Merge into Certifications component | No |
| ARS benefits | D quality, SGS assurance, bend/rebend, martensite/ring, tensile test | High | Yes | Use shared benefits/proof blocks | Merge into Quality/Product pages | No |
| Use cases | Size-specific use cases | High | Yes | Add diagrams/tables if possible | Keep on size pages | No |
| FAQs | Size-specific FAQs | High | Yes | Correct duplicate 8mm FAQs appearing on 12mm page | Keep after cleanup | No |
| Calculator | TMT calculator module | High | Yes | Link as CTA | Services | No |

Size-specific migration notes:

- 8mm: Keep light/strong positioning, decorative/residential/smaller reinforcement applications, weight FAQ.
- 10mm: Keep approx. 0.617 kg/m weight, residential/commercial reinforcement and foundation guidance.
- 12mm: Keep approx. 0.890 kg/m weight and high-demand structural applications; correct FAQ copy that appears to reference 8mm.
- 16mm: Keep approx. 1.580 kg/m weight, commercial foundations, beams, bridges/highways.
- 20mm: Keep approx. 2.470 kg/m weight, high-load structures, industrial facilities, bridges.
- 25mm: Keep approx. 3.850 kg/m weight, high-rises, commercial complexes, bridges, industrial facilities.
- 32mm: Keep mega-structure positioning, bridges, industrial complexes, expansive foundations; add exact weight if available from business.

### 10. Our Quality

Current URL: `/our-quality`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Our Quality hero | Quality positioning | High | Yes | Create dedicated quality page | Certifications/Quality page | No |
| Unique Selling Proposition | ARS quality USP | High | Yes | Rewrite proof-led | Quality page | No |
| Quality control | Quality control process | High | Yes | Add process visuals | Quality/Manufacturing | No |
| ARS 550D features | Product quality features | High | Yes | Cross-link to ARS 550D | Product + Quality | No |
| Laboratory and testing | Lab and testing capabilities | High | Yes | Use trust section | Quality/Testing | No |
| Bend and rebend test | Test method/proof | High | Yes | Create test card | Quality/Testing | No |
| Martensite and ring test | Test method/proof | High | Yes | Create test card | Quality/Testing | No |
| Tensile test | Test method/proof | High | Yes | Create test card | Quality/Testing | No |
| Quenching process | Manufacturing process detail | High | Yes | Move to Manufacturing/Quality | No |
| Billet manufacturing | Manufacturing proof | High | Yes | Move to Manufacturing | No |
| Spectro analysis test | Chemical verification proof | High | Yes | Move to Steel Testing | No |
| SGS certificate | Certification proof | High | Yes | Merge with Certifications | No |

### 11. Steel Testing

Current URL: `/steel-testing`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Testing hero | On-site spectrometer testing by ARS | High | Yes | Make this a major trust/service page | Steel Testing / Services | No |
| Spectrometer testing value | On-site precision for projects | High | Yes | Improve explanation and CTA | Steel Testing | No |
| Call CTA | +91 9710411111 | High | Yes | Verify and make tappable | Contact/Testing | No |
| Free on-site spectrometer service | Complimentary site testing for contractors/engineers | High | Yes | Strong differentiator; preserve prominently | Services/Quality | No |
| Request testing form | Request on-site spectrometry testing | High | Yes | Create service request form | Enquiry system | No |
| Quality verified by steel test | Trust proof section | High | Yes | Improve copy | Steel Testing | No |
| Testing videos | Spectrometer testing videos | Medium | Yes | Use video gallery or embedded proof | Media/Testing | No |
| SGS certification | ARS 550D certified by SGS | High | Yes | Merge into Certifications | No |

### 12. Certifications and Awards

Current URL: `/our-certification`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Certificates and awards hero | Page listing certificates | High | Yes | Create `/certifications` | Certifications | No |
| Sustainability report | Sustainability documentation | High | Yes | Download card | Certifications/Green Steel | No |
| SGBC certificate | Green building proof | High | Yes | Keep with context | Certifications | No |
| NISST green steel taxonomy certificate | Green steel taxonomy proof | High | Yes | Keep and explain | Green Steel/Certifications | No |
| PWD brand approval certificate | Government/public works approval | High | Yes | Keep | Certifications | No |
| TMT bar renewals certificate | Product approval/renewal | High | Yes | Keep | Certifications | No |
| Billets renewal certificate | Manufacturing/product proof | High | Yes | Keep | Certifications | No |
| NHAI source approval document (TES) | Infrastructure approval proof | High | Yes | Keep | Certifications/Projects | No |
| ISO 9001 certificate | Quality management | High | Yes | Keep | Certifications | No |
| ISO 14001 certificate | Environmental management | High | Yes | Keep | Certifications/Green Steel | No |
| ISO 45001 certificate | Occupational health/safety | High | Yes | Keep | Certifications | No |
| Environmental Product Declaration certificate | EPD proof | High | Yes | Keep | Certifications/Green Steel | No |
| GRIHA certificate | Green building proof | High | Yes | Keep | Certifications/Green Steel | No |
| ABP India Infrastructure 2024 award | Green product initiative award | Medium | Yes | Keep if verified/current | Awards section | No |
| ISPAT Udyog Ratan award 2024 | Ministry of Steel green initiative leadership | High | Yes | Keep if verified/current | Awards section | No |

### 13. ARS Green Steel

Current URL: `/ars-green-steel`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Green Steel hero | ARS Green Steel positioning | High | Yes | Create modern `/green-steel` page | Green Steel | No |
| Zero emission steel mission | Leading India's zero emission steel mission | High | Yes | Needs substantiation and clarity | Green Steel | No |
| What is ARS Steel / India's Greenest Steel | Brand claim | High | Yes | Verify wording; avoid unsupported superlatives unless proof exists | Green Steel | No |
| Why choose ARS green steel | Benefits for developers/builders/infrastructure/industries | High | Yes | Structure by audience | Green Steel/Industries | No |
| Net zero/decarbonization goals | Sustainability/business benefits | High | Yes | Keep | Green Steel | No |
| Additional FAR | Green building benefit | Medium/High | Yes | Explain jurisdiction/context | Green Steel | No |
| Capital subsidy | Incentive benefit | Medium | Yes | Verify applicability | Green Steel | No |
| Lower financing costs | ESG/finance benefit | Medium | Yes | Verify and qualify | Green Steel | No |
| Faster environmental clearances | Approval benefit | Medium | Yes | Verify and qualify | Green Steel | No |
| ESG excellence | Corporate sustainability benefit | High | Yes | Keep | Green Steel | No |
| Sustainable branding | Developer/customer brand benefit | Medium | Yes | Keep | Green Steel | No |
| Green Steel Taxonomy | Explains taxonomy | High | Yes | Keep and simplify | Green Steel | No |
| Environmental certifications | Certification proof | High | Yes | Merge with Certifications | No |
| CO2/tree/vehicle stats | 1 ton reduces 2 MT CO2 vs average Indian steel; 90 trees/ton; 250,000 MT reduces 500,000 MT CO2; 22 million trees/year; 110,000 vehicles/year | High | Yes | Must verify numbers and cite source | Green Steel proof | No |
| Join green steel revolution | CTA | Medium | Yes | Improve CTA toward enquiry/download | Green Steel | No |

### 14. TMT Steel Price Today

Current URL: `/tmt-steel-price-today`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Price page hero | Latest steel price today per kg in India/current steel rates | High | Yes | Create `/steel-price-today` | Services | No |
| Educational price copy | Factors affecting steel/TMT price: raw materials, demand, production, transport, certification | High | Yes | Rewrite shorter and more useful | Price page | No |
| Price checker | Product, state, city, rod sizes, bundles, rods, weight, total amount | Critical | Yes | Build real price tool with maintained data source | Price tool | No |
| Rod-size price rows | 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm | Critical | Yes | Keep as data model | Price tool | No |
| Booking details | Submit booking details form | High | Yes | Merge into quote/enquiry flow | Enquiry | No |
| Benefits | Transparency, budgeting, day-to-day info, Ministry of Steel compliance | High | Yes | Keep but distinguish from calculator benefits | Services content | No |
| FAQ | Price in India, price increases, latest prices, per kg calculation, factors, grade effect, lock-in, delivery, updates | High | Yes | Keep and improve SEO | Price FAQ | No |
| Enquiry | Lead capture | High | Yes | Standardize | Enquiry | No |

### 15. TMT Steel Calculator

Current URL: `/tmt-steel-calculator`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Calculator hero | TMT Steel Calculator | Critical | Yes | Create `/tmt-calculator` | Services | No |
| Calculator explanation | Calculates requirement, weight, budgeting, beams/columns/slabs | High | Yes | Keep and simplify | Calculator page | No |
| Calculator module | Live steel price, building type, category, floors, area, calculate | Critical | Yes | Build functional calculator; confirm formula | Calculator tool | No |
| Price note | City/town fallback note | Medium | Yes | Keep if location data remains | Calculator | No |
| Benefits | Transparency, budgeting, daily info, Ministry norms | High | Yes | Keep but tighten | Services content | No |
| FAQ | Pricing transparency, budgeting usefulness, compliance | High | Yes | Keep | Calculator FAQ | No |
| Enquiry | Lead capture | High | Yes | Standardize | Enquiry | No |

### 16. Dealer Locator / Retailer

Current URL: `/our-network`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Dealer locator / retailer | Dealer locator and retail access | Critical | Yes | Create `/dealer-locator` with searchable data | Services/Dealer Locator | No |
| Online help | "Fastest way to get answers: online help" | Medium | Yes | Convert into support/help CTA | Dealer/Contact | No |
| Calculator block | Repeated calculator | Medium | Yes | Link as related tool | Services | No |

### 17. Steel Distributors and Dealers

Current URL: `/steel-distributors-dealers`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Hero | "Construction excellence. Safely delivered." | High | Yes | Use as dealer/distributor landing page | Dealers page | No |
| Partnering copy | "Let's build excellence together" | High | Yes | Rewrite with clear dealer value prop | Dealers | No |
| Phone CTA | +919710411111 | High | Yes | Verify and make tappable | Contact/Dealers | No |
| Importance of high-quality TMT bars | Dealer/customer education | Medium | Yes | Merge with product proof | Dealers/Products | No |
| Product range | Product links | Medium | Yes | Use related products | Dealers | No |
| SGS/EPD certification | Trust proof | High | Yes | Certification strip | Dealers/Certifications | No |
| FAQ | TMT quality, construction safety, selection guidance | Medium | Yes | Keep | Dealer FAQ | No |
| Enquiry | Dealer/buyer enquiry | High | Yes | Standardize | Enquiry | No |

### 18. Become a Distributor

Current URL: `/become-a-steel-distributor`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Distributor hero | Become a distributor | High | Yes | Create dealer/distributor lead page | Become dealer | No |
| Join us | Distributor recruitment | High | Yes | Add value proposition and criteria | Become dealer | No |
| Get in touch | Distributor contact form/CTA | High | Yes | Route separately from buyer enquiry | Dealer enquiry | No |
| Manufacturing capabilities | Plant/process proof | High | Yes | Keep as trust support | Merge with Manufacturing/Dealer page | No |
| Induction furnace | Process detail | Medium | Yes | Use manufacturing proof cards | Manufacturing | No |
| Melting discharge | Process detail | Medium | Yes | Improve wording | Manufacturing | No |
| Ladle teeming practice | Process detail | Medium | Yes | Improve wording | Manufacturing | No |
| Continuous casting machine | Process detail | Medium | Yes | Keep | Manufacturing | No |
| Rolling mills | Process detail | Medium | Yes | Keep | Manufacturing | No |
| Happy customers | Testimonials | Medium | Yes | Verify and improve | Trust/proof | No |

### 19. Homeowners Guide

Current URL: `/tmt-steel-bar-guide-homeowners`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Hero | Dream home deserves quality you can trust | High | Yes | Create audience journey page | Homeowners page | No |
| Why CRS ARS TMT steel bars | Quality, durability, cost savings | High | Yes | Keep and simplify | Homeowners/Product | No |
| Home construction cost calculator CTA | Calculator prompt | High | Yes | Link to calculator | Services | No |
| Benefits of ARS Steel | Partner in home construction | High | Yes | Merge with audience proof cards | Homeowners | No |
| Integrated steel manufacturing | Manufacturing proof | High | Yes | Correct typo "Intergrated" | About/Manufacturing/Homeowners | No |
| Superior D quality products | Product quality proof | High | Yes | Keep | Quality/Product | No |
| SGS certified assurance | Certification proof | High | Yes | Keep | Certifications | No |
| Onsite testing/site assurance | Testing service | High | Yes | Keep | Steel Testing | No |
| Homes that last | Strong foundations, beams, pillars | High | Yes | Keep as homeowner education | Homeowners | No |
| Home building tips | Practical content | Medium | Yes | Improve and SEO-optimize | Homeowners/blog | No |
| Future-minded build | Sustainability/durability guidance | Medium | Yes | Fix typo "FUTUREIN"; improve | Homeowners/Green Steel | No |
| High quality materials provide returns | Cost/value argument | Medium | Yes | Improve proof | Homeowners | No |
| Trust the experts | Expert validation | Medium | Yes | Add engineer/dealer CTA | Homeowners | No |

### 20. Engineers and Architects Guide

Current URL: `/tmt-steel-bar-guide-engineers-architects`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Hero | True partner in pursuit of excellence | High | Yes | Create engineers/architects audience page | Engineers page | No |
| Superior strength / dependability | Technical positioning | High | Yes | Keep with stronger proof | Engineers/Product | No |
| Precision chemical composition | Technical proof | High | Yes | Keep | Product specs/Quality | No |
| Advanced TMT process | Manufacturing process | High | Yes | Keep | Manufacturing | No |
| Quenching process | Technical proof | High | Yes | Keep | Quality/Manufacturing | No |
| Precision ribs | Bonding with concrete | High | Yes | Keep | Product detail | No |
| Distinctive logo mold | Product identification/authenticity | Medium | Yes | Keep if still relevant | Product trust | No |
| Physical properties | Technical table | High | Yes | Migrate accurately | Product specs | No |
| Chemical properties | Technical table | High | Yes | Migrate accurately | Product specs | No |
| Project story | Bridge Phase 2 project | High | Yes | Move to Projects | No |
| Partner/join us CTA | Professional partnership CTA | Medium | Yes | Improve CTA | Contact/Enquiry | No |
| Happy customers | Testimonials | Medium | Yes | Verify | Trust/Projects | No |

### 21. Civil Contractors Guide

Current URL: `/tmt-steel-bar-guide-civil-contractors`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Hero | Superior quality for superior infrastructure | High | Yes | Create contractors audience page | Contractors page | No |
| Partnering for excellence | Contractor support copy | High | Yes | Keep and make practical | Contractors | No |
| Spectrometer analysis | Chemical composition/performance proof | High | Yes | Keep | Steel Testing/Quality | No |
| Call/free on-site testing | +91 971 041 1111 and testing CTA | High | Yes | Verify number; make CTA | Contact/Testing | No |
| Ductility test result | Test proof | High | Yes | Keep | Quality | No |
| Bendability test | Test proof | High | Yes | Keep | Quality | No |
| Martensite test | Test proof | High | Yes | Keep | Quality | No |
| Support services | On-site spectrometer testing and TMT calculation assistance | High | Yes | Strong service differentiator | Services | No |
| FAQ | Advantages, size/grade selection, on-site testing benefits | High | Yes | Keep | Contractors FAQ | No |
| Enquiry | Contractor lead capture | High | Yes | Standardize | Enquiry | No |

### 22. Road Projects

Current URL: `/road-projects-tmt-steel-bars`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Hero | Road projects with ARS 550D CRS | High | Yes | Create application page | Industries/Applications | No |
| Durability and safety | Road construction proof | High | Yes | Keep | Road projects page | No |
| Material requirements | Road project material requirements | High | Yes | Keep and structure | Road projects | No |
| Quality of material | TMT quality for road projects | High | Yes | Keep | Road projects/Quality | No |
| Applications | Road use cases | High | Yes | Keep | Road projects | No |
| Critical role of TMT bars | Education | Medium | Yes | Improve | Road projects | No |
| Durability/safety with ARS | Product benefit | High | Yes | Keep | Road projects | No |
| Seismic resistance | Performance benefit | Medium | Yes | Keep if technically accurate | Road projects | No |
| Corrosion resistance | CRS benefit | High | Yes | Keep | Road projects/CRS | No |
| Product range | Product links | Medium | Yes | Related products | No |
| SGS/EPD | Certification proof | High | Yes | Certification strip | No |
| FAQ | Road/metro TMT questions | Medium | Yes | Fix heading mismatch if needed | Road FAQ | No |
| Project enquiry | Lead capture | High | Yes | Standardize | Enquiry | No |

### 23. Bridges and Flyovers

Current URL: `/bridges-projects-tmt-steel-bars`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Hero | Stronger, longer-lasting bridges/flyovers | High | Yes | Create application page | Industries/Applications | No |
| Bridge construction design | Planning guidance | Medium | Yes | Improve clarity | Bridges page | No |
| Note on construction design | Technical note | Medium | Yes | Verify | Bridges page | No |
| Engineering excellence | Bridge planning | Medium | Yes | Improve | Bridges page | No |
| Flyover planning | Strategic flyover construction | Medium | Yes | Improve | Bridges page | No |
| Phone CTA | +91 93607 69749 | High | Yes | Verify and route to project sales | Project enquiry | No |
| Types of bridges | Bridge categories | Medium | Yes | Keep with visuals | Bridges page | No |
| Flyover functionalities | Educational content | Medium | Yes | Keep | Bridges page | No |
| Budget/cost savings | ARS value claim | Medium | Yes | Add proof/qualification | Bridges page | No |
| Spectrometer analysis | Quality proof | High | Yes | Link to Steel Testing | No |
| Product/certification blocks | Product range, SGS, EPD | High | Yes | Reusable blocks | No |
| FAQ | Bridge/flyover TMT questions | Medium | Yes | Keep | Bridges FAQ | No |
| Project enquiry | Lead capture | High | Yes | Standardize | Enquiry | No |

### 24. Institutional Projects

Current URL: `/institutions-projects-tmt-steel-bars`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Hero | Secure the future of institutional projects | High | Yes | Create application page | Industries/Applications | No |
| Importance of TMT bars | Institutional construction education | High | Yes | Keep | Institutions page | No |
| Phone CTA | +91 93607 69749 | High | Yes | Verify | Project enquiry | No |
| Applications | Schools, hospitals, government buildings | High | Yes | Keep and expand | Institutions page | No |
| Benefits | Cost savings and quality | High | Yes | Improve | Institutions page | No |
| Spectrometer analysis | Quality proof | High | Yes | Link to Testing | No |
| Product/certification blocks | Product range, SGS, EPD | High | Yes | Reusable blocks | No |
| FAQ | Institutional project TMT questions | Medium | Yes | Keep | Institutions FAQ | No |
| Project enquiry | Lead capture | High | Yes | Standardize | Enquiry | No |

### 25. Blog Archive

Current URL: `/blog.html`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Blog hero | Industry news, thought leadership, insightful data | Medium/High | Yes | Create modern blog/resource archive | Blog | No |
| Blog listing | Many SEO articles: CRS, green steel, TMT vs HYSD, home construction, column reinforcement, BBS, foundations, RCC, quality checks, imports, earthquake-resistant bars, buying guide, etc. | High for SEO | Yes | Rebuild archive with categories/search | Blog | No |
| CTAs | Get estimate, brochure, dealer, subscribe | High | Yes | Standardize | Blog cards/sidebar | No |
| FAQ | TMT bar FAQ around metro construction appears | Medium | Yes | Move to relevant post/page | Merge | No |
| Calculator block | Repeated calculator | Medium | Yes | Use as contextual CTA | Services | No |

Migration note:

- The blog archive contains many more posts than the four crawled individual posts. Before redesigning the blog, export the full WordPress post list.

### 26. Blog: Corrosion Resistance Steel

Current URL: `/blog/corrosion-resistance-steel.html`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Article hero | Everything about corrosion resistance steel | High | Yes | Keep as SEO article | Blog/CRS support | No |
| Composition/properties | CRS education | High | Yes | Improve technical accuracy/readability | Blog | No |
| Alloy examples | Stainless steel, copper-based, nickel/cobalt alloys | Medium | Yes | Keep if accurate | Blog | No |
| CRS TMT bars | Product-relevant content | High | Yes | Cross-link to ARS CRS 550D | Blog/Product | No |
| Applications | CRS applications | High | Yes | Cross-link to coastal/road/bridge pages | Blog/Industries | No |
| Advantages | CRS advantages | High | Yes | Keep | Blog | No |
| CTAs | Estimate, brochure, dealer, subscribe, related blogs, share | High | Yes | Standardize | Blog CTA system | No |

### 27. Blog: Effects of GST on Steel Industry

Current URL: `/blog/effects-of-gst-on-the-steel-industries-in-india.html`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Article | GST impact on steel industry | Medium for SEO | Yes | Update for current GST context before migration | Blog | No |
| Raw material tax laws | Iron/steel tax laws | Medium | Yes | Verify current rates | Blog | No |
| GST rates | GST rates on iron/steel products | Medium | Yes | Must update or mark date | Blog | No |
| Impact | Industry impact | Medium | Yes | Improve with current data | Blog | No |
| CTAs | Estimate, brochure, dealer, subscribe, related posts | Medium | Yes | Standardize | Blog CTA | No |

### 28. Blog: Different Types of TMT Steel Bars

Current URL: `/blog/exploring-the-different-types-of-tmt-steel-bars.html`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Article | 8mm, 10mm, 12mm, 16mm TMT steel bars | High for SEO | Yes | Cross-link to rod-size pages | Blog/Products | No |
| Understanding steel bars | Educational intro | Medium | Yes | Improve | Blog | No |
| 8mm/10mm/12mm/16mm sections | Size explanations | High | Yes | Merge with size guide links | Blog/Product size pages | No |
| CTAs | Estimate, brochure, dealer, subscribe | High | Yes | Standardize | Blog CTA | No |

### 29. Blog: Steel Round Bar

Current URL: `/blog/steel-round-bar.html`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Article | Steel round bar types, advantages, uses | Medium SEO | Yes | Keep if aligned to product strategy | Blog | No |
| Types | Mild steel, tool steel, stainless steel | Medium | Yes | Improve | Blog | No |
| Advantages | Strength, durability, malleability, ductility | Medium | Yes | Keep | Blog | No |
| Uses | Round bar uses | Medium | Yes | Keep | Blog | No |
| CTAs | Estimate, brochure, dealer, subscribe | Medium | Yes | Standardize | Blog CTA | No |

### 30. Video Gallery

Current URL: `/video`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Video gallery | RD TVC, Couple TVC, YouTube page link | Medium | Yes | Create media/resources page or use in proof sections | Media/Resources | No |
| YouTube CTA | Visit ARS YouTube page | Medium | Yes | Keep in footer/media | Media/Footer | No |
| Calculator block | Repeated calculator | Low | No | Use related service CTA only | Merge into footer | Yes as dominant page module |

### 31. Privacy Policy

Current URL: `/privacy-policy`

| Section | Current content | Business value | Keep | Improve | Merge | Remove |
|---|---|---:|---|---|---|---|
| Privacy policy | Legal/privacy content | High legal | Yes | Review with legal/client | Standalone legal page | No |
| Consent | Consent language | High legal | Yes | Verify | Legal | No |
| Information collected | Data collection policy | High legal | Yes | Update for new forms/tools | Legal | No |
| Calculator block | Repeated calculator | Low | No | Remove from legal page body | Footer only | Yes |

## Existing Content Missing From The Redesigned Website

The redesigned website currently does not include the following legacy content/assets:

1. Full ARS 550D product page content: features, safety/savings, physical properties, chemical properties, FAQs, enquiry.
2. Full ARS 550D CRS product page content: CRS features, benefits, specifications, physical/chemical properties, CRS FAQs.
3. Individual rod-size SEO pages for 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, and 32mm, including weights, use cases, FAQs, and price links.
4. Steel Price Today tool with product, state, city, rod sizes, bundle/rod/weight/total calculations, and booking details.
5. TMT Calculator tool with building type, category, floors, area, live price context, and calculation output.
6. Dealer locator / retailer content and dealer network experience.
7. Steel distributors/dealers page and Become a Distributor page.
8. Full quality page content: USP, quality control, ARS 550D features, lab/testing, bend/rebend, martensite/ring, tensile, quenching, billet manufacturing, spectro analysis, SGS.
9. Steel Testing page and free on-site spectrometer service request.
10. Certifications page with all certificates and awards: sustainability report, SGBC, NISST green steel taxonomy, PWD approval, TMT/Billet renewals, NHAI TES, ISO 9001/14001/45001, EPD, GRIHA, ABP award, ISPAT Udyog Ratan award.
11. Green Steel page content: zero-emission mission, green taxonomy, developer benefits, ESG benefits, environmental certifications, CO2/tree/vehicle equivalence claims.
12. Audience guide pages for Homeowners, Engineers/Architects, and Civil Contractors.
13. Application pages for Road Projects, Bridges/Flyovers, and Institutional Projects.
14. Core Team/leadership page content.
15. CSR page content covering health, infrastructure, and sports initiatives.
16. Careers page content: why work with ARS, benefits, culture, apply now.
17. Contact page details: corporate office, plant, phone numbers, email, contact form.
18. Full blog archive and article library.
19. Video gallery and YouTube links.
20. Privacy policy/legal content.
21. Downloadable PDF brochure and ARS 550D CRS leaflet.
22. Existing testimonials/happy customers.
23. Client proof/valuable clients from homepage.
24. Existing project story content, including Bridge Phase 2 reference.

## Recommended Migration Priorities

### Priority 1: Business-Critical Conversion Content

- Steel Price Today
- TMT Calculator
- Dealer Locator / Retailer
- Request Quote / Enquiry system
- Contact page with verified phone, email, office, and plant details

### Priority 2: Product and Technical Trust

- ARS 550D
- ARS 550D CRS
- Product comparison
- Physical and chemical properties
- Quality testing
- Certifications
- Steel testing / spectrometer service

### Priority 3: SEO and Buyer Education

- Rod-size pages: 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm
- Homeowners guide
- Engineers/Architects guide
- Civil Contractors guide
- Applications: roads, bridges/flyovers, institutions

### Priority 4: Brand and Corporate Trust

- About legacy content: group, vision, mission, MD's Desk
- Core team
- CSR
- Careers
- Green Steel
- Projects/clients/testimonials

### Priority 5: Resource Library

- Blog archive and posts
- Video gallery
- Brochure/leaflet downloads
- Privacy policy

## Content Cleanup Required Before Migration

- Verify all phone numbers:
  - `+91 9710411111`
  - `044-45606700`
  - `044-4350 0597`
  - `+91 93607 69749`
- Verify the official email address currently protected by Cloudflare on the old site.
- Confirm current office and plant addresses.
- Confirm all certificate files and award claims are current.
- Verify green steel CO2/tree/vehicle equivalence claims before publishing.
- Fix typos and inconsistencies:
  - "Intergrated" should be "Integrated"
  - "FUTUREIN" should be "FUTURE IN"
  - "Spectrometer Analysi" should be "Spectrometer Analysis"
  - "lasted New and Blogs" should be rewritten
  - FAQ content on the 12mm page appears to reference 8mm and should be corrected.
- Consolidate duplicate CRS product URLs into one canonical page.
- Decide whether all blog posts should be migrated or only the SEO/business-relevant set.
- Decide whether calculator blocks should remain on every page or become contextual CTAs.

## Recommended New Site Mapping

| Existing content | Recommended redesigned destination |
|---|---|
| Home proof, clients, product range, audience paths | Homepage |
| About group, vision, mission, MD desk | About |
| Core team | About or Leadership page |
| CSR | CSR page or About subpage |
| Careers | Careers page |
| ARS 550D | `/products/ars-550d` |
| ARS 550D CRS | `/products/ars-crs-550d` |
| Rod-size pages | `/products/sizes/8mm` etc. or `/steel-rod-sizes/8mm` |
| Quality page | `/quality-certifications` and `/manufacturing` |
| Steel testing | `/steel-testing` or Services/Testing |
| Certifications and awards | `/certifications` |
| Green Steel | `/green-steel` |
| Steel price | `/steel-price-today` |
| Calculator | `/tmt-calculator` |
| Dealer locator | `/dealer-locator` |
| Dealer/distributor pages | `/dealers` and `/become-a-dealer` |
| Homeowners guide | `/audiences/homeowners` or `/applications/residential-construction` |
| Engineers guide | `/audiences/engineers-architects` |
| Civil contractors guide | `/audiences/contractors` |
| Roads/bridges/institutions | `/industries` or `/applications/...` |
| Blogs | `/blogs` and `/blogs/[slug]` |
| Videos | `/resources/videos` or `/media/videos` |
| Contact | `/contact` |
| Enquiry/project forms | `/request-quote` |
| Privacy policy | `/privacy-policy` |

## Final Recommendation

Do not create additional pages until the migration plan is accepted.

The next build step should be to create a content-backed page plan for:

1. Products
2. Services
3. Certifications / Quality
4. Contact / Enquiry

Those pages carry the highest risk of business-content loss and the highest potential enquiry value.

