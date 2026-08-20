# Deployment indexing configuration

Hostinger and `https://arsgroup.in` are the production source of truth. Vercel remains a preview environment and must stay non-indexable.

Indexing is controlled by the following explicit build-time flag:

| Environment | `NEXT_PUBLIC_INDEXING_ENABLED` | Required state |
|---|---|---|
| Hostinger production | `true` | Required during the approved production build. |
| Vercel preview | Unset or `false` | Preserve `noindex, nofollow`. |
| Development | Unset or `false` | Preserve `noindex, nofollow`. |

The metadata code honors an explicit value first. If the flag is unavailable, a non-Vercel production build uses `index, follow`, while Vercel and development default to `noindex, nofollow` and retain the intended production canonical.

Before deployment, an authorized verifier must record the Hostinger environment scope, value visibility at build time, and verification timestamp in `production-launch-verification-record.md`.
