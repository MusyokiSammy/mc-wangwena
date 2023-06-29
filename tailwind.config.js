/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cee2ff",
        "dark-goldish": "#c69a00",
        goldish: "#f5c003",
        "card-blueish": "#091f6f",
        blueish: "#1237b9",
      },
      fontFamily: {
        Caveat: ["Caveat", "cursive"],
        Inconsolata: ["Inconsolata", "monospace"],
        Parisienne: ["Parisienne",'cursive'],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tw-elements/dist/plugin.cjs"),
  ],
};

