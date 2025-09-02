import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { format, parseISO } from "date-fns"
import { allPosts } from "content-collections"

export const dynamicParams = false

interface PostProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const slug = (await params).slug
  const post = allPosts.find((post) => post._meta.path === slug)

  if (!post) return {}

  return {
    title: post.title,
    description: post.summary,
  }
}

export async function generateStaticParams() {
  return allPosts.map(post => ({ slug: post._meta.path }))
}

export default async function PostPage({ params }: PostProps) {
  const slug = (await params).slug
  const post = allPosts.find((post) => post._meta.path === slug)

  if (!post) return notFound()

  const { default: Content } = await import(`@content/posts/${post._meta.path}.mdx`);

  return (
    <article className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-start justify-center">
      <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        {post.title}
      </h2>
      <div className="flex w-full flex-col text-base items-start justify-between mt-4 md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            src={`/assets/images/profile-photo.png`}
            height={24}
            width={24}
            alt="Golamrabbi Azad"
            className="rounded-full"
          />
          <p className="ml-2 text-gray-700 dark:text-gray-300">
            {"Golamrabbi Azad / "}
            {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
          </p>
        </div>
        <p className="min-w-32 text-end text-gray-600 md:mt-0 dark:text-gray-400">
          {post.readTime}
        </p>
      </div>
      <div className="prose dark:prose-invert my-8 min-h-[50dvh] w-full max-w-none">
        <Content />
      </div>
    </article>
  )
}