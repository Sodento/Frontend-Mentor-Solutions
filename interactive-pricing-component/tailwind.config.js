/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Manrope"],
    },
    colors: {
      primary: {
        100: "hsl(174, 77%, 80%)",
        200: "hsl(174, 86%, 45%)",
        300: "hsl(14, 92%, 95%)",
        400: "hsl(15, 100%, 70%)",
        500: "hsl(226, 100%, 87%)",
      },
      neutral: {
        100: "hsl(0, 0%, 100%)",
        200: "hsl(230, 100%, 99%)",
        300: "hsl(224, 65%, 95%)",
        400: "hsl(223, 50%, 87%)",
        500: "hsl(225, 20%, 60%)",
        600: "hsl(227, 35%, 25%)",
      },
    },
    extend: {
      backgroundImage: {
        "bg-pattern": "url('images/bg-pattern.svg')",
        "icon-slider": "url('images/icon-slider.svg')",
        "pattern-circles": "url('images/pattern-circles.svg')",
      },
    },
  },
  plugins: [],
};
