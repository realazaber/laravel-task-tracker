/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:
        {
          "pri": "#0070FF",
          "sec": "#FFE135",
          "thir": "#E60026",
          "accent": "#565454"
        }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
