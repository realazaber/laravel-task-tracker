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
        },
        screens: {
          'phone': '640px',   
          'tablet': '768px',   
          'desktop': '1024px',  
        },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
