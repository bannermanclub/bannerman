import { google } from "googleapis";

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_LEADS_SHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const SERVICE_ACCOUNT_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

if (!SPREADSHEET_ID || !SERVICE_ACCOUNT_EMAIL || !SERVICE_ACCOUNT_KEY) {
  // We intentionally don't throw here to avoid build-time failures
  // but the API route will respond with 500 if config is missing.
}

export async function appendLeadRow(data: {
  name: string;
  email: string;
  company: string;
  website: string;
  fundingStatus: string;
  profitable: string;
  mrrUsd: string;
}) {
  if (!SPREADSHEET_ID || !SERVICE_ACCOUNT_EMAIL || !SERVICE_ACCOUNT_KEY) {
    throw new Error("Google Sheets environment variables are not configured.");
  }

  const auth = new google.auth.JWT({
    email: SERVICE_ACCOUNT_EMAIL,
    key: SERVICE_ACCOUNT_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const now = new Date().toISOString();

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1!A1", // assumes a header row on Sheet1
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          now,
          data.name,
          data.email,
          data.company,
          data.website,
          data.fundingStatus,
          data.profitable,
          data.mrrUsd,
        ],
      ],
    },
  });
}

