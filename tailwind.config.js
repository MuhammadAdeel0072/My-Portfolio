/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0a',
          secondary: '#0f0f0f',
          tertiary: '#161616',
          elevated: '#1c1c1c',
        },
        text: {
          DEFAULT: '#f5f5f5',
          secondary: '#a1a1a1',
          muted: '#5a5a5a',
        },
        accent: {
          DEFAULT: '#6366f1',
          hover: '#818cf8',
          secondary: '#8b5cf6',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          hover: 'rgba(255,255,255,0.14)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-up': 'slideInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundSize: {
        'gradient-200': '200% 200%',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
