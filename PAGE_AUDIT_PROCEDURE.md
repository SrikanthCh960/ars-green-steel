# ARS Page Design Audit Procedure

Use this procedure for every page-level design audit and implementation. Complete one page at a time unless the user explicitly approves a wider scope.

## Non-negotiable rules

### SEO-team copy is locked

- Preserve all visible copy supplied by the SEO team exactly as provided.
- Do not rewrite, shorten, expand, correct, reorder, paraphrase, or remove headings, paragraphs, labels, captions, or CTA text.
- Do not invent supporting headlines, kickers, card labels, captions, descriptions, proof statements, statistics, or CTA wording to complete a design.
- Do not change spelling, punctuation, capitalisation, keywords, or terminology.
- Do not move copy between sections when that changes its intended context or reading order.
- If copy creates a factual, legal, accessibility, usability, or layout concern, record the concern and request approval. Do not silently edit it.
- Copy may change only when the user explicitly approves the exact change or supplies replacement copy.
- Non-visible accessibility and technical fields, including image alt text, metadata, schema, and ARIA labels, may be added or corrected when they do not alter approved visible copy.

### Approved content source hierarchy

Use the highest available source in this order:

1. The latest page-specific document or replacement copy supplied by the user.
2. A page-specific SEO/content migration handoff explicitly marked approved.
3. An approved content registry or brochure supplied for the page.
4. The existing redesigned page, only for content not superseded by a higher source.
5. The original `arsgroup.in` page as historical reference, not automatic copy authority.

When a page-specific document is supplied:

- treat it as the visible-copy source of truth for that page;
- preserve its section order unless the user approves a structural change;
- distinguish publishing copy from author instructions such as “use an image here” or “document should zoom”;
- do not restore legacy-page copy that is absent from the supplied document;
- do not retain redesigned-page copy that conflicts with or has been superseded by the document;
- record unclear, incomplete, contradictory, or unverifiable content instead of resolving it by invention; and
- cite or name the exact source document in the audit report.

### Visual-first scope

The primary work is premium page design and visual storytelling:

- information hierarchy and section composition;
- layout, grid, alignment, spacing, typography, colour, and contrast;
- authentic ARS photography and video;
- product, manufacturing, infrastructure-project, people, leadership, and brand imagery;
- purposeful motion and interaction;
- responsive design across desktop, tablet, and mobile;
- accessibility, performance, and visual consistency with the approved homepage.

Visuals must support the existing copy rather than replace, contradict, or introduce unsupported claims.

### Repository safety

- Read `PROJECT_HANDOFF.md` completely before page work.
- Inspect the branch, HEAD, and Git status before making changes.
- Preserve unrelated and uncommitted user files.
- Never use broad staging such as `git add .`.
- Do not modify, stage, or commit `pnpm-lock.yaml` or `pnpm-workspace.yaml`.
- Do not commit, push, deploy, or promote a deployment without explicit user approval.

## Phase 1: Confirm the page and objective

Before implementation:

1. Confirm the single page or route being audited.
2. Identify the page's purpose, audience, and primary user action.
3. Confirm the approved implementation scope.
4. Record any known restrictions, dependencies, or blocked content.
5. Confirm that visible copy is locked.

## Phase 2: Collect and compare sources

Review the following where relevant:

1. The current redesigned page.
2. The corresponding original page on `https://arsgroup.in`.
3. Applicable migration handoffs and QA reports.
4. SEO-team content and approved content registries.
5. ARS brochures and other official brand material.
6. The user-supplied image folder.
7. Existing local images, videos, icons, and reusable components.
8. Approved homepage design patterns and the project design system.

Do not download or reuse an asset unless it is relevant, sufficiently high quality, brand-appropriate, and safe to use.

### Supplied document review

When the approved source is a DOCX, PDF, spreadsheet, slide deck, or similar file:

1. Render and visually inspect every page or sheet where practical.
2. Extract headings, body copy, tables, lists, document instructions, links, and referenced assets.
3. Record the page or section containing each approved content block.
4. Separate visible website copy from implementation notes.
5. Check whether images or downloadable files are embedded, linked, named, or still missing.
6. Do not edit the source document unless the user explicitly requests document changes.

### Content parity matrix

Before recommendations, compare every approved section against the implementation:

| Source section | Current page location | Status | Required action |
|---|---|---|---|
| [Approved section] | [Current section or missing] | Exact / Partial / Missing / Conflicting / Unsupported extra | Keep / Restore / Add / Escalate |

The audit is incomplete until:

- every approved source section is accounted for;
- every current visible section is traced to an approved source or flagged;
- missing documents, images, links, CTAs, FAQs, forms, and interaction instructions are recorded; and
- copy differences are reported without silently fixing them.

## Phase 3: Audit

