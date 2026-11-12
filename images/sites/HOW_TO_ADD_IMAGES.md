# How to Add Real Website Screenshots

## Current Status
✅ Placeholder SVG images are showing correctly
📸 You need to replace them with actual screenshots

## Steps to Add Real Screenshots

### 1. Take Screenshots

**VeLogo Website** (https://velogo.lovable.app):
- Open the website in your browser
- Take a screenshot (Windows: Win+Shift+S, or use Snipping Tool)
- Or use browser extension for full-page screenshot
- Save as `velogo.png` (or `.jpg`)

**ReflectAI Website** (https://nbiregister.lovable.app):
- Open the website in your browser
- Take a screenshot
- Save as `reflectai.png` (or `.jpg`)

### 2. Save Screenshots

Save both images in this folder:
```
images/sites/
├── velogo.png     ← Add this file
└── reflectai.png  ← Add this file
```

### 3. Recommended Image Settings

- **Dimensions**: 1600x1000px (16:10 ratio) - or your screen width
- **Format**: PNG or JPG
- **File Size**: Keep under 200KB each
  - Use https://tinypng.com/ to compress if needed
  - Or https://squoosh.app/ for WebP conversion

### 4. The content.js is Already Updated

The `src/content.js` file is already configured to look for `.png` files:
- `/images/sites/velogo.png`
- `/images/sites/reflectai.png`

Once you save the files with these exact names, they'll appear automatically!

### 5. If Using Different Format

If you save as `.jpg` or `.webp`, update `src/content.js`:

Change:
```js
image: "/images/sites/velogo.png",
```

To:
```js
image: "/images/sites/velogo.jpg",  // or .webp
```

## Quick Screenshot Tips

### Windows:
- **Win + Shift + S** - Select area to screenshot
- Screenshots save to clipboard, paste into Paint and save

### Browser Extensions:
- **FireShot** - Full page screenshots
- **GoFullPage** - Scroll and capture entire page
- Most browsers have built-in screenshot tools (F12 → More Tools → Screenshot)

## Need Help?

The SVG placeholders will continue to work until you add the real images.
When ready, just drop the PNG/JPG files in this folder!
