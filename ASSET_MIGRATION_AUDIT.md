# ARS Green Steel Asset Migration Audit

## Purpose

This audit maps the visual and downloadable assets from the existing ARS website into the redesign plan. The goal is to preserve business proof, product evidence, leadership credibility, certifications, and original media while the new website is completed.

This is not a placeholder-generation exercise. For people, founder, team, management, plant, manufacturing, product, certification, award, logo, brochure, and downloadable assets, the redesign should use existing ARS source assets until the client provides approved replacements.

## Audit Rules

- Use original ARS website assets as the temporary asset source.
- Do not generate placeholder people.
- Do not invent founder photos.
- Do not invent team or management photos.
- Mark original assets as `Missing` when they exist on the old website but are not present in the redesign.
- Mark assets as `Available locally` when downloaded into `public/ars-assets` but not yet used in a page.
- Mark assets as `Migrated and used` only when present in the redesign UI.
- Downloadable documents should remain tied to the relevant page and section, not placed only in a generic resource area.

## Current Local Asset Library

| Local Asset | Original Location | Asset Type | Current Migration Status | Recommended Destination Page |
|---|---|---|---|---|
| `/public/ars-green-steel.svg` | User-provided ARS logo | Logo | Migrated and used | Global header |
| `/public/ars-green-steel-light.svg` | User-provided ARS light logo | Logo | Available locally | Dark or media-heavy footer/hero variants if needed |
| `/public/videos/ars-intro.mp4` | User-provided ARS video | Background video | Migrated and used | Homepage hero |
| `/public/ars-assets/ARSHOME1.jpg` | `home.html` | Homepage / plant / industrial photograph | Available locally | Homepage media library, Projects, Manufacturing |
| `/public/ars-assets/ARSHOME2.jpg` | `home.html` | Homepage / plant / industrial photograph | Available locally | Homepage media library, Manufacturing |
| `/public/ars-assets/ARSHOME4.jpg` | `home.html` | Homepage / plant / industrial photograph | Migrated and used in mega menu | Projects, Manufacturing, Homepage proof |
| `/public/ars-assets/right-about-us.png-compress.webp` | About / company content | Company / manufacturing photograph | Migrated and used in mega menu | About, Manufacturing |
| `/public/ars-assets/TMT-Bars.png` | Product and application pages | Product photograph | Available locally | Products, ARS 550D |
| `/public/ars-assets/CRS.png` | Product and application pages | Product photograph | Available locally | Products, ARS CRS 550D |
| `/public/ars-assets/products-all.png` | Product and rod-size pages | Product group photograph | Migrated and used in mega menu | Products listing |
| `/public/ars-assets/our-quality-1.png` | Quality page | Quality / testing photograph | Migrated and used in mega menu | Certifications, Quality testing |
| `/public/ars-assets/home-owner-banner-1.png` | Homeowner guide page | Audience / residential image | Migrated and used in mega menu | Industries, Homeowner journey |
| `/public/ars-assets/Contact_banner.png` | Contact page | Contact / facility image | Migrated and used in mega menu | Contact |
| `/public/ars-assets/awards-certificates-img2.png` | Certification page | Award / certificate image | Migrated and used in mega menu | Certifications |
| `/public/ars-assets/awards-certificates-img3.png` | Certification page | Award / certificate image | Available locally | Certifications |
| `/public/ars-assets/Sumit-Bhatia-1.jpeg` | Our Team page | Management photo | Available locally, not used | Future Leadership / Team section |
| `/public/ars-assets/Madhana-Gopal-1.jpeg` | Our Team page | Management photo | Available locally, not used | Future Leadership / Team section |
| `/public/ars-assets/Chandra-Mouli-1.jpeg` | Our Team page | Management photo | Available locally, not used | Future Leadership / Team section |

## Page and Section Asset Inventory

