import ExternalLink from "@/utils/external-link"

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-2xl flex-col items-center py-8">
      <p className="mb-4 flex flex-col items-center">
        Made with 💙 in Joypurhat
        <span>using TypeScript, Next.js, and Vercel.</span>
      </p>
      <p className="mx-auto flex w-full justify-center text-gray-700 transition hover:text-gray-500 dark:text-gray-400">
        <ExternalLink
          href="https://github.com/golamrabbiazad/golamrabbiazad.vercel.app/"
          className="underline decoration-blue-500 decoration-wavy underline-offset-4"
        >
          view source
        </ExternalLink>
      </p>
    </footer>
  )
}
