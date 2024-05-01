/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "hsl(0, 0%, 100%)",
        200: "hsl(0, 0%, 0%)",
        300: "hsl(0, 0%, 55%)",
        400: "hsl(0, 0%, 41%)",
      },
    },
    fontFamily: {
      alata: ["Alata", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('images/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
