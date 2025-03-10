/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["corporate","light","valentine"],
  },
  theme: {
    extend: {
      colors:{
        primary:"#dc2626",
        secondary:"#7480FF",
        light:"#8197f7"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"2rem",
          xl:"5rem",
          "2xl":"6rem"
        }
      }
    },
  },
  plugins: [require('daisyui')],
}