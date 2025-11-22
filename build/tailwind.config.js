/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../index.html",
    "../src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Colors
        bgDark: '#141517',
        bgPanel: '#1a1b1e',
        bgLighter: '#24272b',
        
        // Accents
        primaryBlue: '#2284d9',
        primaryHover: '#1a6bb3',
        accentPurple: '#bc13fe',
        accentCyan: '#00f3ff',
        
        // Text
        textMain: '#ffffff',
        textMuted: '#c2c2c2',
      },
      fontFamily: {
        heading: ['"Bowlby One SC"', 'sans-serif'],
        body: ['"Roboto"', 'sans-serif'],
        gothic: ['"UnifrakturCook"', 'cursive'],
      },
    },
  },
  plugins: [],
}
