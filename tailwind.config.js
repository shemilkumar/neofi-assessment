
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:'#030712',
        light:"#C5C5C5",
        navbar: "#0B0819",
        boxColor: "#111827"
      },
      fontFamily: {
        poppins:['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

