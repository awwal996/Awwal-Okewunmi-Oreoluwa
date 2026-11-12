# Project Structure

Complete overview of the portfolio website architecture.

## 📁 Directory Structure

```
okewunmi-portfolio/
├── index.html              # Main HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite build configuration
├── .gitignore              # Git ignore rules
├── .npmrc                  # NPM configuration
├── README.md               # Main documentation
├── DEPLOYMENT.md           # Deployment guide
├── PERFORMANCE.md          # Performance details
├── PROJECT_STRUCTURE.md    # This file
│
├── src/                    # Source files
│   ├── main.js            # App initialization & DOM rendering
│   ├── scene.js           # Three.js 3D scene manager
│   ├── content.js         # Single source of truth for all content
│   └── style.css          # All styles and themes
│
└── dist/                   # Production build (generated)
    ├── index.html
    └── assets/
        ├── index-[hash].css
        ├── index-[hash].js
        └── three-[hash].js
```

## 📄 File Responsibilities

### `index.html`
**Purpose**: HTML skeleton and metadata

**Contains**:
- SEO meta tags (title, description, keywords)
- Open Graph tags for social media
- Google Fonts link
- Canvas element for 3D rendering
- Main app container
- Module script import

**Size**: ~2KB

---

### `src/main.js`
**Purpose**: Application logic and DOM rendering

**Responsibilities**:
- Initialize 3D scene
- Render all page sections dynamically
- Handle Prompt Lab interactivity (toggle views, switch examples)
- Handle contact form submission (mailto generation)
- Escape HTML for security
- Manage app lifecycle

**Key Classes**:
- `PortfolioApp` - Main application controller

**Key Methods**:
- `renderHero()` - Hero section HTML
- `renderAbout()` - About section HTML
- `renderWork()` - Project cards HTML
- `renderPromptLab()` - Interactive prompt comparison
- `renderWorkflow()` - 5-step process HTML
- `renderSkills()` - Skills and tools grid
- `renderTestimonials()` - Testimonials (conditional)
- `renderContact()` - Contact section with form
- `initializePromptLab()` - Setup interactive toggles
- `initializeContactForm()` - Setup mailto functionality

**Size**: ~5KB (minified)

---

### `src/scene.js`
**Purpose**: 3D graphics and WebGL rendering

**Responsibilities**:
- Setup Three.js scene, camera, renderer
- Create and animate torus knot
- Generate 60 floating low-poly shapes
- Handle scroll-based animations
- Handle mouse parallax effect
- Manage color transitions (pink → blue)
- Optimize performance (pause, reduce motion, pixel ratio)
- Cleanup and disposal

**Key Classes**:
- `SceneManager` - Manages entire 3D scene

**Key Methods**:
- `init()` - Setup scene, camera, renderer
- `createTorusKnot()` - Generate main 3D object
- `createFloatingShapes()` - Generate background shapes
- `setupEventListeners()` - Mouse, scroll, resize, visibility handlers
- `updateTorusKnotPosition()` - Responsive positioning
- `animate()` - Main render loop
- `render()` - Single frame render
- `interpolateColor()` - Color transition helper
- `dispose()` - Cleanup resources

**Size**: ~3KB (minified), Three.js chunk: ~130KB

---

### `src/content.js`
**Purpose**: Single source of truth for all portfolio content

**Contains**:
```javascript
{
  name, role, tagline,           // Personal info
  email, phone, whatsapp[],      // Contact details
  social { linkedin, github },   // Social links
  about,                         // About text
  skills[],                      // Skills list
  tools[],                       // Tools list
  projects[],                    // Project cards data
  testimonials[],                // Testimonials (empty by default)
  workflow[],                    // 5-step process
  promptLab[]                    // Before/after examples
}
```

**Data Structures**:
- **Projects**: `{ title, problem, approach, result, tools[], link }`
- **Workflow**: `{ step, title, description }`
- **Prompt Lab**: `{ id, title, weak{prompt, output}, improved{prompt, output} }`
- **Testimonials**: `{ text, name, title }`

**Size**: ~2KB

**To Update**: Edit this file only to change portfolio content!

---

### `src/style.css`
**Purpose**: All styling, theming, and responsive design

**Structure**:
1. **CSS Variables** (lines 1-45)
   - Colors for light/dark mode
   - Spacing scale
   - Typography scale
   - Layout constants
   - Transition timings

