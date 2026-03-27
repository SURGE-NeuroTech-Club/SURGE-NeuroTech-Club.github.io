import { defineCollection, z } from 'astro:content';

const tutorials = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { tutorials };
