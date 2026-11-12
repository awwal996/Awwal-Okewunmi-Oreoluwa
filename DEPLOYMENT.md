# Deployment Guide - Step by Step

This guide will walk you through deploying your portfolio to the web for free.

## ✅ Pre-Deployment Checklist

Before deploying, make sure you've:

1. **Updated content in `src/content.js`**
   - [ ] Added your real project examples with results
   - [ ] Added LinkedIn/GitHub URLs (or left empty if not using)
   - [ ] Verified email and phone numbers are correct
   - [ ] Updated tools to match what you actually use

2. **Tested locally**
   ```bash
   npm run dev
   ```
   - [ ] Site loads without errors
   - [ ] All sections display correctly
   - [ ] Contact form opens email correctly
   - [ ] WhatsApp links work
   - [ ] Prompt Lab toggles work

3. **Built for production**
   ```bash
   npm run build
   ```
   - [ ] Build completes without errors
   - [ ] No warnings about large chunks

4. **Tested production build**
   ```bash
   npm run preview
   ```
   - [ ] Site works the same as dev mode
   - [ ] 3D animations are smooth
   - [ ] Check browser console for errors

---

## 🚀 Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Automatic deployments from Git
- Free SSL certificate
- Fast global CDN
- Zero configuration needed

### Method A: Using Vercel Dashboard (Easiest)

1. **Create a GitHub repository**
   - Go to [github.com](https://github.com) and create a new repository
   - Upload your portfolio files or push via Git

2. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and use your GitHub account

3. **Import your project**
   - Click "Add New..." → "Project"
   - Select your portfolio repository
   - Vercel will auto-detect Vite settings

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site is live! You'll get a URL like: `your-portfolio.vercel.app`

5. **Add custom domain (optional)**
   - Go to Project Settings → Domains
   - Add your domain (if you have one)
   - Follow DNS configuration steps

### Method B: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose default options
   - Your site is deployed!

4. **For production deployment**
   ```bash
   vercel --prod
   ```

---

## 🟦 Option 2: Netlify

**Why Netlify?**
- Free hosting with SSL
- Drag-and-drop deployment
- Form handling (if you add backend forms later)

### Method A: Drag and Drop (Fastest)

1. **Build your site**
   ```bash
   npm run build
   ```

2. **Go to Netlify**
   - Visit [netlify.com](https://www.netlify.com)
   - Sign up (free account)

3. **Deploy**
   - Look for the drag-and-drop area on the dashboard
   - Drag your `dist` folder onto it
   - Wait 30 seconds
   - Your site is live!

### Method B: Git Integration

1. **Push to GitHub/GitLab**
   - Create a repository
   - Push your code

2. **Connect to Netlify**
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git provider
   - Select your repository

3. **Configure build**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Get your URL**
   - You'll get a URL like: `random-name-123.netlify.app`
   - Change it: Site Settings → Domain management → Options → Edit site name

---

## 📄 Option 3: GitHub Pages (Free with GitHub)

**Why GitHub Pages?**
- Free if you already use GitHub
- Good for portfolios
- Custom domain support

### Setup Steps

1. **Create GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

2. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

3. **Update `package.json`**
   Add this to the scripts section:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

4. **Update `vite.config.js`**
   Add the base path (replace YOUR-REPO with your repository name):
   ```js
   import { defineConfig } from 'vite';

   export default defineConfig({
     base: '/YOUR-REPO/',
     // ... rest of config
   });
   ```

5. **Deploy**
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

7. **Access your site**
   - URL: `https://YOUR-USERNAME.github.io/YOUR-REPO/`
   - Wait 1-2 minutes for it to go live

---

## ☁️ Option 4: Cloudflare Pages

**Why Cloudflare?**
- Excellent performance
- Free unlimited bandwidth
- Fast global CDN

### Setup Steps

1. **Push to Git**
   - Create a GitHub/GitLab repository
   - Push your code

2. **Sign up for Cloudflare Pages**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com/)
   - Sign up (free)

3. **Create new project**
   - Click "Create a project"
   - Connect your Git account
   - Select your repository

4. **Configure build**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: (leave blank)

5. **Deploy**
   - Click "Save and Deploy"
   - Wait 2-3 minutes
   - Your site is live!

---

## 🌐 Adding a Custom Domain

If you have your own domain (like `okewunmi.com`):

### For Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records at your domain registrar:
   - Type: `A`, Name: `@`, Value: `76.76.21.21`
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

### For Netlify
1. Go to Site Settings → Domain management
2. Add custom domain
3. Update DNS records:
   - Netlify will provide specific DNS records
   - Update at your domain registrar

### For Cloudflare Pages
1. Add domain in Pages settings
2. If domain is on Cloudflare DNS, it's automatic
3. If external, add CNAME record pointing to your Pages URL

---

## 🔧 Continuous Deployment Setup

Once connected to Git (Vercel/Netlify/Cloudflare), updates are automatic:

1. Edit your code locally
2. Commit changes
   ```bash
   git add .
   git commit -m "Update projects section"
   git push
   ```
3. Hosting platform automatically rebuilds and deploys
4. Check your live site in 1-2 minutes

---

## 📊 Testing Your Deployed Site

After deployment, verify:

1. **Load the URL** - Site displays correctly
2. **Test mobile** - Use phone or Chrome DevTools device mode
3. **Check 3D** - Torus knot and shapes render
4. **Test links** - Email and WhatsApp buttons work
5. **Try form** - Contact form opens email client
6. **Check performance** - Run Lighthouse audit:
   - Open Chrome DevTools (F12)
   - Go to Lighthouse tab
   - Run audit
   - Aim for 90+ on Performance

---

## 🆘 Common Issues

### Build Fails on Hosting Platform

**Solution**: Check Node.js version
- Most platforms use Node 18 by default
- If needed, add `.nvmrc` file with content: `18`

### 3D Scene Doesn't Load

**Solution**: Check build output
```bash
npm run build
npm run preview
```
If preview works but deployed site doesn't, it's usually a path issue.

### WhatsApp Links Don't Work

**Solution**: Verify phone format in `src/content.js`:
```js
whatsapp: [
  { number: "09152677511", formatted: "+2349152677511" },
  // ↑ Must include country code with +
]
```

### CSS Not Loading

**Solution**: Clear CDN cache
- Vercel: Redeploy
- Netlify: Settings → Build & deploy → Clear cache and retry deploy
- GitHub Pages: Wait 5 minutes for cache to clear

### Site Too Slow

**Solution**: 
1. Optimize images (compress, resize, use WebP)
2. Check bundle size: `npm run build` - look at chunk sizes
3. Run Lighthouse for specific recommendations

---

## 📈 Post-Deployment

### Share Your Site
- Add to LinkedIn profile
- Include in email signature
- Share on Twitter/X with #buildinpublic
- Submit to portfolio showcases

### Monitor Performance
- Set up Google Analytics (optional)
- Check Lighthouse scores monthly
- Monitor with [PageSpeed Insights](https://pagespeed.web.dev/)

### Regular Updates
- Add new projects as you complete them
- Collect and add testimonials
- Update skills as you learn new tools

---

## 🎉 You're Live!

Your portfolio is now accessible to the world. Share it with potential clients and employers!

**Questions?** Review the main README.md or reach out via the contact methods in your portfolio.

---

**Quick Reference - Deploy Commands**

```bash
# Build locally
npm run build

# Preview build
npm run preview

# Deploy to Vercel (CLI)
vercel --prod

# Deploy to Netlify (CLI)
netlify deploy --prod --dir=dist

# Deploy to GitHub Pages
npm run deploy
```
