import Link from "next/link"
import { Post } from "contentlayer/generated"

export default function BlogPost({
  title,
  summary,
  slug,
}: Pick<Post, "title" | "summary" | "slug">) {
  return (
    <Link href={`/posts/${slug}`} className="w-full">
      <div className="mb-8 w-full">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
            {title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{summary}</p>
      </div>
    </Link>
  )
}
