/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Montserrat: "Montserrat",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#121f3d",
        dark_secondary: "#24385b",
        dark_text_primary: "#becde3",
        bg_light_primary: "#F5F9FD",
        border_color: "#24385b",
        gray: "#B7C5D3",
      },
    },
  },
  plugins: [],
}
