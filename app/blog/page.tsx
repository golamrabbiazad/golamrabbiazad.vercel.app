import { allPosts } from "contentlayer/generated"

import BlogPost from "@/components/blog-post"

export const runtime = "edge"

export default function Blog() {
  const filteredBlogPosts = allPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )

  return (
    <div className="mx-auto my-12 max-w-xl flex-col justify-center px-8 lg:max-w-2xl">
      <h2 className="mb-2 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Blog
      </h2>

      <h4 className="mb-4 mt-8 text-2xl font-bold tracking-tight text-black dark:text-gray-200">
        All Posts
      </h4>

      {!filteredBlogPosts.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">No posts found.</p>
      )}

      {filteredBlogPosts.map((post) => (
        <BlogPost {...post} key={post.slug} />
      ))}
    </div>
  )
}
