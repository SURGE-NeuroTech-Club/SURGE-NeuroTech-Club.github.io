import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tutorials' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { tutorials };
