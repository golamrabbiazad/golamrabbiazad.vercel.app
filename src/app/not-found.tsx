import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        451 - Unavailable For Legal Reasons
      </h1>
      <p className="dark;text-gray-400 mb-8 text-gray-600">
        Why show a generic 404 when I can make it sound mysterious? It seems
        you&apos;ve found something that used to exist, or you spelled something
        wrong. I&apos;m guessing you spelled something wrong. Can you double
        check that URL?
      </p>
      <Link
        href="/"
        className="mx-auto rounded-md bg-gray-200 p-1 text-center font-bold text-black sm:p-4 dark:bg-gray-800 dark:text-white"
      >
        Return Home
      </Link>
    </div>
  )
}
