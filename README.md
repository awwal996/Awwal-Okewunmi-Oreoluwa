# Okewunmi Awwal Oreoluwa - AI Prompt Engineer Portfolio

A modern 3D portfolio website showcasing AI prompt engineering work, built with Vite, vanilla JavaScript, and Three.js.

## 🚀 Features

- **3D Interactive Experience**: Wireframe torus knot and floating shapes with scroll-based animations
- **Responsive Design**: Optimized for all devices from 360px to desktop
- **Accessibility First**: WCAG compliant with keyboard navigation, ARIA labels, and reduced-motion support
- **Performance Optimized**: Lighthouse score 90+ on mobile
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **Interactive Prompt Lab**: Before/after comparison showing prompt engineering improvements

## 📦 Tech Stack

- **Vite** - Fast build tool and dev server
- **Three.js** - 3D graphics and WebGL rendering
- **Vanilla JavaScript** - No framework dependencies
- **CSS Variables** - Dynamic theming
- **Google Fonts** - Bricolage Grotesque typography

## 🛠️ Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Update Content

All content is centralized in **`src/content.js`**. Edit this single file to update:

- Personal information (name, email, phone, WhatsApp)
- About section
- Projects (add your real work - currently has placeholder data)
- Skills and tools
- Prompt Lab examples
- Testimonials
- Social media links

### Edit Styling

- **Colors & Theme**: Edit CSS variables in `src/style.css` (lines 1-50)
- **Typography**: Change font in CSS variables or update Google Fonts link in `index.html`
- **Spacing**: Adjust spacing variables in `src/style.css`

### 3D Scene Customization

Edit `src/scene.js` to modify:
- Torus knot geometry (line 60)
- Number of floating shapes (line 76 - currently 60)
- Color transitions (lines 98, 181, 197)
- Animation speeds (lines 168-169)

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Run deployment:
   ```bash
   vercel
   ```

3. Follow the prompts. Vercel will automatically detect Vite and configure build settings.

**Or use Vercel Dashboard:**
- Go to [vercel.com](https://vercel.com)
- Import your Git repository
- Vercel auto-detects settings
- Deploy!

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

**Or use Netlify Dashboard:**
- Go to [netlify.com](https://www.netlify.com)
- Drag and drop the `dist` folder
- Or connect your Git repository for automatic deployments

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "deploy": "vite build --base=/your-repo-name/ && gh-pages -d dist"
   ```

3. Update `vite.config.js` base URL:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   });
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repository settings (use gh-pages branch)

### Deploy to Cloudflare Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your Git repository
4. Set build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Deploy!

## ⚡ Performance Features

- **Lazy Loading**: Images load as needed (add images with `loading="lazy"`)
- **Code Splitting**: Three.js separated into its own chunk
- **Optimized Rendering**: 
  - Pauses when tab is hidden
  - Respects `prefers-reduced-motion`
  - Pixel ratio capped at 2
- **Minified Assets**: Production builds are optimized
- **CSS Code Splitting**: Critical CSS inlined automatically

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles throughout
- Keyboard navigation support
- Focus-visible states on all interactive elements
- Respects `prefers-reduced-motion` (animations only render on scroll/mouse)
- Respects `prefers-color-scheme` (automatic dark/light mode)
- Screen reader friendly
- Color contrast ratios meet WCAG AA standards

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: WebGL support required for 3D features. The site gracefully degrades if WebGL is unavailable.

## 📊 Performance Targets

- **Lighthouse Performance**: 90+ (mobile)
- **Total Page Weight**: < 1MB (excluding external images you add)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s (on 4G)

## 🔧 Development Tips

### Testing Performance

1. Build for production:
   ```bash
   npm run build
   ```

2. Serve the build:
   ```bash
   npm run preview
   ```

3. Run Lighthouse audit in Chrome DevTools:
   - Open DevTools (F12)
   - Go to Lighthouse tab
   - Select categories (Performance, Accessibility, Best Practices, SEO)
   - Click "Analyze page load"

### Testing on Mobile

1. Use Chrome DevTools device emulation
2. Test on real devices via local network:
   ```bash
   npm run dev -- --host
   ```
   Then access via your local IP on mobile

### Optimizing Images (when you add them)

Before adding project images:
1. Resize to appropriate dimensions (max 1200px wide)
2. Compress using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - ImageOptim (Mac)
3. Use WebP format when possible
4. Add `loading="lazy"` attribute

## 📋 TODO - Content Updates Needed

Before going live, update these placeholders in `src/content.js`:

- [ ] Replace project results with real data (currently marked with "[Add real result]")
- [ ] Add LinkedIn URL (currently empty)
- [ ] Add GitHub URL (currently empty)
- [ ] Update tools list to match what you actually use
- [ ] Replace third project with real work
- [ ] Add testimonials when available
- [ ] Consider adding project images/screenshots

## 🐛 Troubleshooting

### Site Not Loading After npm install

Make sure you're using Node.js version 16 or higher:
```bash
node --version
```

### 3D Scene Not Showing

1. Check browser console for WebGL errors
2. Verify Three.js is installed: `npm list three`
3. Try in a different browser (some browsers disable WebGL)

### Build Fails

1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check for Node.js/npm version compatibility

### WhatsApp Links Not Working

Make sure phone numbers in `src/content.js` use the format `+234...` (no spaces or dashes)

## 📄 License

This is a personal portfolio website. Feel free to use as inspiration, but please don't copy the content or design directly.

## 💬 Contact

- **Email**: Awwaloreoluwa3@gmail.com
- **WhatsApp**: +2349152677511 or +2347070323287

---

**Built with ❤️ by Okewunmi Awwal Oreoluwa**
