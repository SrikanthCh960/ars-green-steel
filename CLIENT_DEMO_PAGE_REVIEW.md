# Client Demo Page Review

Date: 2026-06-16

## Review Context

The current ARS Green Steel redesign is being prepared for client demo. The primary issue found was that several pages still exposed internal migration language such as old content, source mapping, restored sections, placeholder data, and client verification notes.

## What Works

- Homepage has the strongest visual system and should remain the benchmark for typography, spacing, blue-first brand hierarchy, CTA styling, and content rhythm.
- Global header, mega menu, and footer are reusable across current pages.
- Product, price, calculator, quote, dealer, contact, certification, and legacy URL routes are connected into a clear enquiry journey.
- Old ARS content has been preserved through the legacy page renderer, so historical URLs and content coverage remain available.

## Problems Identified

- Dynamic legacy pages exposed internal migration UI: source, old, sections, assets, status, restored page sections, and original source CTAs.
- Several static pages used implementation-facing phrases such as placeholder, awaiting ARS formula, client-approved files, verified before launch, and restored from old page.
- Missing source images were shown as visible cards, which made legacy pages look unfinished.
- Some image alt text contained internal asset labels such as source asset.

## Improvements Completed

- Updated the shared legacy page renderer so old URLs now read as public ARS information pages.
- Removed the internal proof metric strip from legacy pages.
- Replaced migration headings with client-safe labels such as Page highlights, More details, Media and downloads, and Contact ARS.
- Hid missing local image placeholders from public legacy pages.
- Removed the old-site comparison CTA from legacy pages.
- Rewrote public copy on About, Projects, Certifications, Manufacturing, Products, Product detail, Contact, Dealer Locator, TMT Calculator, Steel Price, Request Quote, and Become a Dealer pages.
- Replaced awaiting-rate and awaiting-formula copy with enquiry-first guidance.
- Cleaned public image alt text that referenced source assets.

## Pages Improved

- Home supporting shared content patterns
- About
- Products
- ARS 550D product detail
- ARS CRS 550D product detail
- Manufacturing
- Projects
- Certifications
- Contact
- Become a Dealer
- Dealer Locator
- Steel Price Today
- TMT Calculator
- Request Quote
- Dynamic legacy content pages through `LegacyPageRenderer`
- Blog legacy pages through `LegacyPageRenderer`

## Remaining Items For Later

- Replace temporary ARS images with final client-approved photography where needed.
- Add official dealer data when provided.
- Add live pricing logic, rate update rules, and disclaimers when approved.
- Add final calculator formulas and engineering assumptions when approved.
- Attach final certificates, PDFs, brochures, and downloadable files when supplied.
- Do a final page-by-page visual polish after final assets and business data are available.

## Priority Level

High. These changes remove visible demo risks and make the current site safer for client presentation while preserving the recovered ARS content and URL coverage.
