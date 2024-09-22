import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { format, parseISO } from "date-fns"

import { Mdx } from "@/components/mdx-compnent"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slug === slug)

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
    slug: post.slug.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) return notFound()

  return (
    <article className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-start justify-center">
      <h2 className="text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {post.title}
      </h2>
      <div className="flex w-full flex-col items-start justify-between space-y-8 md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            src={`/assets/images/profile-photo.png`}
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
        <p className="min-w-32 text-end text-sm text-gray-600 md:mt-0 dark:text-gray-400">
          {post.readingTime.text}
        </p>
      </div>
      <div className="prose dark:prose-invert mt-8 min-h-[50dvh] w-full max-w-none">
        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
