import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/work",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["Design", "Development", "Data"]),
    publishedAt: z.coerce.date(),

    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    cover: z.string().optional(),
    projectUrl: z.string().url().optional(),
    repositoryUrl: z.string().url().optional(),

    technologies: z.array(z.string()).default([]),
  }),
});

const journal = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/journal",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["Design", "Development", "Data"]),
    publishedAt: z.coerce.date(),

    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  work,
  journal,
};