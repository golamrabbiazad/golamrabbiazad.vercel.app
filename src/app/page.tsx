import Image from "next/image"

export const runtime = "edge"

export default function Home() {
  return (
    <div className="my-32">
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
        <h1 className="text-3xl font-bold tracking-tight text-black drop-shadow-md md:text-5xl dark:text-white dark:drop-shadow-md">
          Hi! I&apos;m Rabbi.
        </h1>
        <p className="text-wrap text-xl text-gray-700 dark:text-gray-200">
          Software Engineer with 3+ years of experience & 🐞 an OSS Contributor.
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          I talk about TypeScript, Next.js, React.js, and JavaScript ecosystems.
        </p>
      </div>

      {/* <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Featured Posts
      </h3> */}
    </div>
  )
}
