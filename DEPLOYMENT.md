# GitHub Pages Deployment Guide

## 🚀 Quick Setup

This repository is configured for GitHub Pages deployment with a custom domain.

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Initial Setup

1. **Clone or copy this repository**
   ```bash
   git clone <your-repo-url>
   cd DriveClubWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
DriveClubWebsite/
├── build/              # Build configuration files
│   ├── vite.config.ts
│   ├── tsconfig.*.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── eslint.config.js
├── dist/               # Production build (deployed to GitHub Pages)
├── src/                # Source code
├── public/             # Static assets
├── CNAME               # Custom domain configuration
└── package.json        # Dependencies and scripts
```

## 🌐 GitHub Pages Configuration

### Custom Domain Setup

This site is configured for the custom domain: **www.drivecityrp.net**

1. In your GitHub repository settings, go to **Pages**
2. Set source to **Deploy from a branch**
3. Select branch: **main** and folder: **/dist**
4. The `CNAME` file in the dist folder will automatically configure your custom domain

### DNS Configuration

In your domain registrar (e.g., Namecheap, GoDaddy), add these DNS records:

```
Type    Host    Value                   TTL
CNAME   www     <your-github-username>.github.io    Automatic
A       @       185.199.108.153         Automatic
A       @       185.199.109.153         Automatic
A       @       185.199.110.153         Automatic
A       @       185.199.111.153         Automatic
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Making Changes

1. **Edit source files** in `src/` directory
2. **Test locally**
   ```bash
   npm run dev
   ```
3. **Build for production**
   ```bash
   npm run build
   ```
4. **Commit and push**
   ```bash
   git add dist/
   git commit -m "Update website"
   git push
   ```

## 📝 Important Notes

- The `dist/` folder is **committed to the repository** (required for GitHub Pages)
- Build configuration files are in the `build/` folder
- Base path is set to `/` for custom domain use
- Always run `npm run build` before committing changes

## 🔧 Troubleshooting

### White Page Issue
If you see a blank white page:
1. Check that `build/vite.config.ts` has `base: '/'` (for custom domain)
2. Rebuild: `npm run build`
3. Commit the updated `dist/` folder
4. Verify CNAME is set correctly in GitHub Pages settings

### Assets Not Loading
1. Verify all paths in `dist/index.html` start with `/` (not `/DriveClubWebsite/`)
2. Check browser console for 404 errors
3. Ensure `dist/` folder is committed to git

### Build Errors
1. Delete `node_modules/` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
2. Check Node.js version: `node -v` (should be v18+)

## 🎨 Customization

- **Colors**: Edit `build/tailwind.config.js`
- **Fonts**: Modify Google Fonts link in `index.html`
- **Components**: Edit files in `src/components/`
- **Images**: Place in `public/` or `src/images/`

## 📦 Production Build

The production build in `dist/` includes:
- Minified HTML, CSS, and JavaScript
- Optimized assets and images
- Code splitting for better performance
- All files ready for deployment

---

**Website**: www.drivecityrp.net  
**Built with**: React + TypeScript + Vite + Tailwind CSS

