/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
      },
      colors: {
        background: '#0a0a0a',
        foreground: '#ededed',
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8'
        },
        surface: {
          DEFAULT: '#171717',
          hover: '#262626'
        }
      }
    },
  },
  plugins: [],
}
