const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  safelist: [
    {
      pattern: /^(bg|text|hover:bg|hover:text|shadow)-(black|white|cyan|emerald)(-\d{3})?$/,
      variants: ['hover'],
    },
    'bg-red-500',
    'hover:bg-red-500',
    'hover:text-white',
    'shadow-redDrop',
    'shadow-blackDrop',
  ],
  theme: {
    extend: {
      boxShadow: {
        redDrop: '5px 5px 0px 5px rgba(255, 0, 0, 1)',
        blackDrop: '5px 5px 0px 5px rgba(0, 0, 0, 1)',
      },
      colors: {
        cyan: colors.cyan,
        emerald: colors.emerald,
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
