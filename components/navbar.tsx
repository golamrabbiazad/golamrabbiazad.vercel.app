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
              <NavItem
                href="https://github.com/golamrabbiazad?tab=repositories"
                text="Projects"
              />
              <NavItem href="/work" text="Work" />
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}
