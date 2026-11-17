# 🚀 Quick Supabase Connection Guide

Follow these steps to connect your portfolio to Supabase database.

---

## Step 1: Create Supabase Project (5 minutes)

1. Go to **https://supabase.com**
2. Click **"Start your project"** → Sign up (free)
3. Click **"New Project"**
   - **Name**: `okewunmi-portfolio`
   - **Password**: (choose a strong password and save it)
   - **Region**: `Frankfurt` (closest to Nigeria)
4. Click **"Create new project"** and wait 2-3 minutes

---

## Step 2: Create Database Tables

1. In your Supabase dashboard, click **"SQL Editor"** (left sidebar)
2. Click **"New query"**
3. **Copy and paste this entire SQL code**, then click **"Run"**:

```sql
-- Create Projects Table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  problem TEXT NOT NULL,
  approach TEXT NOT NULL,
  result TEXT NOT NULL,
  tools TEXT[] NOT NULL,
  link TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create Websites Table
CREATE TABLE websites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  role TEXT NOT NULL,
  tools TEXT[] NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create Testimonials Table
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  text TEXT NOT NULL,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE websites ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public can view projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public can view websites" ON websites FOR SELECT USING (true);
CREATE POLICY "Public can view testimonials" ON testimonials FOR SELECT USING (true);

-- Insert your current projects
INSERT INTO projects (title, problem, approach, result, tools, link, order_index) VALUES
('Customer Support Chatbot Prompt', 
 'A business needed consistent, polite replies to common questions',
 'Wrote a system prompt with tone rules, fallback behavior, and examples',
 '[Add real result - e.g., Reduced response time by 60%]',
 ARRAY['Claude'],
 '',
 1),
('Product Description Generator',
 'Writing hundreds of descriptions by hand was slow',
 'Built a reusable prompt template with a fixed structure and style guide',
 '[Add real result - e.g., Generated 500+ consistent descriptions in 2 days]',
 ARRAY['ChatGPT'],
 '',
 2),
('Content Planning System',
 '[Add problem description]',
 '[Add approach description]',
 '[Add result description]',
 ARRAY['ChatGPT'],
 '',
 3);

-- Insert your current websites
INSERT INTO websites (title, url, image, description, role, tools, order_index) VALUES
('VeLogo',
 'https://velogo.lovable.app',
 '/images/sites/velogo.png',
 'A restaurant delivery web app for ordering authentic Nigerian dishes delivered hot and fresh to your doorstep.',
 'Designed and built',
 ARRAY['Lovable AI'],
 1),
('ReflectAI',
 'https://nbiregister.lovable.app',
 'https://nbiregister.lovable.app/og-image.png',
 'AI-powered student companion that helps track attendance, share daily experiences, and receive personalized insights to achieve academic goals.',
 'Student tracking system',
 ARRAY['Lovable AI'],
 2);
```

✅ You should see **"Success. No rows returned"**

---

## Step 3: Get Your API Keys

1. Click **"Settings"** (gear icon) → **"API"**
2. Copy these two values:

   **Project URL** (looks like):
   ```
   https://xxxxxxxxxxxxx.supabase.co
   ```

   **anon public** key (under "Project API keys", looks like):
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M...
   ```

---

## Step 4: Update Your Portfolio Code

1. Open the file: **`src/supabase.js`**
2. Find these lines at the top:
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
   ```

3. Replace with your actual keys:
   ```javascript
   const SUPABASE_URL = 'https://xxxxxxxxxxxxx.supabase.co';
   const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
   ```

4. **Save the file**

---

## Step 5: Test It Works

1. **Stop your server** (if running): Press `Ctrl+C` in the terminal
2. **Start server again**: `node server.cjs`
3. **Open**: http://localhost:3000
4. **Open browser console** (press F12)
5. You should see your portfolio load with no errors!

---

## ✅ Done! Now You Can:

### Update Projects from Supabase Dashboard:
1. Go to Supabase → **"Table Editor"** → **"projects"**
2. Click **"Insert row"** or edit existing rows
3. Refresh your portfolio to see changes

### Update Websites:
1. Go to **"websites"** table
2. Add/edit entries
3. Refresh portfolio

### Add Testimonials:
1. Go to **"testimonials"** table
2. Insert new testimonial quotes
3. Refresh portfolio

---

## 🔧 Troubleshooting

**Portfolio shows "Loading..." forever:**
- Open browser console (F12) and check for errors
- Verify both SUPABASE_URL and SUPABASE_ANON_KEY are correctly pasted
- Make sure you removed the quotes around YOUR_SUPABASE_URL

**Changes not showing:**
- Hard refresh: `Ctrl+Shift+R`
- Check the data is in Supabase Table Editor
- Check browser console for errors

---

## 🎯 Benefits

✅ Update content without editing code  
✅ Add testimonials as you receive them  
✅ Reorder projects by changing `order_index`  
✅ Portfolio still works offline (fallback to static content)  
✅ Free forever (500MB database)  

---

**Questions?** Check the full guide in `SUPABASE_SETUP.md`
