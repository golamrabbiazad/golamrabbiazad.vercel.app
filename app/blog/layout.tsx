import { PropsWithChildren, ReactNode } from "react"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { allPosts, Post } from "contentlayer/generated"
import { format, parseISO } from "date-fns"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) return null

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) return {}

  return {
    title: post.title,
    description: post.summary,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function BlogLayout({
  params,
  children,
}: PostProps & { children: ReactNode }) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        {post.title}
      </h1>
      <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            src="/avatar.jpg"
            height={24}
            width={24}
            alt="Golamrabbi Azad"
            className="rounded-full"
          />
          <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            {"Golamrabbi Azad / "}
            {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
          </p>
        </div>
        <p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
          {post.readingTime.text}
        </p>
      </div>
      <div className="prose dark:prose-dark mt-4 w-full max-w-none">
        {children}
      </div>
    </article>
  )
}
