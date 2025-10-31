# 🚀 Render.com Setup Guide

## ✅ Step 1: PostgreSQL Database (Already Done!)
Your database is already created with:
- **External URL**: `postgresql://shippyar_db_user:OUphTTOjSPg81in5uE8vFfPLjuzCBtsZ@dpg-d423r49r0fns738too2g-a.oregon-postgres.render.com/shippyar_db`
- **Internal URL**: `postgresql://shippyar_db_user:OUphTTOjSPg81in5uE8vFfPLjuzCBtsZ@dpg-d423r49r0fns738too2g-a/shippyar_db`

---

## 📦 Step 2: Create Web Service

1. Go to Render dashboard
2. Click **"New"** → **"Web Service"**
3. Connect your GitHub repository: `erfanexperience/Shipyar-questionnaire`
4. Configure the service:
   - **Name**: `shippyar-backend` (or any name)
   - **Region**: `Oregon (US West)` (same as database)
   - **Branch**: `main`
   - **Root Directory**: Leave empty (or `.` if needed)
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

---

## 🔐 Step 3: Add Environment Variables

In your Web Service settings, go to **Environment** tab and add:

### Database Connection:
```
DATABASE_URL = postgresql://shippyar_db_user:OUphTTOjSPg81in5uE8vFfPLjuzCBtsZ@dpg-d423r49r0fns738too2g-a.oregon-postgres.render.com/shippyar_db
```

### Google Sheets:
```
GOOGLE_SHEET_ID = 1eJfC9pIEubbjmCn1gsT_E2unbLG6vKjp0-PkqU4FVDA
```

### Google Credentials:
```
GOOGLE_CREDENTIALS = <paste full contents of credentials.json here>
```

**To get GOOGLE_CREDENTIALS:**
1. Open `credentials.json` file on your computer
2. Copy the ENTIRE JSON content (from `{` to `}`)
3. Paste it as the value for `GOOGLE_CREDENTIALS`

**Example format:**
```json
{"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}
```

### Port (Optional):
```
PORT = 3000
```

---

## 🗄️ Step 4: Setup Database Table

1. After the Web Service is deployed, click on it
2. Go to **Shell** tab (or use **Logs** to find the service URL)
3. Run:
```bash
node setup-database.js
```

Or the table will be created automatically when the server starts (it's in the code).

---

## ✅ Step 5: Update Frontend

1. Copy your Web Service URL (e.g., `https://shippyar-backend.onrender.com`)
2. Open `script.js` in your local files
3. Find this line (around line 1273):
```javascript
const apiUrl = isLocalhost 
    ? 'http://localhost:3000/api/submit-questionnaire'
    : 'https://your-backend-domain.com/api/submit-questionnaire'; // UPDATE THIS
```
4. Replace `'https://your-backend-domain.com/api/submit-questionnaire'` with:
```javascript
const apiUrl = isLocalhost 
    ? 'http://localhost:3000/api/submit-questionnaire'
    : 'https://your-web-service-url.onrender.com/api/submit-questionnaire';
```
5. Commit and push to GitHub (GitHub Pages will auto-update)

---

## 🧪 Step 6: Test

1. Visit your site: `https://shippyar.com` or your GitHub Pages URL
2. Fill out the questionnaire
3. Submit it
4. Check:
   - **Render Logs**: Should show "✅ Questionnaire submitted successfully"
   - **PostgreSQL**: Connect to your database and check `questionnaire_responses` table
   - **Google Sheets**: Should see new row added automatically

---

## 🔍 Troubleshooting

### Database Connection Error?
- Make sure you're using the **External URL** in `DATABASE_URL`
- Check that SSL is enabled (`rejectUnauthorized: false`)

### Google Sheets Not Working?
- Verify `GOOGLE_CREDENTIALS` is valid JSON (no extra quotes)
- Make sure the service account email has access to your Google Sheet
- Check Render logs for error messages

### CORS Issues?
- The server already has CORS enabled
- Make sure your frontend URL matches

### Service Sleeping?
- Free tier services sleep after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- This is normal for free tier

---

## 🎉 That's It!

Your backend is now live and free on Render.com! 🚀

