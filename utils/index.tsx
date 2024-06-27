import { PropsWithChildren } from "react"

export const ExternalLink = ({
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
