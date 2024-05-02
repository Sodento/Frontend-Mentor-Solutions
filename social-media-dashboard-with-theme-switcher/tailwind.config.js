/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "hsl(163, 72%, 41%)",
        200: "hsl(356, 69%, 56%)",
        300: "hsl(208, 92%, 53%)",
        400: "hsl(203, 89%, 53%)",
        500: "hsl(348, 97%, 39%)",
        600: "hsl(230, 22%, 74%)",
        700: "hsl(210, 78%, 56%)",
        800: "hsl(146, 68%, 55%)",
      },

      neutral: {
        dark: {
          100: "hsl(230, 17%, 14%)",
          200: "hsl(232, 19%, 15%)",
          300: "hsl(228, 28%, 20%)",
          400: "hsl(228, 34%, 66%)",
          500: "hsl(0, 0%, 100%)",
        },
        light: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(225, 100%, 98%)",
          300: "hsl(227, 47%, 96%)",
          400: "hsl(228, 12%, 44%)",
          500: "hsl(230, 17%, 14%)",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
