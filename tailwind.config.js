/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
        serif: ["Mulish", ...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "sm-15": "0.9375rem", //15px
      },
      colors: {
        default: "var(--color-default)",
        primary: "var(--color-primary)",
        textColor: "var(--color-textColor)",
      },
    },
  },
  plugins: [],
};
