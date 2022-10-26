/** @type {import('tailwindcss').Config} */

const safeWidth = [];

for (let index = 0; index < 101; index++) {
  safeWidth.push(`before:w-[${index}%]`)
}

module.exports = {
  purge: ['./dist/**/*.html', './public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  safelist: safeWidth,
  theme: {
    extend: {
    },
  },
  plugins: [],
}
