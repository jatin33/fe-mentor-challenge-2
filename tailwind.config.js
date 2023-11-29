const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-space-blue": "#00001A",
        "gunmetal": "#5E607A",
        "almost-white": "#FFFDFA",
        "light-vermillion": "#F15D51",
        "somewhat-yellow": "#E9AA52",
        "silver": "#C5C6CE",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};