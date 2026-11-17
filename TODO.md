# ✅ Portfolio Setup Checklist

## 1. VeLogo Image (DO THIS FIRST)

The VeLogo cover image was showing the wrong image (Lovable AI platform). You need to add the correct VeLogo restaurant image.

**📋 SEE DETAILED GUIDE: `ADD_VELOGO_IMAGE.md`**

**Quick Steps:**
1. Go to https://velogo.lovable.app in your browser
2. Take a screenshot showing the delivery person on red scooter (Win+Shift+S)
3. Save as: `images/sites/velogo.png`
4. File should show: delivery person, red scooter, orange sunset background
5. Refresh browser (Ctrl+Shift+R)

**Current Status:**
- ❌ Previous image showed Lovable AI platform (removed)
- ✅ Path is configured in src/content.js
- ⏳ Waiting for you to add the CORRECT VeLogo restaurant image

---

## 2. Supabase Database Connection (DO THIS SECOND)

Follow the guide in **`CONNECT_SUPABASE.md`** (5-10 minutes):

### Quick Steps:
1. ❌ Create free Supabase account at https://supabase.com
2. ❌ Create new project named "okewunmi-portfolio"
3. ❌ Run the SQL code (copy from CONNECT_SUPABASE.md)
4. ❌ Copy your Project URL and API key
5. ❌ Paste them into `src/supabase.js` (replace YOUR_SUPABASE_URL and YOUR_SUPABASE_ANON_KEY)
6. ❌ Restart server: `node server.cjs`
7. ❌ Test at http://localhost:3000

**Current Status:**
- ✅ supabase.js file is ready
- ✅ Database structure is defined
- ✅ Code has error handling (works without Supabase)
- ⏳ Waiting for you to add your Supabase credentials

---

## 3. Test Everything

After completing steps 1 and 2:

### Local Testing:
- ❌ VeLogo image shows correctly
- ❌ All sections load (Hero, About, Work, Websites, Prompt Lab, Skills, Contact)
- ❌ No errors in browser console (F12)
- ❌ 3D fly-through works smoothly
- ❌ Scrolling up and down works

### Supabase Testing:
- ❌ Go to Supabase Table Editor
- ❌ Edit a project title
- ❌ Refresh portfolio - see the change
- ❌ Add a testimonial in Supabase
- ❌ Refresh portfolio - it appears

---

## 4. Deploy Portfolio (OPTIONAL - Do Later)

See **`DEPLOYMENT.md`** for deployment options:
- Netlify Drop (easiest, drag & drop)
- Vercel (recommended)
- GitHub Pages

---

## Current Server Status

Your portfolio is running at: **http://localhost:3000**

To restart the server:
```powershell
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
node server.cjs
```

---

## Files You Need to Edit

1. **`images/sites/velogo.png`** - Replace with actual screenshot
2. **`src/supabase.js`** - Add your Supabase URL and API key (lines 8-9)

That's it! Everything else is already configured.

---

## Questions?

- **VeLogo Image**: See `images/sites/VELOGO_IMAGE_INSTRUCTIONS.md`
- **Supabase Setup**: See `CONNECT_SUPABASE.md`
- **Full Supabase Docs**: See `SUPABASE_SETUP.md`
- **Deployment**: See `DEPLOYMENT.md`
