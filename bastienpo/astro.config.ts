import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    sitemap(),
    mdx(),
    icon({
      include: {
        "simple-icons": ["github"],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
