/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "hsl(209, 23%, 22%)",
          200: "hsl(207, 26%, 17%)",
          300: "hsl(200, 15%, 8%)",
          400: "hsl(0, 0%, 52%)",
          500: "hsl(0, 0%, 98%)",
          600: "hsl(0, 0%, 100%)",
        },
      },
      backgroundImage: {
        darkSearchIcon: "url(images/magnifying-glass-solid.svg)",
        lightSearchIcon: "url(images/magnifying-glass-solid-light.svg)",
      },
    },
  },
  plugins: [],
};
