# 🗄️ Supabase Database Setup for Your Portfolio

This guide will help you connect your portfolio to Supabase so you can easily update projects, websites, and testimonials without editing code.

## ✅ What You'll Get

- Update projects/websites from a dashboard
- Add testimonials when you receive them
- Reorder items easily
- No code editing needed for content updates
- Portfolio still works if Supabase is down (fallback to static content)

---

## 📋 Step 1: Create Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click **"Start your project"** → **"Sign Up"**
3. Sign up with GitHub or Email (free tier is perfect)
4. Once logged in, click **"New Project"**

### Project Settings:
- **Name**: `okewunmi-portfolio`
- **Database Password**: Choose a strong password (save it somewhere safe!)
- **Region**: Choose closest to you:
  - Europe: `Frankfurt` or `London`
  - Africa: `Frankfurt` (closest to Nigeria)
  - Asia: `Singapore`
- Click **"Create new project"**

⏱️ Wait 2-3 minutes for your project to be ready.

---

## 📊 Step 2: Create Database Tables

Once your project is ready:

1. Click **"SQL Editor"** in the left sidebar
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

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE websites ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public read access (anyone can view)
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
 'https://velogo.lovable.app/og-image.png',
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

✅ You should see "Success. No rows returned" - that's correct!

---

## 🔑 Step 3: Get Your API Keys

1. Click **"Settings"** (gear icon in left sidebar)
2. Click **"API"** under Project Settings
3. You'll see two important values:

### Copy These:

**Project URL**
```
https://xxxxxxxxxxxxx.supabase.co
```

**anon public key** (under "Project API keys")
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M...
```

Keep these safe - you'll need them in the next step!

---

## ⚙️ Step 4: Configure Your Portfolio

Now update your portfolio to use Supabase:

1. Open `src/supabase.js` in your code editor
2. Find these lines at the top:
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
   ```

3. Replace with your actual values:
   ```javascript
   const SUPABASE_URL = 'https://xxxxxxxxxxxxx.supabase.co';
   const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
   ```

4. **Save the file**

---

## 🧪 Step 5: Test It

1. **Restart your local server** (stop and start `node server.cjs`)
2. **Refresh your browser** at http://localhost:3000
3. **Open browser console** (F12) and check for errors
4. Your portfolio should load with the same content (now from Supabase!)

---

## 📝 Step 6: Update Content from Supabase Dashboard

### To Add/Edit Projects:

1. Go to Supabase Dashboard
2. Click **"Table Editor"** in left sidebar
3. Select **"projects"** table
4. Click **"Insert row"** or edit existing rows
5. Fill in the fields:
   - `title`: Project name
   - `problem`: What problem it solved
   - `approach`: How you solved it
   - `result`: The outcome/impact
   - `tools`: `{"Claude", "ChatGPT"}` (array format)
   - `link`: Optional URL
   - `order_index`: Lower numbers appear first (1, 2, 3...)
6. Click **"Save"**
7. **Refresh your portfolio** - changes appear instantly!

### To Add Websites:

1. Go to **"websites"** table
2. Click **"Insert row"**
3. Fill in:
   - `title`: Website name
   - `url`: Live website URL
   - `image`: Screenshot URL or path
   - `description`: What the site does
   - `role`: Your role (e.g., "Designed and built")
   - `tools`: `{"Lovable AI"}` (array format)
   - `order_index`: Display order
4. Save and refresh!

### To Add Testimonials:

1. Go to **"testimonials"** table
2. Click **"Insert row"**
3. Fill in:
   - `text`: The testimonial quote
   - `name`: Client name
   - `title`: Their position/company
   - `order_index`: Display order
4. Save and refresh!

---

## 🎯 Benefits

✅ **Easy Updates**: No code editing needed
✅ **Instant Changes**: Refresh browser to see updates
✅ **Reorder Content**: Just change `order_index` numbers
✅ **Backup**: Your static content still works if Supabase is down
✅ **Free**: 500MB database, 2GB bandwidth/month
✅ **Dashboard**: Visual interface for managing content

---

## 🔒 Security Notes

- ✅ **Row Level Security (RLS)** is enabled
- ✅ **Public can only READ** your content
- ✅ **Only you can EDIT** (when authenticated)
- ✅ **Your API keys are safe** to use in frontend (they're public keys)

---

## 🚀 Next Steps

1. ✅ Complete Steps 1-4 above
2. ✅ Test that your portfolio loads
3. ✅ Edit a project in Supabase and see it update
4. ✅ Deploy your portfolio (Netlify/Vercel)
5. ✅ Add testimonials as you receive them!

---

## ❓ Troubleshooting

**Portfolio shows "Loading portfolio..." forever**
- Check browser console (F12) for errors
- Verify your API keys are correct in `src/supabase.js`
- Make sure you replaced BOTH URL and KEY

**Changes not showing**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check Supabase table has the data
- Check browser console for errors

**Need help?**
- Supabase Docs: https://supabase.com/docs
- Your portfolio works without Supabase (falls back to static content)

---

## 📊 Your Database Structure

```
projects
├── id (auto-generated)
├── title
├── problem
├── approach
├── result
├── tools (array)
├── link (optional)
├── order_index (controls display order)
└── created_at (auto-generated)

websites
├── id (auto-generated)
├── title
├── url
├── image
├── description
├── role
├── tools (array)
├── order_index
└── created_at (auto-generated)

testimonials
├── id (auto-generated)
├── text
├── name
├── title
├── order_index
└── created_at (auto-generated)
```

---

**You're all set!** Complete the steps above and your portfolio will be connected to Supabase. 🎉
