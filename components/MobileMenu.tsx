import { useEffect, useState } from "react";
import cn from "classnames";
import useDelayedRender from "use-delayed-render";
import styles from "styles/mobile-menu.module.css";

import CrossIcon from "./CrossIcon";
import MenuIcon from "./MenuIcon";
import Link from "next/link";

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
            <Link href="/">
              <a className="flex w-auto pb-4">Home</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 drak:border-gray-700 textr-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/blog">
              <a className="flex w-auto pb-4">Blog</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 drak:border-gray-700 textr-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="https://github.com/golamrabbiazad?tab=repositories">
              <a className="flex w-auto pb-4">Projects</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 drak:border-gray-700 textr-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/about">
              <a className="flex w-auto pb-4">About</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}