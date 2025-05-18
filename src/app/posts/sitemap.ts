import { MetadataRoute } from "next"
import { allPosts } from "content-collections"

export default function sitemap(): MetadataRoute.Sitemap {
  return allPosts.map((post) => ({
    url: `https://golamrabbiazad.vercel.app/posts/${post._meta.path}`,
    lastModified: `${post.publishedAt}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }))
}
