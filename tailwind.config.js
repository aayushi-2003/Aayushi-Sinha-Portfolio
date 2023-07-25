/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily:{
      primary: ['Work Sans', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '65px',
      },
    },
    extend: {
      colors: {
        site: '#070A2E',
        blue_med: '#3e62e7',
      },
    },
  },


  plugins: [],
}

