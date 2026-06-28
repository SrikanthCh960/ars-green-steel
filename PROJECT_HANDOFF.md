# ARS Green Steel Project Handoff

Use this file as the first read in a new Codex chat.

## Project Location

```txt
/Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign
```

## Live And Local URLs

- Live site: https://ars-green-steel.vercel.app/
- Usual local preview: http://127.0.0.1:3034/
- GitHub repository: https://github.com/baburao/ars-green-steel-redesign
- Vercel project: `ars-green-steel`

## Current Working Context

- Active design branch: `homepage-figma-refresh`
- Approved design source: client-approved Figma Make direction and ARS design handoff docs.
- Current focus before this handoff: native blog pages.
- `/blog` archive has been built locally as a native Next.js page.
- Individual blog articles still need the next redesign pass.

## Design Rules To Preserve

- Primary blue: `#0D2B6E`
- Secondary red: `#DE121A`
- Dark navy: `#060D1E`
- Font: IBM Plex Sans
- Section H2 scale: `font-size: clamp(2rem, 3.4vw, 2.25rem);`
- Section kicker weight: `500`
- Standard section rhythm: `SectionKicker`, H2, paragraph, content.
- Homepage hero can be taller and cinematic.
- Non-home page heroes should stay around `60vh`.
- Do not invent founder, team, certificate, or testimonial photos.
- Placeholder imagery is acceptable only where the user explicitly approves it.

## Completed Core Pages

- Home
- About
- Products listing
- ARS 550D product page
- ARS CRS 550D product page
- Manufacturing
- Certifications
- Green Steel
- ARS Green Steel
- Our Team
- Our Quality
- Steel Price Today
- TMT Calculator
- Dealer Locator
- Contact
- Request Quote
- Become a Dealer
- Homeowners guide
- Engineers and architects guide
- Civil contractors guide
- Steel distributors and dealers guide

## Current Blog Status

Completed locally:

- `/blog` native archive page.
- `/blog.html` redirect to `/blog`.
- Search, topic filters, featured articles, progressive loading, and cards for all preserved article URLs.
- Blog links in header/footer now point to `/blog`.
- `BLOG_IMPLEMENTATION_PLAN.md` lists all 88 preserved blog URLs and the recommended migration order.

Pending:

- Commit and push the blog archive if not already done.
- Redesign the shared article template.
- Start with `/blog/corrosion-resistance-steel.html`.
- Then migrate priority blog articles in batches.

Important files for blog work:

- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/components/blog-archive.tsx`
- `src/lib/blog-content.ts`
- `BLOG_IMPLEMENTATION_PLAN.md`

## Files To Read First In New Chat

1. `PROJECT_HANDOFF.md`
2. `TASKS.md`
3. `DESIGN_RULES.md`
4. `DESIGN_SYSTEM.md`
5. `COMPONENT_INVENTORY.md`
6. `BLOG_IMPLEMENTATION_PLAN.md`
7. `DEPLOYMENT.md`

## Current Git Notes

- Before committing, run `git status --short`.
- `pnpm-lock.yaml` and `pnpm-workspace.yaml` may appear as untracked files. Do not commit them unless the user intentionally changes package manager strategy.
- Do not revert unrelated local changes.
- Commit only the reviewed files for the current feature.

## Deployment Flow

1. Build locally.
2. Commit reviewed files.
3. Push to GitHub.
4. Vercel deploys the live site.
5. Confirm live at https://ars-green-steel.vercel.app/

See `DEPLOYMENT.md` for the detailed process and previous Vercel/GitHub issue notes.

## Recommended Next Step

Continue the blog phase:

1. Review and commit the `/blog` archive work.
2. Build the reusable article template.
3. Apply it first to `/blog/corrosion-resistance-steel.html`.
4. Validate desktop, tablet, mobile, build, and preserved URL behavior.

