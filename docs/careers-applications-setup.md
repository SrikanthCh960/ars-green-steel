# Careers application storage setup

The Careers form is a separate pending release. It stores each application in a `Careers` tab of the existing Google spreadsheet and the PDF résumé in a dedicated folder in `arsgroupm@gmail.com` My Drive. It does not send email or create Salesforce records. The existing customer enquiry integrations remain unchanged.

## Account access and security

The existing Google Sheets service account continues writing spreadsheet rows. A separate OAuth grant from `arsgroupm@gmail.com` gives the Careers server only `drive.file` access to files the website creates, plus `openid email` to verify that the correct account completed one-time setup. Do not request full Drive, Gmail, or social-media scopes. The website never receives the Google account password. Keep the OAuth client secret and refresh token in Hostinger server-only environment variables, never in browser code, Git, chat, or screenshots. The authorization can be revoked from the Google Account's third-party access page.

## One-time Google setup

1. In the existing spreadsheet, add a tab named `Careers`. Put these headers in cells A1:L1, in order: `Submission ID`, `Submitted UTC`, `Opening ID`, `Role`, `Region`, `Full name`, `Email`, `Phone`, `Experience summary`, `Résumé filename`, `Résumé link`, `Drive file ID`. Leave the existing tabs and their permissions unchanged.
2. Using `arsgroupm@gmail.com`, create or select an ARS-owned Google Cloud project and enable the Google Drive API. This can be separate from the existing Sheets service-account project. Configure its OAuth consent screen for an external user, declaring only `openid`, `email`, and `https://www.googleapis.com/auth/drive.file`. Use **In production** publishing status for the long-running connection; Google's **Testing** status can expire refresh tokens after seven days. A personal Gmail account cannot create a Shared Drive, so the files will live in this account's My Drive.
3. Create a Google OAuth **Web application** client with this exact authorized redirect URI: `http://127.0.0.1:8787/oauth/callback`. Store the client ID and secret privately.
4. On a trusted local computer, set `GOOGLE_DRIVE_CLIENT_ID`, `GOOGLE_DRIVE_CLIENT_SECRET`, and `GOOGLE_DRIVE_EXPECTED_EMAIL=arsgroupm@gmail.com` in the shell environment without putting secrets into shell history. Run `npm run setup:careers-drive`, then open the URL it prints. Sign in as `arsgroupm@gmail.com` and approve the narrow permissions. The script verifies the account email, creates an `ARS carriers` folder that the OAuth app can access, and writes the Hostinger values to a temporary file with owner-only permissions. It never prints the refresh token. Do not manually create the folder first: with the limited `drive.file` scope, its ID alone does not grant the app access to an existing folder.
5. Copy the values from that temporary file into the **server-side environment variables** of the Hostinger Node.js site. Delete the temporary file afterward. Share the resulting Drive folder with the people who need to open résumés from the spreadsheet; the folder must remain restricted rather than set to “Anyone with the link”.

The Hostinger variables are:

| Variable | Value |
|---|---|
| `GOOGLE_SHEETS_CAREERS_SHEET_NAME` | `Careers` |
| `GOOGLE_DRIVE_CLIENT_ID` | OAuth client ID |
| `GOOGLE_DRIVE_CLIENT_SECRET` | OAuth client secret |
| `GOOGLE_DRIVE_REFRESH_TOKEN` | Refresh token produced by the one-time local setup |
| `GOOGLE_DRIVE_CAREERS_FOLDER_ID` | Folder ID produced by the one-time local setup |
| `CAREERS_APPLICATIONS_ENABLED` | Keep `false` until the separate Careers release and controlled delivery test are ready; then set exact lowercase `true` |

The existing `GOOGLE_SHEETS_SPREADSHEET_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, and `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` values are also required. There are no Resend, SMTP, or Salesforce settings for Careers. Hostinger's **Apply changes** updates server environment variables without a full code redeployment, but the new Careers code itself must be deployed separately.

## Submission and release checks

The server validates the opening ID, applicant contact details, short experience text, and one PDF résumé up to 5 MB. It checks the PDF signature and caps the total request at 6 MB. For a valid submission, it finds an existing Drive file with the same submission ID or uploads the PDF, then appends the Careers row. It reports success only after the row is recorded. A retry checks the submission ID in the Sheet first and reuses the Drive file when necessary. The site does not retain the PDF on its server.

Before enabling production, make one controlled test submission with synthetic applicant details and a harmless PDF. Confirm the role and region, the new Careers row, and that the résumé link opens for the reviewers. Also test missing/invalid PDF, oversized PDF, unknown opening, and retry behavior. An upload that succeeds while a Sheet append fails can leave an unlisted Drive file; the same submission ID is reused on retry. If the OAuth grant is revoked or expires, the form returns an error instead of claiming success. Check Hostinger application logs for a redacted error code and confirm Google Drive storage capacity periodically.

References: [Drive `drive.file` scope](https://developers.google.com/workspace/drive/api/guides/api-specific-auth), [Google OAuth offline access](https://developers.google.com/identity/protocols/oauth2/web-server), [OAuth testing expiry](https://support.google.com/cloud/answer/15549945), [Drive uploads](https://developers.google.com/workspace/drive/api/guides/manage-uploads), [Hostinger environment variables](https://www.hostinger.com/support/how-to-edit-or-add-environment-variables-after-deployment/).
