import "server-only";

export type CareerApplicationsConfig = {
  sheetName: string;
  driveClientId: string;
  driveClientSecret: string;
  driveRefreshToken: string;
  driveFolderId: string;
};

const sheetNamePattern = /^[\w .&()-]{1,100}$/;
const driveIdPattern = /^[A-Za-z0-9_-]+$/;

export function getCareerApplicationsConfig(): CareerApplicationsConfig | null {
  if (process.env.CAREERS_APPLICATIONS_ENABLED !== "true") return null;

  const sheetName = process.env.GOOGLE_SHEETS_CAREERS_SHEET_NAME?.trim();
  const driveClientId = process.env.GOOGLE_DRIVE_CLIENT_ID?.trim();
  const driveClientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET?.trim();
  const driveRefreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN?.trim();
  const driveFolderId = process.env.GOOGLE_DRIVE_CAREERS_FOLDER_ID?.trim();

  if (
    !sheetName || !sheetNamePattern.test(sheetName) ||
    !process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim() ||
    !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() ||
    !process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.trim() ||
    !driveClientId || !driveClientSecret || !driveRefreshToken ||
    !driveFolderId || !driveIdPattern.test(driveFolderId)
  ) return null;

  return { sheetName, driveClientId, driveClientSecret, driveRefreshToken, driveFolderId };
}
