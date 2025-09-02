import BlogPost from "@/components/blog-post"
import { allPosts } from 'content-collections'

export default async function Blog() {
  const filteredBlogPosts = allPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )

  return (
    <div className="mx-auto max-w-xl flex-col justify-center py-12 lg:max-w-3xl">
      <h2 className="text-center text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Blog
      </h2>

      {!filteredBlogPosts.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">No posts found.</p>
      )}

      <div className="py-16">
        {allPosts.map((post) => (
          <BlogPost {...post} key={post._meta.path} />
        ))}
      </div>
    </div>
  )
}
