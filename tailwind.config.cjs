/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx,ts,js,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bodyColor: "#f5f5f9",
          primaryTextColor: "#696cff",
          primary: "#697a8d",
          green: "#71DD37",
          blue: "#03C3EC",
          red: "#FF3E1D",
          orange: "#FFB621",
        },
      },
    },
  },
  plugins: [],
}
