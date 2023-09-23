/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ['Lexend', 'sans-serif'],
      },
      
      colors:{
        naturalColor: '#181818',
        primaryColor: '#3B44F6',
        pinkColor: '#FC326F',
        ashColor: '#7D7D7D',
        backgroundColor: '#F5F4F9',
        blackBackground: '#0E0E0E',
        footerColor: '#A0A0A0',
      },
    },
  },
  plugins: [],
}

