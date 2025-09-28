import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    genre: z.string(),
    fileType: z.string(),
    date: z.string(),
    artwork_url: z.string(),
    download_url: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
};