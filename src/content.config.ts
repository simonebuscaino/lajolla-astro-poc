import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servizi = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/servizi',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    shortDescription: z.string(),
    ctaLabel: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  servizi,
};