### Content completeness

- Confirm all approved copy appears on the page.
- Check that no approved section, fact, link, download, or CTA is accidentally missing.
- Identify duplication or confusing placement without editing the copy.
- Flag unsupported, conflicting, or outdated claims for the user or SEO team.

### Information architecture and UX

- Evaluate section order and reading flow.
- Check whether the primary action is clear.
- Review navigation into and out of the page.
- Check CTA destinations, downloads, forms, and next-step journeys.
- Identify unnecessary interaction, repetition, or cognitive load.

Copy may be visually regrouped only when its wording, meaning, association, and intended reading order remain unchanged.

### UI and visual design

- Review hierarchy, layout, grids, alignment, spacing, and section separation.
- Review typography scale, line length, readability, and contrast.
- Review cards, buttons, icons, dividers, backgrounds, and decorative elements.
- Ensure the page feels premium, credible, industrial, and recognisably ARS.
- Maintain consistency without making every page visually identical.
- Avoid generic layouts, repetitive card grids, decorative clutter, and excessive animation.

### Photography and video

- Prioritise authentic ARS facilities, products, manufacturing, projects, people, and approved campaign material.
- Check relevance, authenticity, resolution, crop, focal point, colour treatment, and mobile behaviour.
- Record pixel dimensions and reject visibly insufficient hero or feature imagery.
- Compare user-supplied assets with existing local assets before recommending a replacement.
- Treat filenames and folder placement as clues, not proof of authenticity or intended use.
- Avoid generic stock imagery, weak duplicates, misleading scenes, and visibly artificial imagery.
- Confirm that video adds meaningful proof or understanding.
- Give video an accessible title, controls where appropriate, poster image, captions or transcript when required, and reduced-motion-safe behaviour.
- Optimise image and video delivery to protect performance.
- Add accurate alt text; use empty alt text for purely decorative imagery.

### Responsive behaviour

Audit at minimum:

- large desktop;
- standard laptop;
- tablet portrait and landscape where practical;
- common mobile widths.

Check wrapping, cropping, overflow, spacing, touch targets, sticky elements, tables, carousels, video, and CTA placement.

### Accessibility and interaction

- Preserve a logical heading hierarchy and a single appropriate H1.
- Check semantic landmarks and reading order.
- Check keyboard navigation, visible focus states, skip behaviour, and modal or carousel controls.
- Check colour contrast and non-colour status indicators.
- Check touch-target size.
- Respect reduced-motion preferences.
- Ensure interactions remain understandable without hover.

### Technical quality and SEO safety

- Check internal and external links, duplicate destinations, downloads, and missing assets.
- Check page title, meta description, canonical, Open Graph, Twitter metadata, robots behaviour, and structured data.
- Check redirects and preservation of existing public URLs.
- Check image dimensions, formats, lazy loading, priority loading, and layout shift.
- Check performance risks, console errors, hydration issues, and unnecessary client-side code.
- Technical SEO improvements must not alter approved visible copy.

## Phase 4: Present recommendations

Before implementation, present the audit using this UI/UX review structure:

1. What works
2. Problems identified
3. UX improvements
4. Visual improvements
5. Accessibility improvements
6. Conversion improvements
7. Priority level: Critical / High / Medium / Low

Within those sections, classify recommendations as:

### Keep

Elements that already work and should remain.

### Improve

Existing elements that need visual, usability, accessibility, responsive, or technical refinement.

### Remove or combine

Visual components or duplicated treatments that may be removed or combined without deleting or rewriting locked copy. Obtain approval before doing so.

### Add

Recommended imagery, video, interaction, proof, accessibility support, or technical enhancement.

Separate recommendations into:

- Essential fixes
- Recommended improvements
- Optional enhancements

Wait for user approval before implementation.

The audit response must also state:

- which content source controls the page;
- whether visible copy is locked;
- whether any unsupported current copy was found;
- whether required assets or documents are still missing; and
- that no implementation files were changed during the audit.

## Phase 5: Implement the approved scope

- Change only the approved page and necessary shared components.
- Preserve locked visible copy exactly.
- Implement only recommendations the user approved.
- Do not add visible copy simply because a layout has an empty label, heading, caption, or card field.
- Use approved source wording for all new visible sections.
- Recheck the parity matrix after implementation so restored content does not introduce omissions or duplicates.
- Reuse established components and tokens when suitable.
- Read `COMPONENT_INVENTORY.md` before creating or extracting a reusable component.
- Update `COMPONENT_INVENTORY.md` only when a reusable component is created or materially changed.
- Keep motion purposeful and reduced-motion safe.
- Optimise new imagery and video.
- Preserve URLs, metadata intent, and migration requirements.
- Do not opportunistically fix unrelated code or files.

## Phase 6: Local verification

