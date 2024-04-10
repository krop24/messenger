/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['"Inter"', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'sans-serif'],
      mono: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          400: '#1C294B',
        },
        secondary: {
          400: '#9FF5DC',
        },
      },
    },
  },
  plugins: [],
}
