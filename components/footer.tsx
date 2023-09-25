import { PropsWithChildren } from "react"
import Link from "next/link"

const ExternalLink = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 transition hover:text-gray-600"
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-2xl flex-col items-center">
      <p className="mb-6 flex flex-col items-center">
        Made with 💙 in Joypurhat
        <span>using TypeScript, Next.js, and Vercel.</span>
      </p>
      <p className="mx-auto flex w-full justify-center pb-2 text-gray-700 transition hover:text-gray-500 dark:text-gray-400">
        <Link
          href="https://github.com/golamrabbiazad/golamrabbiazad.vercel.app/"
          target="_blank"
          className="border-b-2 border-b-blue-500"
        >
          view source
        </Link>
      </p>
    </footer>
  )
}
