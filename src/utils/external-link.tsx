import { PropsWithChildren } from "react"

const ExternalLink = ({
  href,
  className,
  children,
}: PropsWithChildren<{ href: string; className?: string }>) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </a>
)

export default ExternalLink
