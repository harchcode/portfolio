import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,css,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Grandstander Variable", ...defaultTheme.fontFamily.sans],
        mono: ["Kode Mono Variable", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        1: "0 1px 0 black",
        2: "0 1px 0 white"
      }
    }
  }
};
