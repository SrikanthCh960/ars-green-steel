# Road Projects — QA report

## Scope

- Route retained: `/road-projects-tmt-steel-bars`
- Implementation: Road Projects only. Bridges & Flyovers and Institutional Projects remain on their existing legacy-rendered routes.
- No pnpm lockfile or workspace file was modified.

## Reusable project-page architecture

`src/components/project-type-page.tsx` defines the shared project-type page pattern for the three approved project pages. It accepts route-specific content for:

1. Breadcrumb and dark editorial hero with primary and secondary CTAs.
2. Engineering rationale.
3. Application cards.
4. Project-condition considerations.
5. Product and quality information links.
6. Accessible native-details FAQ list.
7. Shared contact CTA and footer.

Only the `roadProjectPage` configuration is currently instantiated. Future project pages must provide their own evidence-backed copy, product action, metadata, and approved imagery; they must not reuse Road copy or imagery.

## Content and link mapping

| Source intent | Road implementation |
| --- | --- |
| Road/highway/expressway TMT-bar purpose | Route-specific hero and engineering rationale |
| Bridges, culverts, retaining walls, highways | Three application cards |
| Seismic and corrosion considerations | Project-condition cards and source-backed FAQs |
| Product proof | `/products/ars-crs-550d` |
| Quality information | `/certifications` |
| Project enquiry | `/request-quote` |

The route now has page-specific production canonical, Open Graph, and Twitter metadata. Its social image uses the locally available CRS product image because no approved Road Projects image is available locally.

## Validation

- Targeted lint — passed: `src/app/[slug]/page.tsx`, `src/components/project-type-page.tsx`, and `src/components/site-header.tsx`.
- `pnpm --ignore-workspace qa:routes` — passed: 20 internal hrefs, 28 local assets, and 140 routes checked.
- `pnpm --ignore-workspace exec tsc --noEmit` — passed.
- `pnpm --ignore-workspace build` — passed: compiled, type-checked, and generated 143 static pages.

## Asset status

The approved legacy Road Projects assets are not present locally:

- `road-1.png`
- `road-2.png`
- `road-3.png`
- `road-4.png`

No replacement imagery was invented or substituted. The page uses an abstract industrial hero until approved road imagery is supplied and selected.

## Responsive and browser limitations

- Responsive behavior is implemented with mobile-first stacking, a scroll-safe breadcrumb, full-width touch-friendly CTAs, and one-column FAQ disclosure on smaller screens.
- The page has not received a live browser or physical-device pass in this task. Visual checks at common mobile, tablet, and desktop viewports remain required before final sign-off.

## Readiness status

**IMPLEMENTED — READY FOR CONTENT/ASSET REVIEW.** Automated validation is complete. Final visual sign-off depends on approved road imagery and live responsive/browser verification.