| Original Page | Section Name | Content / Business Role | Images and Assets Found | Asset Type | Current Migration Status | Recommended Destination Page |
|---|---|---|---|---|---|---|
| Home | Hero / rotating banners | Brand introduction, green steel positioning, product awareness | `ARSHOME1.jpg`, `ARSHOME2.jpg`, `ARSHOME3.jpg`, `ARSHOME4.jpg`, desktop/mobile web banners, green steel banners | Plant / manufacturing / homepage campaign images | Partially migrated: video is used; `ARSHOME1`, `ARSHOME2`, `ARSHOME4` available locally; other banners missing | Home, Projects, Manufacturing, Green Steel |
| Home | Product range / 550D / CRS | Introduces product families and product proof | `TMT-Bars.png`, `CRS.png`, `products-all.png`, product brochure links | Product photographs, brochure downloads | Partially migrated: three product images available locally; brochure PDFs missing | Products, Product detail pages, Mega Menu |
| Home | Trust logos / certification proof | Provides fast visual proof for technical buyers | `EPD-1.png`, `Leed.png`, `griha.png`, `Segment_SGS-new.png` | Certification logos / proof graphics | Missing | Home proof strip, Certifications |
| Home | Client / project proof | Shows customer trust and brand adoption | `akshaya.png`, `baashyaam.png`, `foxconn.png`, `vgn.png`, `rccl.png`, `noah.png`, `rohaan.png`, `sathyamoorthy.png`, `steelax.png` | Client / partner logos | Missing | Projects, Home proof section |
| Home | Downloads | Supports technical validation and sales enablement | `ARS_Brochure.pdf`, `ARS_-550DCRS_Leaflets.pdf` | Brochures / downloadable PDFs | Missing | Products, Certifications, Footer resources |
| About | Company introduction | Explains ARS legacy and company credibility | `banner_holder_copy_2.jpg`, `right-about-us.png-compress.webp`, ARS logo | Company / plant imagery, logo | Partially migrated: `right-about-us` available and used in mega menu; banner missing | About, Manufacturing |
| About | Legacy / manufacturing strength | Supports scale, history, and trust | `bar-1.png`, repeated industrial rectangle assets | Plant / process photographs | Missing | About, Manufacturing |
| Our Team | Leadership / management | Gives human credibility and accountability | `Sumit-Bhatia-1.jpeg`, `Madhana-Gopal-1.jpeg`, `Chandra-Mouli-1.jpeg`, `Bala.jpg-1.jpeg`, `Jayaprakash.jpg-1.jpeg`, `Siva.jpeg` | Management / team photos | Partially available locally: first three downloaded; remaining three missing; not used in redesign | Future About leadership section or Team page |
| Our Team | Founder photos | Founder-specific proof if present | No dedicated founder asset identified in extracted source assets | Founder photo | Not found in extracted source; do not invent | Add only if client provides or original site source is verified |
| Products Landing | Product overview | Helps buyers compare grades and product use cases | `TMT-Bars.png`, `CRS.png`, `products-all.png`, `product-section-left.png`, `Product-Solutions-img2.png`, `Product-Solutions-img3.png`, `Product-Solutions-img4.png` | Product / solution photographs | Partially available locally: `TMT-Bars`, `CRS`, `products-all`; others missing | Products |
| ARS 550D | Product detail | Explains grade, strength, ductility, and use cases | `banner_holder_copy_2-1.jpg`, product support graphics, product brochures | Product / industrial photograph, brochure | Missing except generic product images | `/products/ars-550d` |
| ARS CRS 550D | Product detail | Explains corrosion resistance and coastal/high-risk use cases | `ARS_CRS_550D.webp`, `Banner-1.png`, `crs-benefit-image.webp`, `crs-feature-image.webp`, `CRS-GRADES.jpeg` | Product photographs / feature graphics | Missing except `CRS.png` | `/products/ars-crs-550d` |
| Rod Size Pages | 8mm to 32mm size pages | SEO and buyer clarity for rod sizes | `Product_8mm_banner-1.png`, `Product_10mm_banner-1.png`, `Product_12mm_banner-1.png`, `Product_16mm_banner-1.png`, `Product_20mm_banner-1.png`, `Product_25mm_banner-1.png`, `Product_32mm_banner-1.png`, size icons | Product banner images, size icons | Missing | Products size section, possible future size detail pages |
| TMT Calculator | Buying tool | Helps estimate steel requirement | `but-tmt-new-1.png`, calculator/support graphics | Tool graphic / product visual | Missing | TMT Calculator |
| Steel Price Today | Buying tool | Supports price-led enquiry generation | `but-tmt-new-1.png`, ARS logo | Tool graphic / product visual | Missing | Steel Price Today |
| Dealer / Distributor | Network and dealer acquisition | Supports local supply and distributor enquiries | `product-section-left.png`, product images, brochure links | Product / dealer support visuals | Missing except generic product images | Dealer Locator, Become a Dealer |
| Our Quality | Testing and quality proof | Builds engineer and contractor confidence | `our-quality-1.png`, `video-1-1-1.png`, `video-2-2-1.png`, `video-3-3-1.png`, `leed-energy-logo.jpg` | Quality lab / testing / certification assets | Partially available locally: `our-quality-1`; video thumbnails and LEED logo missing | Certifications, Manufacturing, Quality testing |
| Steel Testing | Testing process | Technical validation for product quality | `Product-Solutions-img2.png`, `Product-Solutions-img3.png`, `Product-Solutions-img4.png` | Testing / manufacturing photographs | Missing | Certifications, Quality testing section |
| Certifications | Awards and compliance | Core trust proof for technical buyers | `awards-certificates-img2.png`, `awards-certificates-img3.png`, `awards-certificates-img7.png`, `awards-certificates-img9.png`, certificate preview JPG/PNG files | Award images / certificate images | Partially available locally: `img2`, `img3`; others missing | Certifications |
| Certifications | Downloadable certificates | Proof for engineers, consultants, contractors, institutions | `ISO-9001.2025-February-2024-2.pdf`, `ISO-14001.2015-February-2024.pdf`, `ISO-45001-1-1.pdf`, `ARS-STEELS_EPD-CERTIFICATE-2.pdf`, `NHAI-Source-Approval-Letter.pdf`, `PWD-Approval-2025.pdf`, `1786-renewal-certificate-1.pdf`, `TMT-bar-renewal-certificate-1.pdf`, `SGBP-6210...pdf`, `Green-Steel-Certificate-2027-1.pdf`, `Sustainability-report-Final-13.02.pdf`, `GRIHA-Product-Catalogue...pdf` | Downloadable PDFs / certificates | Missing | Certifications, Green Steel, footer resources |
| Green Steel | Sustainability narrative | Supports green positioning and specifier trust | `Green-Steel-Manufacture.jpeg`, `Green-Steel-Sustainability.jpeg`, `Green-Steel-1-1200x629.jpeg`, `ASSET-9.png`, `Compound.png`, environmental impact graphics, sustainability report | Sustainability / manufacturing / certification visuals and PDF | Missing | Green Steel |
| Homeowner Guide | Audience journey | Helps home builders understand product, price, quality, dealer path | `home-owner-banner-1.png`, `home-owner-img2.png`, `home-owner-img3.png`, `home-owner-img4.png`, `home-owner-img5.png`, `homeowner-1.png` | Residential / audience images | Partially available locally: banner image; rest missing | Industries, Homeowner journey |
| Engineers / Architects Guide | Audience journey | Gives technical buyers validation and specification support | Product images, `product-section-left.png`, brochure links | Product / technical visuals | Missing except generic product images | Industries, Engineer journey |
| Civil Contractors Guide | Audience journey | Supports site practicality, supply, and price enquiry | `banner.jpg`, product images, brochure links | Contractor / site visual | Missing | Industries, Contractor journey |
| Road Projects | Infrastructure application | Shows road/infrastructure usage | `road-1.png`, `road-2.png`, `road-3.png`, `road-4.png`, product images | Project / infrastructure images | Missing | Industries, Projects |
| Bridges Projects | Infrastructure application | Shows structural/infrastructure usage | Product images, brochure links | Product / project images | Missing except generic product images | Industries, Projects |
| Institutions Projects | Institutional application | Supports institutional and public project trust | `Applications_Institutions-banner.png`, `Applications-Institutions-1.png`, `Applications-Institutions-2.png`, `Applications-Institutions-3.png` | Institutional project images | Missing | Industries, Projects |
| Contact | Contact and sales enquiry | Supports conversion and offline trust | `Contact_banner.png`, ARS logo | Contact / office or facility image | Available locally and used in mega menu; not yet mapped as main Contact hero media | Contact |
| Careers | Recruitment | Employer brand and hiring content | `career-banner.png`, `career-mainimg.png` | Careers imagery | Missing | Future Careers page, if in scope |
| CSR | Social responsibility | Corporate credibility | No unique CSR assets identified in filtered extraction beyond logo | CSR images / reports | Pending verification | Future CSR page, if in scope |
| Blog / Resources | SEO and education | Long-tail search traffic and buying education | Blog thumbnails including `Green-Steel-vs-Traditional-Steel-1-1200x776.jpeg`, `TMT-Bar-Buying-Guide.jpeg`, `Earthquake-Resistant-TMT-Bars.jpeg`, `Corrosion-Resistant-TMT-Bars.jpeg`, `HYSD-VS-TMT.jpeg`, `Concrete-Bleeding-.jpeg` | Blog / article thumbnails | Missing | Future Resources / Blog |
| Video / Media | Media gallery | Brand and plant/product storytelling | `Media_Banner-1.jpg`, solution video thumbnails | Media banner / video thumbnails | Missing | Future Media or Manufacturing page |
| Global Header / Footer | Brand identification | Logo and primary navigation identity | `ARS-GREEN-STEEL-Logo.png`, `logo-2.png`, favicon files, user-provided SVG logos | Logos / favicon | Partially migrated: user-provided SVG logo used; original PNG logo not needed unless SVG replacement fails | Global header/footer |

