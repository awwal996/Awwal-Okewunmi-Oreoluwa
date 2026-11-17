# 🚀 Deploy Your Portfolio to Vercel

Complete guide to deploy your 3D portfolio to Vercel for free hosting.

---

## 📋 Prerequisites

Before deploying, make sure you have:
- ✅ Git repository initialized (you do!)
- ✅ GitHub account (or create one at https://github.com)
- ✅ All files committed to git
- ⏳ VeLogo image added (optional, can add later)
- ⏳ Supabase connected (optional, can add later)

---

## 🎯 Option 1: Deploy via Vercel Website (EASIEST - 5 minutes)

### Step 1: Push Your Code to GitHub

1. **Go to GitHub:** https://github.com
2. **Create new repository:**
   - Click the **"+"** icon → **"New repository"**
   - Name: `okewunmi-portfolio`
   - Visibility: **Public** (or Private, your choice)
   - **DO NOT** initialize with README (you already have files)
   - Click **"Create repository"**

3. **Copy the repository URL** (looks like):
   ```
   https://github.com/YOUR_USERNAME/okewunmi-portfolio.git
   ```

4. **Open PowerShell in your project folder** and run these commands:

```powershell
# Add all your files to git
git add .

# Commit your changes
git commit -m "Initial portfolio deployment"

# Add GitHub as remote (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/okewunmi-portfolio.git

# Push to GitHub
git push -u origin master
```

**Note:** If it asks for credentials, use your GitHub username and a **Personal Access Token** (not password). 
- Get token at: https://github.com/settings/tokens → Generate new token (classic) → Select "repo" scope

---

### Step 2: Deploy on Vercel

1. **Go to Vercel:** https://vercel.com

2. **Sign up / Log in:**
   - Click **"Sign Up"**
   - Choose **"Continue with GitHub"**
   - Authorize Vercel to access your GitHub

3. **Import your repository:**
   - Click **"Add New..."** → **"Project"**
   - Find your **"okewunmi-portfolio"** repository
   - Click **"Import"**

4. **Configure project:**
   - **Project Name:** `okewunmi-portfolio` (or your preferred name)
   - **Framework Preset:** Select **"Vite"**
   - **Build Command:** `npm run build` (should be auto-detected)
   - **Output Directory:** `dist` (should be auto-detected)
   - **Install Command:** `npm install`

5. **Environment Variables (if Supabase is connected):**
   - Click **"Environment Variables"**
   - Add these if you've set up Supabase:
     - `VITE_SUPABASE_URL` = Your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY` = Your Supabase anon key
   - *(Skip this if you haven't connected Supabase yet)*

6. **Click "Deploy"** 🚀

7. **Wait 1-2 minutes** for deployment to complete

8. **Your portfolio is live!** 🎉
   - You'll get a URL like: `https://okewunmi-portfolio.vercel.app`
   - Click it to view your live portfolio!

---

## 🎯 Option 2: Deploy via Vercel CLI (Alternative)

If you prefer using the command line:

1. **Install Vercel CLI:**
```powershell
npm install -g vercel
```

2. **Deploy:**
```powershell
# Navigate to your project folder
cd "c:\Users\HP\OneDrive\Documents\3d web"

# Login to Vercel
vercel login

# Deploy (follow the prompts)
vercel --prod
```

3. **Answer the prompts:**
   - Set up and deploy? **Y**
   - Which scope? (Select your account)
   - Link to existing project? **N**
   - Project name: **okewunmi-portfolio**
   - Directory: **./** (press Enter)
   - Override settings? **N**

4. **Wait for deployment** - you'll get a live URL!

---

## 🔄 How to Update Your Live Site

After making changes to your portfolio:

### Method 1: Via Git Push (Automatic)
```powershell
# Make your changes, then:
git add .
git commit -m "Update portfolio content"
git push
```
Vercel will automatically detect the push and redeploy! ✨

### Method 2: Via Vercel CLI
```powershell
vercel --prod
```

---

## 🌐 Your Live URLs

After deployment, you'll get:

1. **Production URL:** `https://okewunmi-portfolio.vercel.app`
2. **Preview URLs:** Every push gets a unique preview URL
3. **Custom Domain:** You can add your own domain later (e.g., okewunmi.com)

---

## 🔧 Common Issues & Solutions

### Issue 1: Build Failed
**Solution:** Check that your project builds locally first:
```powershell
npm run build
```
If it fails locally, fix the errors before deploying.

---

### Issue 2: Images Not Showing
**Solution:** Make sure all image paths are relative:
- ✅ Good: `/images/sites/velogo.png`
- ❌ Bad: `c:\Users\HP\...`

---

### Issue 3: Supabase Not Working
**Solution:** Add environment variables in Vercel dashboard:
1. Go to your project on Vercel
2. Click **"Settings"** → **"Environment Variables"**
3. Add your Supabase credentials

---

## 📊 After Deployment

### Share Your Portfolio:
- ✅ Add the URL to your LinkedIn profile
- ✅ Include it in your email signature
- ✅ Share on social media
- ✅ Add to your resume/CV

### Monitor Your Site:
- **Vercel Dashboard:** Track visitors, performance
- **Analytics:** Vercel provides basic analytics
- **Domains:** Add custom domain in Vercel settings

---

## 🎨 Customize Your Domain (Optional)

Want a custom domain like `okewunmi.com` instead of `.vercel.app`?

1. **Buy a domain:** Namecheap, Google Domains, etc.
2. **In Vercel Dashboard:**
   - Go to your project
   - Click **"Settings"** → **"Domains"**
   - Click **"Add"**
   - Enter your domain
   - Follow DNS configuration instructions
3. **Wait for DNS propagation** (5-30 minutes)
4. **Your portfolio is now at your custom domain!** 🎉

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All code is committed to git
- [ ] VeLogo image is added (or remove from content.js temporarily)
- [ ] Supabase credentials are configured (or skip for now)
- [ ] Test locally at http://localhost:3000
- [ ] No errors in browser console (F12)
- [ ] Contact info (email, WhatsApp) is correct
- [ ] Project descriptions are complete

---

## 🆘 Need Help?

**Vercel Documentation:** https://vercel.com/docs
**Vercel Support:** https://vercel.com/support

**Common Commands:**
```powershell
# Check git status
git status

# View remote repository
git remote -v

# Check Vercel deployment logs
vercel logs

# View your deployments
vercel ls
```

---

## 🎉 You're Almost There!

Follow Option 1 above to deploy your portfolio to Vercel. Once deployed:

1. Share your live URL with potential clients
2. Update content via Supabase dashboard
3. Push code changes - Vercel auto-deploys
4. Monitor performance in Vercel dashboard

**Your portfolio will be live at:** `https://okewunmi-portfolio.vercel.app` 🚀

---

**Questions?** Check DEPLOYMENT.md for more hosting options, or the Vercel docs linked above.
