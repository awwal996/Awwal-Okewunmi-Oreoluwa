# 🖼️ Add VeLogo Image - Simple Instructions

## The Problem
The VeLogo image on your portfolio currently shows the Lovable AI platform instead of the VeLogo restaurant delivery app with the person on the red scooter.

## The Solution (2 Minutes)

### Method 1: Screenshot from Browser (EASIEST)

1. **Open VeLogo website:**
   - Go to: https://velogo.lovable.app

2. **Take a screenshot:**
   - **Windows:** Press `Win + Shift + S`
   - Or use Snipping Tool
   - Capture the hero section (the part with the delivery person on red scooter)

3. **Save the screenshot:**
   - Save it as: `velogo.png`
   - Location: `c:\Users\HP\OneDrive\Documents\3d web\images\sites\velogo.png`

4. **Refresh your portfolio:**
   - Go to http://localhost:3000
   - Press `Ctrl + Shift + R` (hard refresh)
   - You should see the scooter image!

---

### Method 2: Right-Click Save Image

1. **Open VeLogo:**
   - Go to: https://velogo.lovable.app

2. **Find the hero image:**
   - Look for the image with the delivery person on red scooter
   - It's on the right side with orange/yellow sunset background

3. **Save the image:**
   - Right-click on the image
   - Select "Save image as..."
   - Save as: `velogo.png`
   - Location: `c:\Users\HP\OneDrive\Documents\3d web\images\sites\`

4. **Refresh portfolio:**
   - http://localhost:3000
   - Hard refresh: `Ctrl + Shift + R`

---

### Method 3: Browser DevTools

1. **Open VeLogo** in Chrome/Edge
2. **Press F12** to open DevTools
3. **Go to Elements tab**
4. **Press Ctrl+F** to search
5. **Search for:** `lovable-uploads`
6. **Find the image URL** that shows the scooter
7. **Copy that full URL**
8. **Open in new tab** and save it
9. **Save to:** `images\sites\velogo.png`

---

## What the Image Should Show

✅ Delivery person wearing orange/red
✅ Red/pink scooter  
✅ Carrying food delivery box  
✅ Orange/yellow sunset background  
✅ "Fast. Tasty. Nigerian." text visible  

❌ NOT the Lovable AI platform logo
❌ NOT a generic placeholder

---

## After Adding the Image

1. Check file size:
   - Should be at least 50KB (not 76 bytes)
   - Ideal: 100-500KB

2. Restart server if needed:
   ```powershell
   Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
   node server.cjs
   ```

3. View your portfolio:
   - http://localhost:3000
   - Scroll to "Websites I've Built" section
   - VeLogo should show the scooter image!

---

## Current File Path

Your image should be saved to:
```
c:\Users\HP\OneDrive\Documents\3d web\images\sites\velogo.png
```

The portfolio code is already configured to use this path. You just need to add the correct image file!

---

## Need Help?

If the image still doesn't show after adding it:
1. Check the file size (should be > 50KB)
2. Make sure the file name is exactly: `velogo.png` (lowercase)
3. Hard refresh browser: `Ctrl + Shift + R`
4. Check browser console (F12) for any errors

---

**Once done, move to Task 2: Connect Supabase** (see CONNECT_SUPABASE.md)
