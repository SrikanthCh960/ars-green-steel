# Vercel production configuration — prepared, not applied

No Vercel setting was changed as part of this preparation.

Read-only verification on 2026-07-22 found no project environment variables. Therefore Preview and Development are currently not using the production site URL; Production must receive the value below before its approved build.

| Environment | `NEXT_PUBLIC_SITE_URL` | Required state |
|---|---|---|
| Production | `https://arsgroup.in` | Add before the approved production build; it must be available at build time. |
| Preview | Confirmed unset | Do not add the production value. This preserves `noindex, nofollow`. |
| Development | Confirmed unset | Do not add the production value. This preserves `noindex, nofollow`. |

The article metadata code derives `index, follow` only when the value exactly equals `https://arsgroup.in`; otherwise it emits `noindex, nofollow` while retaining the intended production canonical.

Before deployment, an authorized verifier must record the Vercel project, environment scope, value visibility at build time, and verification timestamp in `production-launch-verification-record.md`.
