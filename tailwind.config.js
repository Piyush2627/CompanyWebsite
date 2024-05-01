/** @type {import('tailwindcss').Config} */
const TailwindColorSchemea = require("./src/assets/styles/TailwindColorsSchema");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: TailwindColorSchemea,
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
