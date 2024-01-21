/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily:{
      primary: ['Overpass', 'sans-serif'],
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
        light_white: '#f7fcff',
        purple_light: '#C38BFB',
        purple_med: '#7518D3',
      },
    },
  },


  plugins: [],
}

