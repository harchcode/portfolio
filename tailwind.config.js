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
      }
    }
  }
};