Verify:

- desktop, tablet, and mobile layouts;
- navigation and all page links;
- keyboard-only interaction;
- focus states;
- reduced-motion behaviour;
- image and video loading;
- major browser behaviour where available;
- no obvious console or hydration errors.

Run the relevant project checks, normally:

```bash
git diff --check
npm run build
```

First inspect `package.json`, lockfiles, and repository instructions to determine the actual package manager and available scripts. Do not assume pnpm merely because untracked pnpm files exist. When scripts are available and configured, also run:

```bash
npm run lint
npm run qa:routes
npx tsc --noEmit
git diff --check
```

Use the equivalent approved command for the repository's real package manager. Never generate, repair, or modify `pnpm-lock.yaml` or `pnpm-workspace.yaml` as part of page verification.

Use targeted lint or additional migration audits when required by `PROJECT_HANDOFF.md`. Document unrelated pre-existing failures rather than changing them.

Provide the user with a local review URL and summarise what to inspect.

### Browser verification

For the implemented route, verify:

- the page has meaningful rendered content and the expected H1;
- there is no framework error overlay;
- there is no unintended horizontal overflow;
- all approved headings and sections render;
- modals, accordions, carousels, downloads, forms, and CTAs behave correctly;
- modal focus, close, cancel/Escape, and focus restoration work where applicable; and
- the page remains usable at the required responsive widths.

If automated browser tooling is unavailable, perform the strongest available local verification and clearly record the limitation.

## Phase 7: Approval and publishing

After local approval:

1. Review Git status and the exact diff.
2. Stage only relevant, reviewed files.
3. Confirm neither pnpm file is staged.
4. Commit with a page-specific message only after approval.
5. Push only after approval.
6. Verify the correct Vercel preview, branch, and commit.
7. Promote or publish only after explicit approval.
8. Confirm the deployment reaches `READY`.
9. Verify the public page route returns HTTP 200.
10. Open or inspect the live route and confirm the expected page is present.
11. Report the branch, commit, deployment target, live URL, and verification result.

## Page audit report template

```md
# [Page name] Audit

## Scope
- Route:
- Audience:
- Primary objective:
- Primary CTA:
- Copy status: Locked / Explicit change approved

## Sources reviewed
- Current redesigned page:
- Original ARS page:
- Approved content source of truth:
- Source document pages/sections:
- SEO or migration handoff:
- Brochure or official reference:
- Supplied image folder:
- Existing reusable assets/components:

## Content parity
| Source section | Current page location | Status | Required action |
|---|---|---|---|
|  |  |  |  |

## Keep

## Improve

## Remove or combine

## Add

## Visual plan
- Hero:
- Section composition:
- Photography:
- Video:
- Responsive approach:
- Motion:

## Accessibility findings

## Technical and SEO findings

## Copy concerns to escalate
- None / [Concern only—no copy changed]

## Missing inputs
- None / [Required image, report, certificate, link, approval, or content]

## Approved implementation scope

## Files changed

## Verification
- [ ] Visible copy matches approved source exactly
- [ ] Every approved source section is accounted for
- [ ] Unsupported current copy is removed or explicitly approved
- [ ] No unapproved visible copy was introduced
- [ ] Source instructions are implemented but not published as page copy
- [ ] Desktop reviewed
- [ ] Tablet reviewed
- [ ] Mobile reviewed
- [ ] Keyboard navigation reviewed
- [ ] Reduced motion reviewed
- [ ] Links and downloads reviewed
- [ ] Images and videos optimised
- [ ] Accessibility reviewed
- [ ] Metadata and structured data reviewed
- [ ] Lint passed or exceptions documented
- [ ] Type check passed or exceptions documented
- [ ] Route QA passed or exceptions documented
- [ ] Production build passed or exceptions documented
- [ ] Diff check passed
- [ ] Browser has meaningful content and no framework error overlay
- [ ] No unintended horizontal overflow
- [ ] Interactive components verified
- [ ] Local review completed
- [ ] User approved publishing
- [ ] Deployment is READY and live route returns HTTP 200

## Review URL
- Local:
- Preview:
- Live:
```

## Definition of complete

A page is complete only when:

- the approved visible copy is preserved exactly;
- the supplied page-specific document has been reconciled section by section;
- no unsupported visible copy has been introduced or retained without approval;
- the approved design and visual scope is implemented;
- imagery and video are relevant, authentic, responsive, accessible, and optimised;
- desktop, tablet, mobile, keyboard, and reduced-motion states have been reviewed;
- links, actions, metadata, structured data, and URL behaviour are correct;
- required checks pass or documented pre-existing exceptions are accepted;
- the user reviews and approves the result;
- only relevant files are committed; and
- publishing is explicitly approved and the resulting deployment is verified.
