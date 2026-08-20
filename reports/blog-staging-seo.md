# Blog staging indexing controls

The article metadata implementation is in `src/app/blog/[slug]/page.tsx`.

When `NEXT_PUBLIC_INDEXING_ENABLED=false`, or when a Vercel build/local development omits the flag, every blog article emits:

```html
<meta name="robots" content="noindex, nofollow">
<link rel="canonical" href="https://arsgroup.in/blog/[slug]">
```

The canonical always uses the final production domain, not the Vercel testing domain. Open Graph URL metadata uses that same final canonical URL.

## Production launch switch

Set this production environment variable at build time on the `arsgroup.in` deployment:

```text
NEXT_PUBLIC_INDEXING_ENABLED=true
```

With that explicit value, the same metadata implementation emits:

```html
<meta name="robots" content="index, follow">
```

The canonical remains self-referencing on `https://arsgroup.in/blog/[slug]`.

## Environment confirmation

The local implementation has been checked in both modes. Hostinger stores the production flag, with a non-Vercel production fallback for builds where Hostinger does not expose it during compilation. Vercel preview stays non-indexable by default; any future non-Vercel staging build must explicitly set the flag to `false`. Do not infer remote assignments from a local `.env.local` file.

## Verification before launch

Confirm a representative article and the sitemap on the production domain return `200`, use the final canonical URL, expose `index, follow`, include one H1, Open Graph/Twitter metadata, Article JSON-LD, and receive a direct 301 from its prior WordPress URL. Submit the production sitemap to Google Search Console only after those checks pass.
