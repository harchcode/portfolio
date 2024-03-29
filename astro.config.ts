import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: option => ({
    port: option.command === "dev" ? 3121 : 5121
  })
});
