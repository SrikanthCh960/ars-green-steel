# Deployment Guide

This project is ready for GitHub and Vercel deployment.

## Current Status

- Local commit created: `7d73f21` - `Build ARS Green Steel redesign`
- Route QA passes.
- ESLint passes.
- Production build passes.
- Vercel-compatible Next.js app.
- Node requirement added: `>=20`

## Recommended GitHub Repository

Suggested repository name:

```txt
ars-green-steel-redesign
```

## One-Time GitHub Setup

The local GitHub CLI token is currently invalid and the environment could not reach `github.com`.

When internet/auth access is available, run:

```bash
gh auth login -h github.com
```

Then create and push:

```bash
gh repo create ars-green-steel-redesign --private --source=. --remote=origin --push
```

If the repository already exists, connect it instead:

```bash
git remote add origin https://github.com/<your-user-or-org>/ars-green-steel-redesign.git
git push -u origin main
```

## Vercel Deployment

Recommended flow:

1. Open Vercel.
2. Import the GitHub repository.
3. Keep framework preset as `Next.js`.
4. Keep build command as:

```bash
npm run build
```

5. Keep install command as:

```bash
npm install
```

6. Deploy.

## Vercel CLI Alternative

If Vercel CLI is authenticated:

```bash
vercel
vercel --prod
```

## Pre-Deploy Checks

Run these before every deploy:

```bash
npm run qa:routes
npm run lint
npm run build
```

## Items Not Blocking Deployment

These can be added after the preview link is shared with the client:

- Final public email inbox
- WhatsApp number
- Live steel price data
- Calculator formula
- Approved dealer list
- Missing legacy assets, PDFs, brochures, certificates, and videos

## Production Domain Later

For final domain migration:

1. Add the approved domain in Vercel project settings.
2. Update DNS records from the domain provider.
3. Confirm HTTPS is active.
4. Recheck `/robots.txt`, `/sitemap.xml`, and old legacy URLs.
