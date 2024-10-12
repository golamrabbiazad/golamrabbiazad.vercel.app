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
          <h4 className="w-full pb-2 text-lg font-bold text-gray-800 underline dark:text-gray-200 md:text-xl">
            {title}
          </h4>
        </div>
        <p className="line-clamp-1 text-gray-600 dark:text-gray-400">
          {summary}
        </p>
      </div>
    </Link>
  )
}
