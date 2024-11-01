import { allPosts } from "contentlayer/generated"

import BlogPost from "@/components/blog-post"

export const runtime = "edge"

export default function Blog() {
  const filteredBlogPosts = allPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )

  return (
    <div className="mx-auto max-w-xl flex-col justify-center py-12 lg:max-w-2xl">
      <h2 className="text-center text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Blog
      </h2>

      {!filteredBlogPosts.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">No posts found.</p>
      )}

      <div className="py-16">
        {filteredBlogPosts.map((post) => (
          <BlogPost {...post} key={post.slug} />
        ))}
      </div>
    </div>
  )
}
