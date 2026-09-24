import { getCurrentCareerOpening } from "@/data/careers";
import { getCareerApplicationsConfig } from "@/lib/career-applications-config";
import { saveCareerResumeToDrive } from "@/lib/career-drive";
import { appendGoogleSheetRow, googleSheetColumnContains } from "@/lib/google-sheets";

export const runtime = "nodejs";

const maximumResumeBytes = 5 * 1024 * 1024;
const maximumBodyBytes = 6 * 1024 * 1024;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function response(body: object, status: number) {
  return Response.json(body, { status, headers: { "cache-control": "no-store" } });
}

async function readLimitedFormData(request: Request, contentType: string) {
  const reader = request.body?.getReader();
  if (!reader) return null;

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > maximumBodyBytes) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new Request(request.url, {
    method: "POST",
    headers: { "content-type": contentType },
    body,
  }).formData();
}

function field(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const config = getCareerApplicationsConfig();
  if (!config) return response({ ok: false, message: "Online applications are being prepared. Please try again later." }, 503);

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return response({ ok: false, message: "Please submit the form from the ARS website." }, 403);
      }
    } catch {
      return response({ ok: false, message: "Please submit the form from the ARS website." }, 403);
    }
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("multipart/form-data;")) {
    return response({ ok: false, message: "Please submit the application form with a PDF résumé." }, 415);
  }
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > maximumBodyBytes) {
    return response({ ok: false, message: "The application is too large. Please use a PDF under 5 MB." }, 413);
  }

  let form: FormData | null;
  try {
    form = await readLimitedFormData(request, contentType);
  } catch {
    return response({ ok: false, message: "Please review the form and try again." }, 400);
  }
  if (!form) return response({ ok: false, message: "The application is too large. Please use a PDF under 5 MB." }, 413);

  if (field(form, "companyWebsite")) return response({ ok: true, message: "Your application has been received." }, 200);

  const fullName = field(form, "fullName");
  const email = field(form, "email");
  const phone = field(form, "phone");
  const summary = field(form, "summary");
  const opening = getCurrentCareerOpening(field(form, "openingId"));
  const submissionId = field(form, "submissionId");
  const resume = form.get("resume");

  if (
    fullName.length < 2 || fullName.length > 100 || /[\r\n]/.test(fullName) ||
    email.length > 254 || !emailPattern.test(email) ||
    phone.length > 30 || !/^\+?[\d\s().-]{7,30}$/.test(phone) || !/^\d{7,15}$/.test(phone.replace(/\D/g, "")) ||
    !summary || summary.length > 500 ||
    !opening ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(submissionId) ||
    !(resume instanceof File) ||
    !resume.name.toLowerCase().endsWith(".pdf") ||
    (resume.type && resume.type !== "application/pdf") ||
    resume.size === 0 || resume.size > maximumResumeBytes
  ) {
    return response({ ok: false, message: "Please check your details and upload a PDF résumé under 5 MB." }, 400);
  }

  const file = Buffer.from(await resume.arrayBuffer());
  if (file.subarray(0, 5).toString("ascii") !== "%PDF-") {
    return response({ ok: false, message: "Please upload a valid PDF résumé." }, 400);
  }

  const safeFileName = `${resume.name.slice(0, -4).replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 90) || "resume"}.pdf`;

  try {
    if (await googleSheetColumnContains(config.sheetName, "A", submissionId)) {
      return response({ ok: true, message: "Thank you. Your application has been received by ARS Careers." }, 200);
    }

    const savedResume = await saveCareerResumeToDrive(config, submissionId, file);
    await appendGoogleSheetRow({
      sheetName: config.sheetName,
      rangeColumns: "A:L",
      values: [
        submissionId,
        new Date().toISOString(),
        opening.id,
        opening.title,
        opening.region,
        fullName,
        email,
        phone,
        summary,
        safeFileName,
        savedResume.url,
        savedResume.id,
      ],
    });
    return response({ ok: true, message: "Thank you. Your application has been received by ARS Careers." }, 201);
  } catch (error) {
    const code = error instanceof Error && /^GOOGLE_(?:SHEETS|DRIVE)_[A-Z_0-9]+$/.test(error.message)
      ? error.message
      : "CAREER_APPLICATION_STORAGE_FAILED";
    console.error("Career application storage failed", { code });
    return response({ ok: false, message: "We could not save your application. Please try again later." }, 503);
  }
}
