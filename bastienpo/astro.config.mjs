// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://bastienpo.com",
	integrations: [sitemap(), mdx()],

	vite: {
		plugins: [tailwindcss()],
	},

	image: {
		responsiveStyles: true,
	},

	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Nunito Sans",
			cssVariable: "--font-nunito-sans",
		},
	],
});
