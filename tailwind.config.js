/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const safeWidth = [];

for (let index = 0; index < 101; index++) {
  safeWidth.push(`before:w-[${index}%]`)
}

const rotateXY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-20': {
      transform: 'rotateX(20deg)',
    },
    '.rotate-x-40': {
      transform: 'rotateX(40deg)',
    },
    '.rotate-x-60': {
      transform: 'rotateX(60deg)',
    },
    '.rotate-x-80': {
      transform: 'rotateX(80deg)',
    },
    '.rotate-x-100': {
      transform: 'rotateX(100deg)',
    },
    '.rotate-x-120': {
      transform: 'rotateX(120deg)',
    },
    '.rotate-x-180': {
      transform: 'rotateX(180deg)',
    },
    '.rotate-y-20': {
      transform: 'rotateY(20deg)',
    },
    '.rotate-y-40': {
      transform: 'rotateY(40deg)',
    },
    '.rotate-y-60': {
      transform: 'rotateY(60deg)',
    },
    '.rotate-y-80': {
      transform: 'rotateY(80deg)',
    },
    '.rotate-y-100': {
      transform: 'rotateY(100deg)',
    },
    '.rotate-y-120': {
      transform: 'rotateY(120deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
});

module.exports = {
  purge: ['./dist/**/*.html', './public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  safelist: safeWidth,
  theme: {
    extend: {
    },
  },
  plugins: [rotateXY],
}
