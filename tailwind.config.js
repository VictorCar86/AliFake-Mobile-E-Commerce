/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const safeWidth = [];

for (let index = 0; index < 101; index++) {
  safeWidth.push(`before:w-[${index}%]`)
}

const rotateX = plugin(function ({ addUtilities }) {
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
  })
});

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
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
      fontSize: {
        'clamp-xs': 'clamp(0px, 3.2vw, 20px)',
        'clamp-sm': 'clamp(0px, 3.73333vw, 24px)',
        'clamp-base': 'clamp(0px, 4.26666vw, 27px)',
        'clamp-lg': 'clamp(0px, 4.8vw, 30px)',
        'clamp-xl': 'clamp(0px, 5.33333vw, 34px)',
      }
    },
  },
  plugins: [rotateX, rotateY],
}
