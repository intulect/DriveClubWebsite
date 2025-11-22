# DriveCity RP Website

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.drivecityrp.net)](https://www.drivecityrp.net)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-38B2AC)](https://tailwindcss.com/)

Modern, responsive website for DriveCity RP - A FiveM roleplay server.

## 🌟 Features

- **Modern Design**: Sleek, dark-themed UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance**: Built with Vite for lightning-fast load times
- **TypeScript**: Type-safe code for better maintainability
- **Tailwind CSS**: Utility-first CSS for rapid development

## 🚀 Quick Start

### Prerequisites
- Node.js v18 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
DriveClubWebsite/
├── build/              # Build configuration files
│   ├── vite.config.ts          # Vite configuration
│   ├── tsconfig.*.json         # TypeScript configs
│   ├── tailwind.config.js      # Tailwind configuration
│   ├── postcss.config.js       # PostCSS configuration
│   └── eslint.config.js        # ESLint rules
├── dist/               # Production build (GitHub Pages deployment)
├── src/
│   ├── components/     # React components
│   │   ├── Header.tsx
│   │   ├── Countdown.tsx
│   │   ├── Features.tsx
│   │   ├── Developers.tsx
│   │   ├── Gallery.tsx
│   │   └── Footer.tsx
│   ├── images/         # Local images
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── CNAME               # Custom domain configuration
└── package.json
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.18
- **Icons**: React Icons 5.5.0
- **Routing**: React Router DOM 7.9.6

## 🎨 Customization

### Colors
Edit colors in `build/tailwind.config.js`:
```js
colors: {
  bgDark: '#141517',
  bgPanel: '#1a1b1e',
  primaryBlue: '#2284d9',
  accentPurple: '#bc13fe',
  // ... more colors
}
```

### Components
All components are in `src/components/`:
- `Header.tsx` - Navigation bar
- `Countdown.tsx` - Server launch countdown
- `Features.tsx` - Feature showcase
- `Developers.tsx` - Developer profiles
- `Gallery.tsx` - Image gallery
- `Footer.tsx` - Footer with links

### Fonts
Google Fonts are loaded in `index.html`:
- **Bowlby One SC** - Headings
- **Roboto** - Body text
- **UnifrakturCook** - Gothic accents

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:5173 |
| `npm run build` | Build for production (output to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🌐 Deployment

This project is configured for **GitHub Pages** with a custom domain.

**📖 See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.**

### Quick Deploy

1. Build the project:
   ```bash
   npm run build
   ```

2. Commit the `dist/` folder:
   ```bash
   git add dist/
   git commit -m "Deploy website"
   git push
   ```

3. Configure GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / Root folder

## 🐛 Troubleshooting

### White Page Issue
- Verify `build/vite.config.ts` has `base: '/'`
- Rebuild: `npm run build`
- Check browser console for errors

### Dependencies Error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
- Ensure Node.js version is 18+
- Clear cache: `npm cache clean --force`

## 📄 License

This project is private and proprietary.

## 🔗 Links

- **Website**: [www.drivecityrp.net](https://www.drivecityrp.net)
- **Repository**: [GitHub](https://github.com/yourusername/DriveClubWebsite)

---

Built with ❤️ for the DriveCity RP community
