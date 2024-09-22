import Link from "next/link"
import { Post } from "contentlayer/generated"

export default function BlogPost({
  title,
  summary,
  slug,
}: Pick<Post, "title" | "summary" | "slug">) {
  return (
    <Link href={`/blog/posts/${slug}`} className="w-full">
      <div className="mb-6 w-full">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="mb-2 w-full text-lg font-bold text-gray-800 underline md:text-xl dark:text-gray-200">
            {title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{summary}</p>
      </div>
    </Link>
  )
}
