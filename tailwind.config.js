/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peesoGreen: '#11AB63',
        peesoRed: '#CE1127',
        peesoBlue: '#0037A8',
        peesoOffWhite: '#F3F3F3',
        peesoGreenHover: '#0CCC72',
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],  // Now 'Inter' is the default font for sans
      },
    },
  },
  plugins: [],
}

