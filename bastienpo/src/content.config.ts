import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
	loader: glob({ base: "./src/content/articles", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()),
	}),
});

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			href: z.string().url(),
			image: image(),
			imageAlt: z.string(),
			order: z.number(),
		}),
});

export const collections = { articles, projects };
