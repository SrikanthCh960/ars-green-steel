import "server-only";

import { appendGoogleSheetRow } from "@/lib/google-sheets";

export const STEEL_TESTING_PROJECT_TYPES = ["Residential", "Commercial"] as const;

type SteelTestingProjectType = (typeof STEEL_TESTING_PROJECT_TYPES)[number];

export type SteelTestingEnquiry = {
  fullName: string;
  phone: string;
  projectType: SteelTestingProjectType;
  area: string;
  city: string;
  state: string;
  description: string;
  sourcePage: "/steel-testing";
  submittedDate: string;
  submittedTime: string;
  timezone: "Asia/Kolkata";
  isoTimestamp: string;
};

export type SteelTestingEnquiryValidationResult =
  | { ok: true; enquiry: SteelTestingEnquiry; submissionId: string; isHoneypot: boolean }
  | { ok: false; errors: Record<string, string> };

const allowedRequestKeys = new Set([
  "fullName", "phone", "projectType", "area", "city", "state", "description",
  "sourcePage", "website", "submissionId",
]);
const indiaTimeZone = "Asia/Kolkata" as const;

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function cleanMultilineText(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\r\n?/g, "\n") : "";
}

function normalizeIndianPhone(value: unknown) {
  const digits = typeof value === "string" ? value.replace(/\D/g, "") : "";
  const localNumber = digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(localNumber) ? `+91${localNumber}` : "";
}

function formatIndiaDateTime(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: indiaTimeZone,
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    submittedDate: `${values.day}/${values.month}/${values.year}`,
    submittedTime: `${values.hour}:${values.minute}:${values.second}`,
  };
}

export function validateSteelTestingEnquiry(value: unknown, now = new Date()): SteelTestingEnquiryValidationResult {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, errors: { form: "Please review the form and try again." } };
  }

  const record = value as Record<string, unknown>;
  if (Object.keys(record).some((key) => !allowedRequestKeys.has(key))) {
    return { ok: false, errors: { form: "The enquiry contains unsupported data." } };
  }

  const errors: Record<string, string> = {};
  const fullName = cleanText(record.fullName);
  const phone = normalizeIndianPhone(record.phone);
  const projectType = cleanText(record.projectType);
  const area = cleanText(record.area);
  const city = cleanText(record.city);
  const state = cleanText(record.state);
  const description = cleanMultilineText(record.description);
  const sourcePage = cleanText(record.sourcePage);
  const website = cleanText(record.website);
  const submissionId = cleanText(record.submissionId);

  if (fullName.length < 2) errors.fullName = "Please enter your full name.";
  else if (fullName.length > 100) errors.fullName = "Full name must be 100 characters or fewer.";
  if (!phone) errors.phone = "Please enter a valid Indian mobile number.";
  if (!STEEL_TESTING_PROJECT_TYPES.includes(projectType as SteelTestingProjectType)) errors.projectType = "Please select a project type.";
  if (area.length < 2) errors.area = "Please enter the project area.";
  else if (area.length > 120) errors.area = "Project area must be 120 characters or fewer.";
  if (city.length < 2) errors.city = "Please enter the project city.";
  else if (city.length > 120) errors.city = "Project city must be 120 characters or fewer.";
  if (state.length < 2) errors.state = "Please enter the project state.";
  else if (state.length > 120) errors.state = "Project state must be 120 characters or fewer.";
  if (description.length < 2) errors.description = "Please describe the testing requirement.";
  else if (description.length > 1000) errors.description = "Description must be 1,000 characters or fewer.";
  if (sourcePage !== "/steel-testing") errors.form = "The enquiry source is not supported.";
  if (!/^[a-zA-Z0-9-]{16,80}$/.test(submissionId)) errors.form = "Please refresh the page and try again.";

  if (Object.keys(errors).length) return { ok: false, errors };

  const { submittedDate, submittedTime } = formatIndiaDateTime(now);
  return {
    ok: true,
    submissionId,
    isHoneypot: Boolean(website),
    enquiry: {
      fullName,
      phone,
      projectType: projectType as SteelTestingProjectType,
      area,
      city,
      state,
      description,
      sourcePage: "/steel-testing",
      submittedDate,
      submittedTime,
      timezone: indiaTimeZone,
      isoTimestamp: now.toISOString(),
    },
  };
}

export async function appendSteelTestingEnquiryToGoogleSheets(enquiry: SteelTestingEnquiry) {
  const sheetName = process.env.GOOGLE_SHEETS_QUOTE_REQUESTS_SHEET_NAME?.trim();
  if (!sheetName) throw new Error("GOOGLE_SHEETS_NOT_CONFIGURED");

  await appendGoogleSheetRow({
    sheetName,
    rangeColumns: "A:M",
    values: [
      enquiry.fullName,
      enquiry.phone,
      "",
      enquiry.state,
      `${enquiry.area}, ${enquiry.city}`,
      enquiry.projectType,
      "Steel Testing",
      enquiry.description,
      enquiry.sourcePage,
      enquiry.submittedDate,
      enquiry.submittedTime,
      enquiry.timezone,
      enquiry.isoTimestamp,
    ],
  });
}
