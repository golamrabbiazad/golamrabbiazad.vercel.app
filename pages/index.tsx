import { Suspense } from "react";
import Image from "next/image";
import Container from "../components/Container";
import BlogPostCard from "../components/BlogPostCard";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Golamrabbi Azad
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Developer at <span className="font-medium">Manha</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                I enjoy working with best stack MERN or GRAND to build complex
                web applications.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Golamrabbi Azad"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>
          <h3 className="font-bold text-2xl text-black md:text-4xl tracking-tight mb-6 dark:text-white">
            Featured Posts
          </h3>
          <div className="flex flex-col gap-6 md:flex-row">
            <BlogPostCard
              title="Tech Stack"
              slug="tech-stack"
              gredient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="My Gears"
              slug="uses-cases"
              gredient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <BlogPostCard
              title="My Later Gears"
              slug="later-gears"
              gredient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
          </div>
        </div>
      </Container>
    </Suspense>
  );
}