2. **Dark Mode** (lines 47-58)
   - `@media (prefers-color-scheme: dark)`

3. **Reduced Motion** (lines 60-68)
   - `@media (prefers-reduced-motion: reduce)`

4. **Base & Reset** (lines 70-100)
   - Box sizing, scroll behavior, body defaults

5. **Canvas** (lines 102-110)
   - Fixed position 3D canvas

6. **Sections** (lines 112-150)
   - Section layout, spacing, vertical rhythm

7. **Typography** (lines 152-195)
   - Headings, paragraphs, responsive font sizes

8. **Components** (lines 197-650)
   - Buttons
   - Hero section
   - About section
   - Project cards
   - Workflow steps
   - Skills grid
   - Prompt Lab
   - Testimonials
   - Contact form
   - Utility classes

**Responsive Breakpoints**:
- `768px` - Tablet/mobile adjustments
- `968px` - Hero layout change

**Size**: ~5KB (minified)

---

### `vite.config.js`
**Purpose**: Build optimization configuration

**Optimizations**:
- ES2015 target (modern browsers)
- Terser minification
- Console.log removal in production
- Code splitting (Three.js separate chunk)
- CSS code splitting
- Chunk size warnings at 600KB

**Size**: Negligible (not included in bundle)

---

### `package.json`
**Purpose**: Project metadata and dependencies

