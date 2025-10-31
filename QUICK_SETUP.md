# 🚀 Quick Setup Guide: shippyar.com/early

## ⚡ Fast Track (5 Minutes)

### 1️⃣ Run Setup Script
```bash
setup-github-pages.bat
```

### 2️⃣ Commit to GitHub
```bash
git add .
git commit -m "Setup for shippyar.com/early"
git push origin main
```

### 3️⃣ Enable GitHub Pages
- Go to: `https://github.com/erfanexperience/Shipyar-questionnaire/settings/pages`
- **Branch**: `main`
- **Folder**: `/early`
- **Custom domain**: `shippyar.com`
- Click **Save**

### 4️⃣ Configure DNS in GoDaddy

**In GoDaddy DNS Settings, add these 4 A records:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

**Optional CNAME for www:**
| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | erfanexperience.github.io | 600 |

### 5️⃣ Wait & Test
- Wait 1-4 hours for DNS propagation
- Visit: `https://shippyar.com/early`
- Enable HTTPS in GitHub Pages settings

---

## ⚠️ Important: Backend Hosting

Your Node.js backend **must be hosted separately** because GitHub Pages only serves static files.

**Quick Backend Setup (Render.com):**
1. Sign up at [render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repo
4. Build: `npm install`
5. Start: `npm start`
6. Environment: `GOOGLE_SHEET_ID=your_sheet_id`
7. Copy backend URL
8. Update `script.js` line 1281 with your backend URL

---

## 📋 Checklist

- [ ] Files copied to `/early` folder
- [ ] CNAME file created with `shippyar.com`
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled with `/early` folder
- [ ] 4 A records added in GoDaddy
- [ ] DNS propagated (check [whatsmydns.net](https://www.whatsmydns.net/#A/shippyar.com))
- [ ] Backend hosted (Render/Railway/etc.)
- [ ] Backend URL updated in `script.js`
- [ ] Site accessible at `shippyar.com/early`
- [ ] HTTPS enabled

---

**Need detailed instructions?** See `GODADDY_DNS_SETUP.md`

