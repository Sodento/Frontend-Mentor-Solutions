/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "hsl(193, 38%, 86%)",
          200: "hsl(150, 100%, 66%)",
        },
        neutral: {
          100: "hsl(217, 19%, 38%)",
          200: "hsl(217, 19%, 24%)",
          300: "hsl(218, 23%, 16%)",
        },
      },
      boxShadow: {
        "3xl": "shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
      }
    },
  },
  plugins: [],
};
