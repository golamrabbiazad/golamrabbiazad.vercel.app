import { allPosts } from "contentlayer/generated"

import BlogPost from "@/components/blog-post"

export default function Blog() {
  const filteredBlogPosts = allPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )

  return (
    <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Blog
      </h1>

      <h3 className="mb-4 mt-8 text-2xl font-bold tracking-tight text-black dark:text-gray-400">
        All Posts
      </h3>

      {!filteredBlogPosts.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">No posts found.</p>
      )}

      {filteredBlogPosts.map((post) => (
        <BlogPost {...post} key={post.slug} />
      ))}
    </div>
  )
}
