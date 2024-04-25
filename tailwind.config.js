/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'darkGray' : 'hsl(0, 0%, 59%)',
        'veryDarkGray': 'hsl(0, 0%, 17%)'
      },
      fontFamily:{
        'sans' : ["Rubik", "sans-serif"]
      },
      backgroundImage:{
        'desktop': "url('/src/assets/pattern-bg-desktop.png')",
        'mobile': "url('/src/assets/pattern-bg-mobile.png')",
      }
    },
  },
  plugins: [],
}