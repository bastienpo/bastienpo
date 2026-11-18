import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: ["dist/**", ".astro/**"],
  env: {
    node: true,
    browser: true,
  },
  plugins: ["typescript", "unicorn", "oxc", "import"],
  overrides: [
    {
      files: ["**/*.astro"],
      env: {
        astro: true,
        node: true,
        browser: true,
      },
    },
  ],
});