## Missing Asset Summary

### High Priority Missing

| Missing Asset Group | Business Importance | Recommended Destination |
|---|---|---|
| Certificate PDFs and certificate preview images | Critical for engineers, contractors, institutions, and client approval | Certifications, Products, Green Steel |
| Product-specific images for ARS 550D and CRS 550D | Needed for product credibility and non-generic page design | Product detail pages |
| Rod-size banner images and icons | Supports SEO and buyer clarity for 8mm to 32mm searches | Products size section |
| Brochures and product leaflets | Needed for technical download CTAs and sales handoff | Products, Certifications, Footer |
| Plant / manufacturing photographs beyond homepage hero media | Needed to avoid generic industrial visuals and strengthen trust | About, Manufacturing, Projects |
| Client / project logos | Needed for social proof and project buyer confidence | Home, Projects |

### Medium Priority Missing

| Missing Asset Group | Business Importance | Recommended Destination |
|---|---|---|
| Remaining team / management photos | Builds leadership trust if the client approves showing people | About leadership or Team page |
| Green steel sustainability imagery and reports | Supports environmental positioning and institutional procurement | Green Steel |
| Audience journey images for homeowners, engineers, contractors, institutions, and roads | Improves relevance by user type | Industries |
| Quality testing video thumbnails | Strengthens testing credibility | Certifications, Manufacturing |
| Award images beyond the two downloaded files | Supports proof depth | Certifications |

