/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,ts,css}"],
  theme: {
    extend: {
      width: {
        128: "32rem",
        160: "40rem"
      },
      height: {
        128: "32rem",
        160: "40rem"
      },
      screens: {
        sm: "480px"
        // => @media (min-width: 992px) { ... }
      }
    }
  },
  plugins: []
};
