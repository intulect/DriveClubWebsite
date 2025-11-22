/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../index.html",
    "../src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#050505', // Deep black
        bgPanel: '#0a0a0a',
        primary: {
          DEFAULT: '#3b82f6', // Blue
          hover: '#2563eb',
          dim: '#1d4ed8',
          glow: 'rgba(59, 130, 246, 0.5)'
        },
        accent: {
          purple: '#a855f7',
          cyan: '#06b6d4',
          red: '#ef4444',
          gold: '#eab308'
        },
        glass: {
          border: 'rgba(255, 255, 255, 0.08)',
          surface: 'rgba(20, 20, 20, 0.6)',
          highlight: 'rgba(255, 255, 255, 0.03)'
        }
      },
      fontFamily: {
        heading: ['"Bowlby One SC"', 'sans-serif'],
        body: ['"Roboto"', 'sans-serif'],
        gothic: ['"UnifrakturCook"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'], // Great for stats/HUD
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #3b82f6 100%)',
        'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      }
    },
  },
  plugins: [],
}
