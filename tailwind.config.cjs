/* eslint-disable global-require */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        display: ['var(--font-oswald)', ...fontFamily.sans],
      },
      colors: {
        oldyellow: {
          DEFAULT: '#FEED00',
        },
        oldpink: {
          DEFAULT: '#FF65BE',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
