import {
  defineCollection,
  defineConfig
} from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx";
import readingTime from "reading-time"
import { z } from "zod";

export const posts = defineCollection({
  name: "posts",
  directory: "./content/posts",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string(),
    image: z.string().optional(),
  }),

  transform: async (document, context) => {
    const readTime = readingTime(document.content).text
    const mdx = await compileMDX(context, document)

    return {
      ...document,
      readTime,
      mdx
    };
  }
})

export default defineConfig({
  collections: [posts]
})
