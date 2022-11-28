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
      },
      colors: {
        color1: "#F8EDE3",
        color2: "#DFD3C3",
        color3: "#D0B8A8",
        color4: "#7D6E83"
      }
    }
  },
  plugins: []
};
