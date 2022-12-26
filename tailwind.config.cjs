/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx,ts,js,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          mainTextColor: "#697a8d",
          bodyColor: "#f5f5f9",
          primaryTextColor:"#696cff"
        },
      },
    },
  },
  plugins: [],
};
