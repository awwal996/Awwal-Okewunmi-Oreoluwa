# Quick Start Guide

Get your portfolio running in 5 minutes!

## ⚡ Fast Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Your site is now running at `http://localhost:5173` 🎉

### 3. Update Your Content

Open **`src/content.js`** and update:

**Must Update**:
- [ ] Projects (replace placeholder results with real data)
- [ ] About text (personalize it)

**Should Update**:
- [ ] LinkedIn URL (if you have one)
- [ ] GitHub URL (if you have one)
- [ ] Tools list (match what you actually use)

**Optional**:
- [ ] Add testimonials when available
- [ ] Customize Prompt Lab examples with your own

### 4. Test Everything

Check these work:
- [ ] Scroll down - 3D elements move and change color
- [ ] Move mouse - torus knot tilts
- [ ] Click Prompt Lab toggles - examples switch
- [ ] Fill contact form - email client opens
- [ ] Click WhatsApp buttons - WhatsApp opens
- [ ] Test on mobile view (Chrome DevTools)

### 5. Build & Deploy

```bash
npm run build
```

Then deploy to:
- **Vercel** (easiest): `vercel` or use dashboard
- **Netlify**: Drag `dist` folder to netlify.com
- **GitHub Pages**: See DEPLOYMENT.md

---

## 🎨 Quick Customization

### Change Colors

Edit `src/style.css` lines 1-45:

```css
:root {
  --accent-primary: #d6336c;     /* Your brand color */
  --accent-secondary: #4fb3d9;   /* Secondary accent */
  --bg-primary: #f3f0ff;         /* Background */
}
```

### Adjust 3D Scene

Edit `src/scene.js`:

- **Line 76**: Change number of floating shapes (currently 60)
- **Line 60**: Modify torus knot geometry
- **Lines 168-169**: Adjust rotation speed

---

## 📂 Important Files

| File | What It Does |
|------|--------------|
| `src/content.js` | **All your portfolio content** (edit this first!) |
| `src/style.css` | Styling and colors |
| `src/main.js` | Page structure and logic |
| `src/scene.js` | 3D graphics |
| `index.html` | HTML shell and meta tags |

---

## 🚨 Common Issues

### Dependencies Won't Install
```bash
# Clear cache and retry
rm -rf node_modules package-lock.json
npm install
```

### 3D Scene Not Showing
- Check browser console for errors
- Make sure WebGL is supported in your browser
- Try a different browser (Chrome recommended)

### Port 5173 Already in Use
```bash
npm run dev -- --port 3000
```

---

## 📚 Full Documentation

- **README.md** - Complete guide
- **DEPLOYMENT.md** - Deploy to production step-by-step
- **PERFORMANCE.md** - Performance details and optimization
- **PROJECT_STRUCTURE.md** - Architecture overview

---

## ✅ Pre-Launch Checklist

Before sharing your portfolio:

- [ ] Updated all content in `src/content.js`
- [ ] Removed "[Add real result]" placeholders
- [ ] Added real LinkedIn/GitHub URLs or left empty
- [ ] Tested contact form (opens email?)
- [ ] Tested WhatsApp buttons (correct format?)
- [ ] Tested on mobile
- [ ] Ran `npm run build` successfully
- [ ] Ran Lighthouse audit (score 90+?)
- [ ] Deployed to hosting platform
- [ ] Visited live URL and tested again

---

## 🎉 You're Ready!

Your portfolio is set up. Now:

1. **Customize** `src/content.js` with your real work
2. **Test** locally to make sure everything works
3. **Deploy** using DEPLOYMENT.md guide
4. **Share** your new portfolio with the world!

Questions? Check the full README.md or reach out via the contact methods in your portfolio.

**Happy building! 🚀**
