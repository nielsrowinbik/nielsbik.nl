"use client";

import { LayoutGroup, motion } from "framer-motion";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";

const navItems = {
  "/": "home",
  "/work": "work",
  "/blog": "blog",
} as const;

export function Navbar({ blogPosts }: { blogPosts: number }) {
  let pathname = (usePathname() as string) || "/";

  if (!Object.keys(navItems).includes(pathname)) {
    pathname = "/blog";
  }

  return (
    <aside className="mb-10">
      <nav
        className="relative flex flex-row items-start px-0 pb-0 font-serif"
        id="nav"
      >
        <div className="my-2 mt-0 flex flex-row space-x-0 pr-10">
          <LayoutGroup>
            {Object.entries(navItems)
              .filter(([_, name]) => {
                if (name === "blog" && blogPosts === 0) return false;
                return true;
              })
              .map(([path, name]) => {
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
                      },
                    )}
                  >
                    <span className="relative px-[10px] py-[5px]">
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
    </aside>
  );
}
