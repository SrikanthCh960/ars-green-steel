# What Is Green Steel — Implementation Handoff

## Scope and source

- Approved source: preserved `blog/what-is-green-steel.html` record, supported by the legacy `/green-steel` and `/ars-green-steel` records.
- Final route: `/green-steel`.
- Route role: the primary non-brand educational explainer. It answers the general query; it must not make ARS-specific proof, product-performance, certification, or emissions claims.
- Existing public URL: retain `/green-steel` with no redirect.

## Final information architecture

| Route | Final role | Content that belongs there | Content that must not remain there |
| --- | --- | --- | --- |
| `/green-steel` | Educational explainer | Definition, production pathways, conventional-versus-lower-carbon context, embodied-carbon education, limitations, and general applications | ARS ratings, emissions figures, certification claims, product-performance claims, downloads, developer incentives, and ARS sales proof |
| `/ars-green-steel` | ARS product/proof destination | Only ARS-specific product information supported by published evidence, approved certificates, and approved downloads | General definition/process content duplicated from `/green-steel` |

The existing `/ars-green-steel#what-is-green-steel` section is removed and replaced with one contextual link to `/green-steel`. The general process, environmental-impact, and India-context copy currently duplicated on `/ars-green-steel` moves to `/green-steel`. ARS-specific proof remains on `/ars-green-steel` only when its evidence is available; unsupported metrics, ratings, eligibility, and certification language are omitted.

## Final page order and exact content

1. **Hero**
   - H1: `What is Green Steel?`
   - Body: `Green steel refers to steel produced using low-carbon or carbon-free production processes. Compared with methods that rely heavily on coal and coke, it uses cleaner technologies intended to minimise carbon emissions.`
   - Primary CTA: `Explore ARS Green Steel` → `/ars-green-steel`
   - Secondary CTA: `Contact ARS` → `/contact`

2. **What the term describes**
   - H2: `A different production pathway`
   - Copy: `The term describes how steel is made. It does not by itself establish a product specification, certification, or environmental result for a particular manufacturer or project.`

3. **How green steel can be made**
   - H2: `Production pathways used in green steel`
   - H3: `Hydrogen-based steelmaking`
   - Copy: `Green hydrogen can be used instead of coal to remove oxygen from iron ore. Water vapour is the principal by-product of that reduction step.`
   - H3: `Electric arc furnaces`
   - Copy: `Electric arc furnaces can melt recycled steel using electricity. The emissions profile depends on the electricity source and the wider production route.`
   - H3: `Carbon capture and storage`
   - Copy: `Carbon capture and storage is a method intended to capture carbon dioxide before release and store it. It is one of several approaches discussed in lower-carbon steelmaking.`

4. **Green steel and conventional steel**
   - H2: `How it differs from conventional steelmaking`
   - Copy: `The central difference is the production pathway and its potential emissions profile. Coal- and coke-intensive routes, renewable-powered electricity, recycled input, hydrogen, and carbon-capture approaches should not be treated as interchangeable claims.`
   - Present a qualitative comparison only: `Production pathway`, `Energy inputs`, `Material inputs`, and `Environmental documentation`. Do not publish a numeric-emissions comparison or performance equivalence claim.

5. **Why it matters**
   - H2: `Why lower-carbon steel is being considered`
   - Copy: `Steel is used across construction, transport, energy, and manufacturing. As project teams consider lower-carbon materials, the production route and product-specific environmental documentation become important parts of the decision.`

6. **Applications and limitations**
   - H2: `Where the conversation applies`
   - Copy: `Green-steel discussions commonly arise in construction and infrastructure, automotive manufacturing, renewable-energy equipment, and industrial manufacturing. Availability of renewable energy, hydrogen, suitable scrap, capital investment, and production scale remain practical considerations.`

7. **Embodied Carbon**
   - Insert the dedicated section specified in [Embodied Carbon handoff](../embodied-carbon/implementation-handoff.md) at `#embodied-carbon`.

8. **ARS route-out**
   - H2: `Looking for ARS-specific information?`
   - Copy: `Visit ARS Green Steel for product-specific information and any currently published proof documents.`
   - CTA: `Explore ARS Green Steel` → `/ars-green-steel`

## Metadata and SEO

- Title: `What Is Green Steel? Meaning, Process & Benefits | ARS Green Steel`
- Description: `Learn what green steel means, how lower-carbon steel production pathways work, and what project teams should consider when reviewing environmental information.`
- Canonical: `/green-steel`
- Open Graph/Twitter: reuse the title and description; use an approved generic green-steel image only when available, otherwise the site default image.
- Robots: inherit `createPageMetadata` preview-safe robots behaviour.
- Sitemap: retain exactly one `/green-steel` URL. Do not add a second explainer URL.
- No Product, LocalBusiness, certification, or quantified environmental structured data.

## Internal links

- Primary: `/ars-green-steel`
- Supporting: `/manufacturing`, `/certifications`, `/contact`
- Do not link to a missing report, brochure, certificate, or rating.

## Asset and content gaps

- Source-listed green-steel banner and supporting imagery are not available locally; use existing approved generic imagery or a neutral surface until the design/asset phase.
- No source-supported emissions number, comparison, certification, rating, or product-performance figure is included in this handoff.

## Implementation notes

- Use one H1 and H2/H3 hierarchy exactly as listed.
- Keep the page educational and avoid presenting industry-level statements as ARS proof.
- Do not modify the shared canonical/robots architecture.

READY FOR DEVELOPMENT
