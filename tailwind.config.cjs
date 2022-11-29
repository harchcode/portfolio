/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        color4: "#7D6E83",
        dcolor1: "#2C3639",
        dcolor2: "#3F4E4F",
        dcolor3: "#A27B5C",
        dcolor4: "#DCD7C9"
      }
    }
  },
  plugins: []
};
