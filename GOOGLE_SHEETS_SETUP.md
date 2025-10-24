# Google Sheets Integration Setup

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Shippyar Questionnaire Responses"
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 2: Enable Google Sheets API
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google Sheets API
4. Go to "Credentials" → "Create Credentials" → "Service Account"
5. Download the JSON key file
6. Rename it to `credentials.json` and place it in the project root

## Step 3: Share the Google Sheet
1. Open your Google Sheet
2. Click "Share" button
3. Add the service account email (from credentials.json) with "Editor" permissions

## Step 4: Update Configuration
1. Open `config.js`
2. Replace `your_google_sheet_id_here` with your actual spreadsheet ID

## Step 5: Sheet Headers
Make sure your Google Sheet has these headers in row 1:
- ID
- Full Name
- Email
- Country
- Preferred Language
- How Heard
- User Type
- Age Group
- Answers (JSON)
- Timestamp
- Status
