# ARS Local Server Rules

All coding chats share the same ARS workspace and the same Next.js build folder (`.next`):

```txt
/Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign
```

Follow these rules exactly to prevent stale previews, missing CSS files, port conflicts, and broken local pages.

## One server owner at a time

- Only one coding chat may start, stop, or restart a local Next.js server at a time.
- Before starting a server, check whether the required port is already in use.
- Do not run `npm run dev` and `npm run preview` simultaneously in this workspace.
- Do not run multiple `npm run dev` processes from separate chats.

## Development server

Use the development server only for normal page design and iterative UI work:

```bash
npm run dev
```

Expected local URL:

```txt
http://127.0.0.1:3000
```

Before starting it, check the port:

```bash
lsof -nP -iTCP:3000 -sTCP:LISTEN
```

If another ARS development server is already running and working, reuse it. Do not start a second one.

## Production build and preview

Use production preview only for final verification after meaningful implementation changes.

Required sequence:

```bash
lsof -nP -iTCP:3001 -sTCP:LISTEN
```

If a process is listening on port 3001, stop it first:

```bash
kill <PID>
```

Then run:

```bash
npm run build
npm run preview
```

Expected production-review URL:

```txt
http://127.0.0.1:3001
```

Do not run a build while another chat has an active preview server. A build replaces files in `.next`, which can leave an existing preview server serving stale HTML or missing CSS assets.

## When a preview is broken

Symptoms may include:

- `EADDRINUSE`
- Blank page
- Missing stylesheet
- CSS file returns 404
- Existing preview server does not respond
- Page shows an outdated version after a successful build

Recovery procedure:

```bash
lsof -nP -iTCP:3001 -sTCP:LISTEN
kill <PID>
npm run build
npm run preview
```

If the port still remains occupied after a normal `kill`, report it. Do not use force-kill unless explicitly approved.

## Build ownership and reporting

Before running `npm run build`, state in the chat that you are taking ownership of the build/preview process.

After verification:

- State whether the preview server remains running.
- State its URL and port.
- Do not leave an unnecessary server process running after final verification.
- If you stop a server, report that it was stopped.

## Safety rules

- Never delete `.next`, source files, lockfiles, or workspace folders to fix a server issue without explicit approval.
- Do not change package-manager files to resolve a local-server issue.
- Do not assume a local preview is current merely because port 3001 is occupied; verify the target route responds.
- Keep all page implementation and build work inside the approved ARS workspace.
