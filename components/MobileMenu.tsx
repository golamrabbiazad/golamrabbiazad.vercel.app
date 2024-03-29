import { useEffect, useState } from "react";
import Link from "next/link";
import cn from "classnames";

import { CrossIcon, MenuIcon } from "./icons";
import useDelayedRender from "lib/use-delayed-render";
import styles from "styles/mobile-menu.module.css";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    { enterDelay: 20, exitDelay: 300 },
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, "visible md:hidden")}
        aria-label="Toggle Menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            "flex flex-col absolute bg-gray-100 dark:bg-gray-900",
            isMenuRendered && styles.menuRendered,
          )}
        >
          <li
            className="border-b border-gray-300 drak:border-gray-700 textr-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/" className="flex w-auto pb-4">
              Home
            </Link>
          </li>
          <li
            className="border-b border-gray-300 drak:border-gray-700 textr-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/blog" className="flex w-auto pb-4">
              Blog
            </Link>
          </li>
          <li
            className="border-b border-gray-300 drak:border-gray-700 textr-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "200ms" }}
          >
            <Link
              href="https://github.com/golamrabbiazad?tab=repositories"
              className="flex w-auto pb-4"
            >
              Projects
            </Link>
          </li>
          <li
            className="border-b border-gray-300 drak:border-gray-700 textr-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/about" className="flex w-auto pb-4">
              About
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
