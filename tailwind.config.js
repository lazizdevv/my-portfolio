/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          lg: "1320px",
        },
        padding: "20px",
        center: true,
      },
      colors:{
        dark:"#030712",
        accent:"#F9FAFB",
        darkaccent:"#111827"
      }
    },
  },
  plugins: [],
};
