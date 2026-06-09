/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fbf4e7',
        sand: '#ead8b8',
        gold: '#c99a2e',
        charcoal: '#171717',
        navy: '#111827',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(17, 24, 39, 0.10)',
        glow: '0 22px 70px rgba(201, 154, 46, 0.22)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
