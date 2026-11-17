# VeLogo Image Instructions

The current velogo.png file is empty (76 bytes). To add the proper VeLoGo cover image:

## Option 1: Screenshot (Easiest)
1. Go to https://velogo.lovable.app
2. Take a full-page screenshot (use browser tools or Windows Snipping Tool)
3. Save it as `velogo.png` in this folder (`images/sites/`)
4. Make sure the file is larger than 1KB to confirm it saved properly

## Option 2: Download OG Image
1. Right-click on the VeLoGo page
2. View Page Source
3. Find the `<meta property="og:image"` tag
4. Copy the URL
5. Download that image and save as `velogo.png` in this folder

## Option 3: Use Existing Screenshot
If you already have a screenshot of the VeLoGo website showing:
- The delivery person on a red scooter
- Orange/yellow sunset background
- "Fast. Tasty. Nigerian." text

Simply copy that image file here and rename it to `velogo.png`.

## Current Status
- File path: `/images/sites/velogo.png`
- Referenced in: `src/content.js` (websites array)
- Expected size: At least 50KB for a good quality screenshot

The portfolio will display this image as the cover photo for the VeLoGo website entry.
