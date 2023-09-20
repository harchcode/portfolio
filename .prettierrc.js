/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ],
  printWidth: 80,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  useTabs: false,
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "auto"
};
