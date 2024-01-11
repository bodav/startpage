import { z, defineCollection } from "astro:content";

const settings = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    theme: z.string(),
    lanUrl: z.string(),
    background: z.object({
      image: z.string(),
      brightness: z.number(),
    }),
    bookmarks: z.array(
      z.object({
        name: z.string(),
        abbr: z.string(),
        url: z.string(),
      })
    ),
  }),
});

export const collections = {
  settings: settings,
};
