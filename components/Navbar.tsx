"use client";

import { LayoutGroup, motion } from "framer-motion";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems: {
  [path: string]: string;
} = {
  "/": "home",
  "/about": "about",
  "/blog": "blog",
};

export function Navbar() {
  let pathname = (usePathname() as string) || "/";

  if (!navItems[pathname]) {
    pathname = "/blog";
  }

  return (
    <aside className="-mx-4 font-serif md:mx-0 md:w-[150px] md:flex-shrink-0 md:px-0">
      <div className="lg:sticky lg:top-32">
        <nav
          className="fade relative flex scroll-pr-6 flex-row items-start overflow-scroll px-4 pb-0 md:relative md:flex-col md:overflow-auto md:px-0"
          id="nav"
        >
          <div className="mb-2 mt-2 flex flex-row space-x-0 pr-10 md:mt-0 md:flex-col">
            <LayoutGroup>
              {Object.entries(navItems).map(([path, name]) => {
                const isActive = path === pathname;

                return (
                  <Link
                    key={path}
                    href={path}
                    className={cn(
                      "flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
                      {
                        "text-neutral-500": !isActive,
                        "font-bold": isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 z-[-1] rounded-md bg-neutral-100 dark:bg-neutral-800"
                          layoutId="navbar"
                          transition={{
                            duration: 0.2,
                            ease: "easeOut",
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </LayoutGroup>
          </div>
        </nav>
      </div>
    </aside>
  );
}
