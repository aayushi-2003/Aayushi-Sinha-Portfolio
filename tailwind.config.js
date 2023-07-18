/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily:{
      primary: ['Work Sans', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '150px',
      },
    },
    extend: {
      colors: {
        site: '#000D2E',
      },
    },
  },


  plugins: [],
}

