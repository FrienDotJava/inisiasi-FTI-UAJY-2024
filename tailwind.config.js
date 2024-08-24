/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        astrid: ["Astrid", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        sinerva: ["Sinerva", "sans-serif"],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
});

