import Image from "next/image"
import { allPosts } from "content-collections";
import BlogPost from "@/components/blog-post"
import { metadataConfig } from "@/config/metadata";

export const runtime = "edge"

export default function Home() {

  const filteredBlogPosts = allPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )

  return (
    <div className="py-16">
      <div className="max-w-3xl flex flex-col space-y-2 mx-auto">
        <div className="w-[80px] mb-4 sm:w-[176px]">
          <Image
            alt="Golamrabbi Azad"
            height={500}
            width={500}
            src="/assets/images/profile-photo.png"
            sizes="30vw"
            priority
            className="size-full rounded-full object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-black drop-shadow-md dark:text-white dark:drop-shadow-md">
          Hi! I&apos;m Golam Rabbi Azad.
        </h1>
        <p className="text-wrap text-md text-gray-700 dark:text-gray-200">
          {metadataConfig.description}
        </p>
      </div>

      <div className="mx-auto max-w-3xl py-12">
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-2xl underline decoration-blue-500 decoration-wavy underline-offset-4">
          Recent Posts
        </h3>

        <div>
          {filteredBlogPosts.slice(0, 3).map((post) => (
            <BlogPost {...post} key={post._meta.path} />
          ))}
        </div>
      </div>
    </div>
  )
}
