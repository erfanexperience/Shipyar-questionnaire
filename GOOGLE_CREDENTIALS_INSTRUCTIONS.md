# 🔐 How to Add GOOGLE_CREDENTIALS to Render

## ⚠️ Common Error
If you see: `SyntaxError: Unexpected non-whitespace character after JSON`

This means the `GOOGLE_CREDENTIALS` environment variable is not formatted correctly.

---

## ✅ Correct Method:

### Step 1: Open credentials.json
Open the `credentials.json` file on your computer (in the project folder).

### Step 2: Copy the ENTIRE content
- Open the file in a text editor (Notepad, VS Code, etc.)
- Select ALL text (Ctrl+A / Cmd+A)
- Copy it (Ctrl+C / Cmd+C)

The content should look like this:
```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "...",
  "client_id": "...",
  "auth_uri": "...",
  "token_uri": "...",
  "auth_provider_x509_cert_url": "...",
  "client_x509_cert_url": "..."
}
```

### Step 3: In Render Environment Variables
1. Go to your Web Service → Environment tab
2. Find `GOOGLE_CREDENTIALS` variable
3. Click to edit
4. **IMPORTANT**: 
   - Paste the JSON directly
   - Do NOT add quotes around it
   - Do NOT escape characters
   - Make sure there are no extra spaces before/after
   - Keep all the `\n` characters in the private_key field

### Step 4: Save
- Click Save
- The deployment will automatically restart

---

## ❌ Common Mistakes:

### DON'T do this:
```
GOOGLE_CREDENTIALS = "{ ... }"
```
(Extra quotes around the JSON)

### DON'T do this:
```
GOOGLE_CREDENTIALS = '{"type": "service_account", ...}'
```
(Single quotes)

### DO this:
```
GOOGLE_CREDENTIALS = {"type": "service_account", ...}
```
(Just the JSON, no quotes)

---

## 🧪 Test it:
After saving, check the Render logs. You should see:
```
✅ Google Sheets auth configured from environment variable
```

If you see an error, check the logs and fix the JSON formatting.

---

## 💡 Alternative: Use Single Line JSON

If multiline JSON doesn't work, you can compress it to a single line:

1. Copy the entire JSON from credentials.json
2. Go to https://jsonformatter.org/ or similar tool
3. Click "Minify" or "Compress"
4. Copy the single-line version
5. Paste it in Render (no quotes)

