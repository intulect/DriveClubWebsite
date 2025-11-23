# DriveCity RP

![DriveCity RP Banner](images/logo.png)

**Next Generation Roleplay Experience.**
A high-performance, immersive web experience for DriveCity RP, designed with a dark, neon-infused aesthetic that reflects the underground atmosphere of the city.

## ⚡ Features

-   **Cinematic Visuals**: Custom glassmorphism UI, dynamic gradients, and smooth parallax effects.
-   **Interactive Elements**:
    -   Live Javascript Countdown to launch.
    -   Expandable Gallery Accordion.
    -   Scroll-triggered reveal animations.
-   **Modern Tech Stack**:
    -   **Tailwind CSS**: For utility-first styling and responsive design.
    -   **Vanilla JS**: Lightweight, zero-dependency logic for maximum performance.
    -   **HTML5**: Semantic and accessible structure.
-   **Responsive**: Fully optimized for all devices, from ultrawide monitors to mobile phones.

## 📂 Project Structure

```
/
├── index.html      # Main landing page (Hero, Features, Gallery, Team)
├── rules.html      # Server rules and guidelines
├── status.html     # System status and maintenance page
├── 404.html        # Custom error page
├── css/
│   └── style.css   # Custom animations and Tailwind overrides
├── js/
│   └── script.js   # Interactive logic (Countdown, Gallery, UI)
├── images/         # Assets
└── CNAME           # Custom domain config
```

## 🚀 Deployment

This site is static and can be deployed anywhere (GitHub Pages, Vercel, Netlify).

1.  **Push** changes to the `main` branch.
2.  **GitHub Pages** is configured to serve from the root directory.
3.  Live URL: [https://www.drivecityrp.net](https://www.drivecityrp.net)

## 🛠 Customization Guide

### Changing the Launch Date
Open `js/script.js` and find:
```javascript
const targetDate = new Date("Feb 1, 2026 00:00:00").getTime();
```
Update the date string to your desired launch time.

### Updating Gallery Items
In `js/script.js`, modify the `galleryData` array:
```javascript
const galleryData = [
    {
        id: 1,
        title: "Your Title",
        category: "Category",
        img: "image-url.jpg",
        desc: "Description here..."
    },
    // ...
];
```

### Theme Colors
Colors are defined in the Tailwind config script within the `<head>` of each HTML file.
```javascript
colors: {
    bgDark: '#050505',
    primary: '#3b82f6', // Change this hex code
    accent: '#06b6d4',
    // ...
}
```

---

&copy; 2025 DriveCity RP. Designed by Intulect.
