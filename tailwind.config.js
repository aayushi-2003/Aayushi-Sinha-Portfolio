/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily:{
      primary: ['Overpass', 'sans-serif'],
      heading: ['League Spartan', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '75px',
      },
    },
    extend: {
      colors: {
        site: '#070A1E',
        blue_med: '#3e62e7',
        light_white: '#f7fcff',
        purple_light: '#C38BFB',
        purple_med: '#7518D3',
      },
    },
  },


  plugins: [],
}