**Scripts**:
- `npm run dev` - Start development server (port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run analyze` - Build with analysis

**Dependencies**:
- `three@^0.160.0` - 3D graphics library

**Dev Dependencies**:
- `vite@^5.0.0` - Build tool and dev server

---

## 🔄 Data Flow

### Initial Load
```
User visits URL
    ↓
index.html loads
    ↓
main.js initializes
    ↓
├─→ SceneManager starts 3D rendering
│   ├─→ Creates torus knot
│   ├─→ Creates floating shapes
│   └─→ Starts animation loop
│
└─→ PortfolioApp renders sections
    ├─→ Reads content.js
    ├─→ Generates HTML for each section
    ├─→ Injects into DOM
    └─→ Initializes interactive components
```

### User Interactions

**Scroll**:
```
User scrolls
    ↓
scene.js detects scroll event
    ↓
├─→ Updates scroll progress (0-1)
├─→ Moves torus knot vertically
├─→ Rotates torus knot
├─→ Moves floating shapes
└─→ Transitions colors (pink → blue)
```

**Mouse Move**:
```
User moves mouse
    ↓
scene.js detects mousemove event
    ↓
├─→ Calculates normalized position (-1 to 1)
└─→ Tilts torus knot based on mouse position
```

**Prompt Lab Toggle**:
```
User clicks example button
    ↓
main.js handles click event
    ↓
├─→ Updates active state
├─→ Changes currentExample
└─→ Re-renders comparison with new data

User clicks view toggle
    ↓
main.js handles click event
    ↓
├─→ Updates active state
├─→ Changes currentView (comparison/before/after)
└─→ Re-renders appropriate boxes
```

**Contact Form**:
```
User fills form and submits
    ↓
main.js prevents default submit
    ↓
├─→ Reads form values (name, needs, budget)
├─→ Encodes data for URL
├─→ Constructs mailto: link
└─→ Opens default email client
```

---

## 🎨 Theming System

### Color System
The site uses CSS variables for consistent theming:

**Light Mode**:
- Background: Soft violet (#f3f0ff)
- Text: Dark blue-gray (#1a1a2e)
- Accent: Pink (#d6336c)
- Secondary: Sky blue (#4fb3d9)

**Dark Mode** (automatic):
- Background: Deep purple (#17143a)
- Text: Off-white (#f5f5f5)
- Accent: Light pink (#ff7aa2)
- Secondary: Bright cyan (#6dd5ed)

**How It Works**:
```css
:root { --accent-primary: #d6336c; }

@media (prefers-color-scheme: dark) {
  :root { --accent-primary: #ff7aa2; }
}

.btn-primary { background: var(--accent-primary); }
```

### Typography Scale
```
--font-size-base:   1.125rem  (18px)
--font-size-lg:     1.5rem    (24px)
--font-size-xl:     2rem      (32px)
--font-size-2xl:    3rem      (48px)
--font-size-3xl:    4rem      (64px)
```

### Spacing Scale
```
--spacing-xs:  0.5rem   (8px)
--spacing-sm:  1rem     (16px)
--spacing-md:  2rem     (32px)
--spacing-lg:  4rem     (64px)
--spacing-xl:  6rem     (96px)
```

---

## 🔧 Component Architecture

### Hero Section
```
<section class="hero">
  <div class="hero-content">
    [Role] [Name] [Tagline] [CTA Buttons]
  </div>
  <div class="hero-visual">
    [3D torus knot renders here]
  </div>
</section>
```

### Project Card
```
<article class="project-card">
  <h3 class="project-title">...</h3>
  <div class="project-section">
    [Problem]
  </div>
  <div class="project-section">
    [Approach]
  </div>
  <div class="project-section">
    [Result]
  </div>
  <div class="project-tools">
    [Tool tags]
  </div>
  [Optional link]
</article>
```

### Prompt Lab
```
<section id="prompt-lab">
  <div class="lab-controls">
    [Example selector buttons]
    [View toggle buttons]
  </div>
  <div id="prompt-comparison">
    [Dynamically rendered comparison boxes]
  </div>
</section>
```

---

## 🚀 Build Process

### Development
```bash
npm run dev
```
1. Vite starts dev server on port 5173
2. Hot Module Replacement (HMR) enabled
3. Source maps included
4. No minification
5. Fast refresh on file changes

### Production Build
```bash
npm run build
```
1. Vite bundles all modules
2. Code splitting (Three.js → separate chunk)
3. Minification with Terser
4. Console.log removal
5. CSS extraction and minification
6. Hash-based filenames for caching
7. Output to `dist/` folder

**Build Output Example**:
```
dist/
├── index.html                        2 KB
└── assets/
    ├── index-a1b2c3d4.css          5 KB (gzipped)
    ├── index-e5f6g7h8.js           5 KB (gzipped)
    └── three-i9j0k1l2.js         130 KB (gzipped)
```

---

## 📦 Dependency Tree

```
Portfolio Website
├── Vite (build tool)
│   ├── Rollup (bundler)
│   ├── esbuild (transpiler)
│   └── Terser (minifier)
│
└── Three.js (3D graphics)
    └── WebGL (browser API)
```

**Why No Framework?**
- Faster load times
- Smaller bundle size
- Direct DOM manipulation
- Full control over rendering
- No runtime overhead

---

## 🎯 Performance Impact

| Component | Size (gzipped) | Load Priority |
|-----------|----------------|---------------|
| HTML | 2 KB | Critical |
| CSS | 5 KB | Critical |
| Main JS | 5 KB | High |
| Three.js | 130 KB | Medium |
| Google Fonts | 20 KB | Low |
| **Total** | **~160 KB** | |

**Render Timeline**:
1. HTML parsed (< 100ms)
2. CSS loaded and applied (< 200ms)
3. Main JS executed (< 300ms)
4. Sections rendered (< 400ms)
5. Three.js loaded (< 1000ms)
6. 3D scene ready (< 1500ms)

---

## 🔄 Update Workflows

### Adding a New Project
1. Open `src/content.js`
2. Add to `projects` array:
   ```javascript
   {
     title: "Project Name",
     problem: "What problem did it solve?",
     approach: "How did you solve it?",
     result: "What was the outcome?",
     tools: ["Tool1", "Tool2"],
     link: "https://..." // optional
   }
   ```
3. Save (no rebuild needed in dev mode)

### Changing Colors
1. Open `src/style.css`
2. Update CSS variables (lines 1-45)
3. Update both light and dark mode variants
4. Colors auto-apply everywhere

### Adding a New Section
1. Open `src/main.js`
2. Create new render method:
   ```javascript
   renderNewSection() {
     return `<section id="new-section">...</section>`;
   }
   ```
3. Add to `render()` method
4. Add corresponding styles in `src/style.css`

---

## 🧪 Testing Checklist

### Before Committing
- [ ] `npm run build` - succeeds without errors
- [ ] `npm run preview` - site works correctly
- [ ] Check console for errors
- [ ] Test on mobile viewport (Chrome DevTools)
- [ ] Verify all links work
- [ ] Check form submission
- [ ] Verify 3D scene renders

### Before Deploying
- [ ] Update content.js with real data
- [ ] Remove placeholder text
- [ ] Add actual project results
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Test on slow network (throttled)
- [ ] Verify WhatsApp links format
- [ ] Check email button works

---

This structure keeps the codebase organized, maintainable, and performant. Each file has a single, clear responsibility.
