import "server-only";

import { randomBytes } from "node:crypto";
import type { CareerApplicationsConfig } from "@/lib/career-applications-config";

type DriveFile = { id?: string; webViewLink?: string };

async function getDriveAccessToken(config: CareerApplicationsConfig) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: config.driveClientId,
      client_secret: config.driveClientSecret,
      refresh_token: config.driveRefreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(8_000),
  });
  if (!response.ok) throw new Error(`GOOGLE_DRIVE_AUTH_FAILED_${response.status}`);

  const payload = await response.json() as { access_token?: string };
  if (!payload.access_token) throw new Error("GOOGLE_DRIVE_AUTH_RESPONSE_INVALID");
  return payload.access_token;
}

function fileLink(file: DriveFile) {
  if (!file.id || !/^[A-Za-z0-9_-]+$/.test(file.id)) throw new Error("GOOGLE_DRIVE_FILE_ID_INVALID");
  return { id: file.id, url: `https://drive.google.com/file/d/${file.id}/view` };
}

export async function saveCareerResumeToDrive(config: CareerApplicationsConfig, submissionId: string, pdf: Buffer) {
  const accessToken = await getDriveAccessToken(config);
  const name = `ars-career-${submissionId}.pdf`;
  const query = new URLSearchParams({
    q: `name = '${name}' and '${config.driveFolderId}' in parents and trashed = false`,
    fields: "files(id,webViewLink)",
    pageSize: "2",
  });
  const existing = await fetch(`https://www.googleapis.com/drive/v3/files?${query}`, {
    headers: { authorization: `Bearer ${accessToken}` },
    cache: "no-store",
    signal: AbortSignal.timeout(8_000),
  });
  if (!existing.ok) throw new Error(`GOOGLE_DRIVE_LOOKUP_FAILED_${existing.status}`);

  const existingFiles = await existing.json() as { files?: DriveFile[] };
  if (existingFiles.files?.[0]) return fileLink(existingFiles.files[0]);

  const boundary = `ars-careers-${randomBytes(16).toString("hex")}`;
  const metadata = JSON.stringify({
    name,
    mimeType: "application/pdf",
    parents: [config.driveFolderId],
    appProperties: { careerSubmissionId: submissionId },
  });
  const body = Buffer.concat([
    Buffer.from(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${metadata}\r\n`),
    Buffer.from(`--${boundary}\r\nContent-Type: application/pdf\r\n\r\n`),
    pdf,
    Buffer.from(`\r\n--${boundary}--\r\n`),
  ]);
  const uploaded = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink", {
    method: "POST",
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": `multipart/related; boundary=${boundary}`,
    },
    body: new Uint8Array(body),
    cache: "no-store",
    signal: AbortSignal.timeout(20_000),
  });
  if (!uploaded.ok) throw new Error(`GOOGLE_DRIVE_UPLOAD_FAILED_${uploaded.status}`);

  return fileLink(await uploaded.json() as DriveFile);
}
