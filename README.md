# ARS Group Website Redesign

Modern website prototype for ARS Group, built as a conversion-led industrial product experience.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber / Three.js
- Lucide icons

## Local Preview

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

If the local file watcher is unstable, use a production preview:

```bash
npm run build
npm run start -- --port 3001
```

Open:

```text
http://localhost:3001
```

## Current Prototype

The first screen includes:

- Branded ARS navigation
- Cinematic dark hero
- Lightweight animated 3D steel/rebar visual
- Trust metrics
- Price / calculator / dealer action cards
- Product range section
- Audience pathway section
- Sales/contact CTA

## Deployment Workflow

Recommended flow:

1. Push this project to GitHub.
2. Connect the GitHub repository to Vercel.
3. Use the Vercel preview URL for client approval.
4. After approval, connect the real ARS domain or a staging subdomain.

This keeps future changes smooth: update code, push to GitHub, and Vercel deploys automatically.

