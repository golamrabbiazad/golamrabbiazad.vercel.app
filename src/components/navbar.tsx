import ExternalLink from "@/utils/external-link"

import { MobileMenu } from "@/components/mobile-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { NavItem } from "@/components/nav-item"

export function Navbar() {
  return (
    <div className="mx-auto max-w-2xl py-10">
      <header>
        <div className="flex items-center justify-between">
          <ModeToggle />
          <nav className="text-md space-x-6 font-medium">
            <div>
              <MobileMenu />
              <NavItem href="/" text="Home" />
              <NavItem href="/blog" text="Blog" />
              <ExternalLink
                href="https://github.com/golamrabbiazad?tab=repositories"
                className="rounded-lg p-1 text-gray-600 transition-all hover:bg-slate-200 dark:text-gray-400 dark:hover:bg-slate-800 sm:px-3 sm:py-2 md:inline-block"
              >
                Projects
              </ExternalLink>
              <NavItem href="/work" text="Work" />
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}
