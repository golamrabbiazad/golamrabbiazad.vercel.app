import Link from "next/link";
import { PropsWithChildren } from "react";

const ExternalLink = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => (
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
    <footer className="w-full flex flex-col justify-center items-start max-w-2xl mx-auto mt-32">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-4" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-8 justify-items-center sm:grid-cols-2">
        <div className="flex flex-col space-y-2">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
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
      <p className="w-full flex justify-center mx-auto text-gray-500 hover:text-gray-600 transition pb-2">
        &copy; Forked from @leerob.io
      </p>
    </footer>
  );
}
