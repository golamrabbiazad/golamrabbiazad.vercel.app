import Image from "next/image"

import ProjectCard from "@/components/project-card"
import { allPosts } from "contentlayer/generated"

import BlogPost from "@/components/blog-post"

export const runtime = "edge"

export default function Home() {
  const filteredBlogPosts = allPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )

  return (
    <div className="py-32">
      <div className="mx-auto w-[80px] sm:mb-0 sm:w-[176px]">
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

      <div className="mt-8 flex flex-col space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-black drop-shadow-md dark:text-white dark:drop-shadow-md md:text-5xl">
          Hi! I&apos;m Rabbi.
        </h1>
        <p className="text-wrap text-xl italic text-gray-700 dark:text-gray-200">
          Software Engineer with 3+ years of experience, 🐞 OSS Contributor <br /> and an AWS Cloud
          Practitioner.
        </p>
      </div>

      <div className="mx-auto max-w-3xl pt-20">
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
          Latest Projects
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ProjectCard
            title="Olympia Paints"
            description="Paints & Construction Chemical Company"
            slug="https://olympiapaint.com/"
            gredient="from-[#D8B4FE] to-[#818CF8]"
          />
          <ProjectCard
            title="dti"
            description="Development Technology & Ideas LTD."
            slug="https://www.dti-bd.com/"
            gredient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <ProjectCard
            title="keraniganjnews"
            description="The Daily Keraniganj News is local news portal website"
            slug="https://keraniganjnews.com/"
            gredient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
          <ProjectCard
            title="Archviz"
            description="Architectural, Interior, and Industrial design services"
            slug="https://archvizltd.com/"
            gredient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
          <ProjectCard
            title="24onbd"
            description="Aggregated from Bangladeshi all national news portal"
            slug="https://www.24onbd.com/"
            gredient="from-[#6EE7B1] via-[#3A82F2] to-[#9333EB]"
          />
          <ProjectCard
            title="Page Builder"
            description="For building page and layouts management by dragging and drop."
            slug="https://github.com/golamrabbiazad/page-builder-experimental"
            gredient="from-[#D8B4FE] to-[#818CF8]"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl py-12">
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
          Posts
        </h3>

        <div>
          {filteredBlogPosts.slice(0, 3).map((post) => (
            <BlogPost {...post} key={post.slug} />
          ))}
        </div>
      </div>
    </div>
  )
}
