import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { format, parseISO } from "date-fns"

import { Mdx } from "@/components/mdx-component"
import avatar from "@/app/assets/images/profile-photo.png"

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

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {post.title}
      </h1>
      <div className="mb-12 mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            src={avatar}
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
        <p className="mt-2 min-w-32 text-sm text-gray-600 md:mt-0 dark:text-gray-400">
          {post.readingTime.text}
        </p>
      </div>
      <div className="prose dark:prose-invert mt-4 w-full max-w-none">
        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
