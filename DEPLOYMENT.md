# ARS Green Steel Deployment Guide

This is the deployment source of truth for the ARS Green Steel redesign.

## Live Project

- Live website: https://ars-green-steel.vercel.app/
- GitHub repository: https://github.com/baburao/ars-green-steel-redesign
- Vercel project: `ars-green-steel`
- Vercel team/account: `baburaos-projects-1c568830`
- Main branch: `main`
- Deployment method: GitHub push to Vercel

## Current Recommended Deployment Flow

Use GitHub push deployment as the normal process.

Do not run `vercel deploy --prod` for normal updates unless GitHub auto-deploy is unavailable.

### 1. Run Local Site

```bash
cd /Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign
npm run dev -- --hostname 127.0.0.1 --port 3032
```

Local preview:

```txt
http://127.0.0.1:3032/
```

If this URL says "This site can't be reached", the local dev server is not running.

### 2. Verify Before Push

Run these checks before deploying:

```bash
npm run build -- --webpack
git status
```

If available, also run:

```bash
npm run lint
npm run qa:routes
```

### 3. Commit And Push

```bash
git add .
git commit -m "Describe the update"
git push origin main
```

After `git push origin main`, Vercel automatically starts a production deployment.

### 4. Confirm Deployment

Open Vercel dashboard and check:

- Deployment status should become `Ready`.
- Production domain should point to the latest commit.
- Live site should update at https://ars-green-steel.vercel.app/

## Important GitHub And Vercel Notes

The repo is connected to Vercel through the GitHub app.

GitHub app access must include:

```txt
baburao/ars-green-steel-redesign
```

If deployment does not start after a push, check:

1. GitHub repo is connected in Vercel.
2. Vercel GitHub app has access to the repository.
3. The pushed branch is `main`.
4. The latest commit appears in Vercel Deployments.

GitHub app permissions page:

```txt
https://github.com/settings/installations
```

## Previous Deployment Issue And Fix

We had a blocked production deployment after commit:

```txt
b8556c5 Refine ARS homepage journey and typography
```

Vercel showed:

```txt
Deployment Blocked
The deployment was blocked because the commit author did not have contributing access to the project on Vercel.
The Hobby Plan does not support collaboration for private repositories.
```

Root cause:

- Vercel checks the GitHub commit author and repo access, not only the browser login.
- The commit author appeared as `baburao7772`.
- Vercel/project access was being evaluated separately.
- The repo had been private earlier, so Vercel treated the deployment as a private-repo collaboration case.
- Existing blocked deployments do not automatically unblock after permissions change.

What fixed it:

1. GitHub repository was made public.
2. Vercel GitHub app access was confirmed for `baburao/ars-green-steel-redesign`.
3. A fresh commit was created and pushed:

```txt
f41c180 Trigger production deployment
```

After that fresh push, Vercel deployed successfully.

## If Vercel Shows Blocked Again

Do not keep retrying the same blocked deployment.

Follow this checklist:

1. Confirm GitHub app access:

```txt
https://github.com/settings/installations
```

2. Confirm Vercel has access to:

```txt
baburao/ars-green-steel-redesign
```

3. Check local Git author:

```bash
git config --get user.name
git config --get user.email
```

Expected current author:

```txt
baburao7772
166382500+baburao7772@users.noreply.github.com
```

4. Create a fresh commit and push:

```bash
git commit --allow-empty -m "Trigger production deployment"
git push origin main
```

5. Check Vercel Deployments again.

If it still blocks, the remaining issue is account identity mismatch between GitHub commit author and Vercel project access.

## Clean Working Tree Before Deploy

Before pushing, always run:

```bash
git status
```

If `CLAUDE.md` appears as deleted but that deletion is not intentional, restore it:

```bash
git restore CLAUDE.md
```

Do not deploy with accidental deleted files.

## Vercel CLI Use

GitHub push is preferred.

Use Vercel CLI only when needed:

```bash
vercel link
vercel deploy --prod
```

If Vercel CLI asks to upgrade itself and fails with npm cache errors, skip the upgrade and continue with GitHub deployment instead.

## Production Domain Later

When the client approves the website:

1. Add the real domain in Vercel project settings.
2. Update DNS records from the domain provider.
3. Confirm HTTPS is active.
4. Recheck:
   - `/robots.txt`
   - `/sitemap.xml`
   - old URLs
   - blog URLs
   - enquiry/contact flows
5. Keep https://ars-green-steel.vercel.app/ as the staging/preview reference unless the client wants a different preview URL.

## Items That Can Be Added Later

These do not block preview deployment:

- Final client-approved contact details
- WhatsApp number
- Live steel price data
- Calculator formulas
- Approved dealer database
- Remaining original legacy assets
- PDFs, brochures, certificates, downloadable documents, and videos
