# 🌐 Setting Up shippyar.com/early with GoDaddy & GitHub Pages

This guide will help you connect your GoDaddy domain `shippyar.com` to GitHub Pages and make your questionnaire accessible at `shippyar.com/early`.

## 📋 Prerequisites
- ✅ GoDaddy account with `shippyar.com` domain
- ✅ GitHub repository with your questionnaire files
- ✅ GitHub Pages enabled (we'll set this up)

---

## 🚀 Step-by-Step Instructions

### **Step 1: Prepare Your GitHub Repository**

**Option A: Use the Setup Script (Windows)**
```bash
# Run the setup script
setup-github-pages.bat
```

**Option B: Manual Setup**
1. **Create the `early` folder structure:**
   - Create a folder named `early` in your repository root
   - Copy these frontend files into the `early` folder:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `Logo-v2.png`
     - `wall.png`

2. **Create `CNAME` file** (already created ✅)
   - This file should contain: `shippyar.com`

3. **Update Backend API URL in `script.js`:**
   - Open `early/script.js` (or `script.js` if using root)
   - Find line: `'https://your-backend-domain.com/api/submit-questionnaire'`
   - Replace with your actual backend URL (see **Backend Hosting** section below)

4. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Setup for shippyar.com/early custom domain"
   git push origin main
   ```

**⚠️ Important:** Backend files (`server.js`, `package.json`, etc.) stay in root and won't be served by GitHub Pages (GitHub Pages only serves static files).

---

### **Step 2: Enable GitHub Pages**

1. Go to your GitHub repository: `https://github.com/erfanexperience/Shipyar-questionnaire`
2. Click **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/early` (if you put files in early folder) OR `/ (root)` (if files are in root)
5. Under **Custom domain**, enter: `shippyar.com`
6. Click **Save** - GitHub will create a commit with the CNAME file if needed
7. Wait 1-2 minutes, then check **Enforce HTTPS** (only after DNS is configured and propagated)
8. Click **Save** again

**📝 Important:**
- If files are in `/early` folder → URL will be `shippyar.com/early`
- If files are in root → URL will be `shippyar.com` (you'll need redirects for `/early`)
- The custom domain setting will create/update the CNAME file automatically

---

### **Step 3: Configure DNS in GoDaddy**

1. **Log in to GoDaddy:**
   - Go to [godaddy.com](https://godaddy.com)
   - Sign in to your account

2. **Navigate to DNS Management:**
   - Click **My Products**
   - Find `shippyar.com` and click **DNS** (or **Manage DNS**)

3. **Add/Update DNS Records:**
   
   You need to add **4 A records** and **1 CNAME record**:

   **A Records** (for root domain):
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   TTL: 600 seconds (or Automatic)
   
   Type: A
   Name: @
   Value: 185.199.109.153
   TTL: 600 seconds
   
   Type: A
   Name: @
   Value: 185.199.110.153
   TTL: 600 seconds
   
   Type: A
   Name: @
   Value: 185.199.111.153
   TTL: 600 seconds
   ```

   **CNAME Record** (for www subdomain - optional but recommended):
   ```
   Type: CNAME
   Name: www
   Value: erfanexperience.github.io
   TTL: 600 seconds
   ```

4. **Save the DNS records**
   - Click **Save** after adding each record

---

### **Step 4: Wait for DNS Propagation**

DNS changes can take **24-48 hours** to propagate, but usually happen within 1-4 hours.

**Check DNS propagation:**
- Visit: [whatsmydns.net](https://www.whatsmydns.net/#A/shippyar.com)
- Look for the 4 GitHub IP addresses listed above

---

### **Step 5: Verify Setup**

Once DNS has propagated:

1. **Test your domain:**
   - Visit: `http://shippyar.com/early` (or `http://shippyar.com` if files are in root)
   - You should see your questionnaire

2. **Enable HTTPS in GitHub:**
   - Go back to GitHub Pages settings
   - Check **Enforce HTTPS** (this may take a few minutes after DNS propagates)
   - Your site will now be accessible at `https://shippyar.com/early`

---

## 🔧 Backend Hosting (Required)

**GitHub Pages only serves static files**, so your Node.js backend needs to be hosted separately.

### Backend Hosting Options:

**Option 1: Render.com (Recommended - Free tier available)**
1. Go to [render.com](https://render.com) and sign up
2. Create a new **Web Service**
3. Connect your GitHub repository
4. Set:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add environment variables:
   - `GOOGLE_SHEET_ID`: Your Google Sheet ID
6. Copy the provided URL (e.g., `https://shippyar-backend.onrender.com`)
7. Update `script.js` line with your backend URL

**Option 2: Railway.app**
- Similar setup to Render
- Free tier available

**Option 3: Heroku**
- Requires credit card but has free dynos

**Option 4: Keep Local Backend Running**
- Only works for testing, not production
- Your PC must be always on and accessible

### After Backend is Hosted:
Update the API URL in `script.js`:
```javascript
const apiUrl = isLocalhost 
    ? 'http://localhost:3000/api/submit-questionnaire'
    : 'https://your-actual-backend-url.com/api/submit-questionnaire';
```

---

## 🔧 Alternative Setup (If you want root domain to work)

If you want **both** `shippyar.com` and `shippyar.com/early` to work:

### Option A: Keep files in `/early` folder
- Access: `shippyar.com/early`
- Create an `index.html` in root that redirects to `/early`

### Option B: Use base tag in HTML
- Keep files in root
- Add `<base href="/early/">` in your HTML `<head>`
- Access: `shippyar.com/early`

---

## 🐛 Troubleshooting

### **Domain not working?**
1. Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net/#A/shippyar.com)
2. Verify CNAME file is in your repository
3. Check GitHub Pages settings show "Custom domain: shippyar.com"
4. Wait 24-48 hours for full propagation

### **"Not Secure" warning?**
- Wait for HTTPS to enable automatically (can take up to 24 hours)
- Go to GitHub Pages settings and enable "Enforce HTTPS"

### **404 Error?**
- Check that files are in the correct folder (`/early` or root)
- Verify GitHub Pages is set to the correct source branch/folder

---

## 📞 Need Help?

If you encounter issues:
1. Check GitHub Pages status: Repository → Settings → Pages
2. Verify DNS records in GoDaddy
3. Wait for DNS propagation (be patient!)
4. Check browser console for errors

---

## ✅ Quick Checklist

- [ ] CNAME file created with `shippyar.com`
- [ ] Files moved to `/early` folder (if needed)
- [ ] Committed and pushed to GitHub
- [ ] GitHub Pages enabled with custom domain
- [ ] 4 A records added in GoDaddy DNS
- [ ] DNS propagated (check whatsmydns.net)
- [ ] Site accessible at `shippyar.com/early`
- [ ] HTTPS enabled and working

---

**Last Updated:** October 24, 2025

