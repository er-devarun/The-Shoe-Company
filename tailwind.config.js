/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'tablet': '950px',
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("active", "active&");
    })
  ],
}

