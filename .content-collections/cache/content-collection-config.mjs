// content-collections.ts
import {
  defineCollection,
  defineConfig
} from "@content-collections/core";
import readingTime from "reading-time";
var posts = defineCollection({
  name: "posts",
  directory: "./content/posts",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string(),
    image: z.string().optional()
  }),
  transform: ({ content, ...posts2 }) => {
    const readTime = readingTime(content).text;
    return {
      ...posts2,
      readTime
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default,
  posts
};
