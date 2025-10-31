# 🔧 Fix DNS Configuration in GoDaddy

## ❌ Issues Found:
1. **Missing A Record**: `185.199.109.153` is not present
2. **Conflicting A Record**: "WebsiteBuilder Site" record conflicts with GitHub Pages

## ✅ Steps to Fix:

### Step 1: Delete the Conflicting A Record
1. Find the A record with **Data**: "WebsiteBuilder Site"
2. Click the **three dots (⋯)** on the right
3. Click **Delete**
4. Confirm deletion

### Step 2: Add the Missing A Record
1. Click **Add** button (usually at the top right of the DNS table)
2. Select **Type**: `A`
3. Enter:
   - **Name**: `@` (or leave blank if @ is the only option)
   - **Data**: `185.199.109.153`
   - **TTL**: `600 seconds` (or 1 Hour)
4. Click **Save**

### Step 3: Verify All 4 A Records Exist
You should now have exactly **4 A records** for `@`:
- ✅ `185.199.108.153`
- ✅ `185.199.109.153` ← **This is the missing one**
- ✅ `185.199.110.153`
- ✅ `185.199.111.153`

**No other A records for `@` should exist!**

### Step 4: Optional - Update www CNAME (Recommended)
1. Find the CNAME record for `www` (currently points to `shippyar.com`)
2. Edit it
3. Change **Data** to: `erfanexperience.github.io`
4. Keep **TTL**: `1 Hour`
5. Click **Save**

---

## ⏰ Wait for DNS Propagation

After making changes:
- **Minimum wait**: 10-30 minutes
- **Typical wait**: 1-4 hours
- **Maximum wait**: 24-48 hours

### Check DNS Propagation:
Visit: https://www.whatsmydns.net/#A/shippyar.com

Look for all 4 IPs:
- 185.199.108.153 ✅
- 185.199.109.153 ✅
- 185.199.110.153 ✅
- 185.199.111.153 ✅

---

## 🔄 Then Refresh GitHub Pages

1. Go to: `https://github.com/erfanexperience/Shipyar-questionnaire/settings/pages`
2. Scroll down to **Custom domain**
3. Remove `shippyar.com` (if it's there)
4. Re-enter `shippyar.com`
5. Click **Save**
6. GitHub will check DNS again

---

## ✅ Expected Result

After DNS propagates:
- ✅ GitHub Pages will show: "DNS check successful"
- ✅ Your site will be accessible at `https://shippyar.com/early`
- ✅ HTTPS will be automatically enabled (may take up to 24 hours)

---

## 🐛 Still Not Working?

If after 24 hours it's still not working:

1. **Verify DNS records** match exactly:
   ```
   Type: A, Name: @, Data: 185.199.108.153
   Type: A, Name: @, Data: 185.199.109.153
   Type: A, Name: @, Data: 185.199.110.153
   Type: A, Name: @, Data: 185.199.111.153
   ```

2. **Check for typos** in IP addresses

3. **Clear DNS cache**:
   - Windows: Open Command Prompt as Admin → `ipconfig /flushdns`
   - Mac: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`

4. **Contact GoDaddy Support** if DNS records aren't updating

