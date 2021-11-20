import Link from "next/link";

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-gray-600 transition"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-6" />
      <div className="w-full max-w-2xl flex justify-between p-8">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Contact
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/golamrabbiazad">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/golamrabbiazad/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCuKN7BxgVhK5Sp4wCjhuClw">
            YouTube
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
