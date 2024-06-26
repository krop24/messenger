/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'sans-serif'],
      mono: ['Inter', 'sans-serif'],
    },
    extend: {
      rounded: {
        md: '12px',
      },
      colors: {
        gray: {
          100: 'rgba(249,249,249,1)',
        },
        primary: {
          100: 'rgba(28, 41, 75, 40%)',
          300: 'rgba(28, 41, 75, 80%)',
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
