"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import cn from "classnames"

export function NavItem({ href, text }: { href: string; text: string }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      // @ts-expect-error there is link ov
      href={href}
      scroll={false}
      className={cn(
        isActive
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 dark:text-gray-400",
        "hidden rounded-lg p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-800 sm:px-3 sm:py-2 md:inline-block"
      )}
    >
      <span>{text}</span>
    </Link>
  )
}
