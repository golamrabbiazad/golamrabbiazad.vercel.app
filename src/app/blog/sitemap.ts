import { MetadataRoute } from "next"
import { allPosts } from "contentlayer/generated"

export default function sitemap(): MetadataRoute.Sitemap {
  return allPosts.map((post) => ({
    url: `https://golamrabbiazad.vercel.app/blog/posts/${post.slug}`,
    lastModified: `${post.publishedAt}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }))
}
