import {
  defineCollection,
  defineConfig
} from "@content-collections/core"
import readingTime from "reading-time"

export const posts = defineCollection({
  name: "posts",
  directory: "./content/posts",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string(),
    image: z.string().optional(),
  }),

  transform: ({ content, ...posts }) => {

    const readTime = readingTime(content).text

    return {
      ...posts,
      readTime
    };
  }
})

export default defineConfig({
  collections: [posts]
})
