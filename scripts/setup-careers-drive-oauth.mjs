import { createHash, randomBytes } from "node:crypto";
import { writeFileSync, mkdtempSync } from "node:fs";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { join } from "node:path";

const clientId = process.env.GOOGLE_DRIVE_CLIENT_ID?.trim();
const clientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET?.trim();
const expectedEmail = process.env.GOOGLE_DRIVE_EXPECTED_EMAIL?.trim().toLowerCase();
const redirectUri = "http://127.0.0.1:8787/oauth/callback";

if (!clientId || !clientSecret || !expectedEmail) {
  throw new Error("Set GOOGLE_DRIVE_CLIENT_ID, GOOGLE_DRIVE_CLIENT_SECRET, and GOOGLE_DRIVE_EXPECTED_EMAIL before running this one-time setup.");
}

const state = randomBytes(24).toString("hex");
const verifier = randomBytes(48).toString("base64url");
const challenge = createHash("sha256").update(verifier).digest("base64url");

async function completeSetup(code) {
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      code_verifier: verifier,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  });
  if (!tokenResponse.ok) throw new Error(`Google OAuth exchange failed (${tokenResponse.status}).`);
  const token = await tokenResponse.json();
  if (!token.access_token || !token.refresh_token) {
    throw new Error("Google did not return a refresh token. Revoke the old grant and repeat the one-time consent.");
  }
  if (token.scope && !token.scope.split(/\s+/).includes("https://www.googleapis.com/auth/drive.file")) {
    throw new Error("Google Drive access was not granted. Select the Drive permission checkbox on the consent screen and retry.");
  }

  const identityResponse = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: { authorization: `Bearer ${token.access_token}` },
  });
  if (!identityResponse.ok) throw new Error(`Google account identity check failed (${identityResponse.status}).`);
  const identity = await identityResponse.json();
  if (identity.email?.toLowerCase() !== expectedEmail || identity.email_verified !== true) {
    throw new Error(`The signed-in account was not ${expectedEmail}. No folder or setup file was created.`);
  }

  const folderResponse = await fetch("https://www.googleapis.com/drive/v3/files?fields=id", {
    method: "POST",
    headers: {
      authorization: `Bearer ${token.access_token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ name: "ARS carriers", mimeType: "application/vnd.google-apps.folder" }),
  });
  if (!folderResponse.ok) {
    const failure = await folderResponse.json().catch(() => null);
    const reason = failure?.error?.errors?.[0]?.reason ?? failure?.error?.status ?? "unknown";
    const message = typeof failure?.error?.message === "string" ? failure.error.message.slice(0, 300) : "No details returned";
    throw new Error(`Google Drive folder creation failed (${folderResponse.status}, ${reason}): ${message}`);
  }
  const folder = await folderResponse.json();
  if (!folder.id || !/^[A-Za-z0-9_-]+$/.test(folder.id)) throw new Error("Google Drive returned an invalid folder ID.");

  const directory = mkdtempSync(join(tmpdir(), "ars-careers-drive-"));
  const outputPath = join(directory, "hostinger-env.txt");
  writeFileSync(outputPath, [
    `GOOGLE_DRIVE_CLIENT_ID=${clientId}`,
    `GOOGLE_DRIVE_CLIENT_SECRET=${clientSecret}`,
    `GOOGLE_DRIVE_REFRESH_TOKEN=${token.refresh_token}`,
    `GOOGLE_DRIVE_CAREERS_FOLDER_ID=${folder.id}`,
    "GOOGLE_SHEETS_CAREERS_SHEET_NAME=Careers",
    "CAREERS_APPLICATIONS_ENABLED=false",
    "",
  ].join("\n"), { mode: 0o600, flag: "wx" });

  process.stdout.write(`Authorized ${identity.email}. The Careers Drive folder was created.\n`);
  process.stdout.write(`Copy the server-only values from ${outputPath} into Hostinger, then delete this temporary file. Never paste the token into chat or Git.\n`);
  process.stdout.write(`Folder URL: https://drive.google.com/drive/folders/${folder.id}\n`);
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url ?? "/", redirectUri);
  if (url.pathname === "/oauth/callback" && url.searchParams.get("state") === state && url.searchParams.get("error")) {
    response.writeHead(400, { "content-type": "text/plain; charset=utf-8" });
    response.end("Google authorization was declined. Return to the setup terminal.");
    server.close();
    clearTimeout(timeout);
    process.stderr.write("Google authorization was declined. No folder or setup file was created.\n");
    process.exitCode = 1;
    return;
  }
  if (url.pathname !== "/oauth/callback" || url.searchParams.get("state") !== state || !url.searchParams.get("code")) {
    response.writeHead(400, { "content-type": "text/plain; charset=utf-8" });
    response.end("Google authorization was not completed. Return to the setup terminal.");
    return;
  }

  server.close();
  clearTimeout(timeout);
  try {
    await completeSetup(url.searchParams.get("code"));
    response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
    response.end("ARS Careers Drive setup complete. You can return to Codex.");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Careers Drive setup failed.";
    response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    response.end(`${message}\nReturn to Codex.`);
    process.stderr.write(`${message}\n`);
    process.exitCode = 1;
  }
});

const timeout = setTimeout(() => {
  server.close();
  process.stderr.write("Google authorization timed out after 10 minutes. Run setup again.\n");
  process.exitCode = 1;
}, 10 * 60 * 1000);

server.listen(8787, "127.0.0.1", () => {
  const authorizationUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authorizationUrl.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "openid email https://www.googleapis.com/auth/drive.file",
    access_type: "offline",
    prompt: "consent select_account",
    login_hint: expectedEmail,
    state,
    code_challenge: challenge,
    code_challenge_method: "S256",
  }).toString();
  process.stdout.write(`Open this Google authorization URL and select ${expectedEmail}:\n${authorizationUrl}\n`);
});