### Low Priority Missing

| Missing Asset Group | Business Importance | Recommended Destination |
|---|---|---|
| Blog thumbnails | Useful for future SEO content, not required for core approval | Blog / Resources |
| Careers imagery | Useful only if Careers is in the current scope | Careers |
| CSR-specific visual assets | Useful if CSR page becomes part of sitemap | CSR |
| Theme icons and small decorative assets | Can be replaced by the redesign icon system where business meaning is low | Components / icon system |

## People Photo Handling

The original website includes management/team photos on the Our Team page:

- `Sumit-Bhatia-1.jpeg`
- `Madhana-Gopal-1.jpeg`
- `Chandra-Mouli-1.jpeg`
- `Bala.jpg-1.jpeg`
- `Jayaprakash.jpg-1.jpeg`
- `Siva.jpeg`

Three of these are available locally. They are not currently used in the redesign. Do not create replacement people images. Do not use generic people photography. Add a leadership/team section only when the full approved set is available or when the client confirms which members should appear.

No dedicated founder photo was identified in the extracted original asset list. If founder imagery is required, it must come from the original website source files or the client.

## Current Implementation Update

The global mega menu now uses real ARS source assets for its visual cards:

- Products: `products-all.png`
- Services: `our-quality-1.png`
- Industries: `home-owner-banner-1.png`
- Projects: `ARSHOME4.jpg`
- Certifications: `awards-certificates-img2.png`
- About: `right-about-us.png-compress.webp`
- Contact: `Contact_banner.png`

These are temporary production-safe assets from the original website and can be replaced later with approved final photography.

## Recommended Next Asset Actions

1. Download and organize the high-priority missing certificate PDFs, certificate previews, brochures, and product leaflets.
2. Replace generic or abstract image blocks on product, certification, project, and contact pages with matching ARS source assets.
3. Build a controlled `/public/ars-assets` naming convention by category: `products`, `certifications`, `team`, `projects`, `manufacturing`, `downloads`, `logos`.
4. Add downloadable PDF CTAs only after the actual files are present locally and linked to the correct page.
5. Confirm with the client whether leadership/team photos should be included before using management portraits in the About page.
6. Keep a strict rule that people visuals must be original ARS assets or client-approved replacements.
