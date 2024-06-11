/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        darkestBlue: '#0D1B2A',
        darkBlue: '#1B263B',
        midBlue: '#415A77',
        lightBlue: '#778DA9',
        customBeige: '#E0E1DD',
      }
    },
  },
  plugins: [],
}