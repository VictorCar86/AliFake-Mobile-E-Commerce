/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/**/*.html', './public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  plugins: [],
}
