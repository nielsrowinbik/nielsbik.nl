"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems: {
  [path: string]: {
    name: string;
    x: number;
    y: number;
    w: string;
  };
} = {
  "/": {
    name: "home",
    x: 0,
    y: 0,
    w: "64px",
  },
  "/about": {
    name: "about",
    x: 64,
    y: 35,
    w: "65px",
  },
  "/blog": {
    name: "blog",
    x: 127,
    y: 69,
    w: "56px",
  },
};

export function Navbar() {
  let pathname = (usePathname() as string) || "/";

  if (!navItems[pathname]) {
    pathname = "/blog";
  }

  return (
    <aside className="-mx-4 font-serif md:mx-0 md:w-[150px] md:flex-shrink-0 md:px-0">
      <div className="lg:sticky lg:top-20">
        <nav
          className="relative flex scroll-pr-6 flex-row items-start overflow-scroll px-4 pb-0 md:relative md:flex-col md:overflow-auto md:px-0"
          id="nav"
        >
          <div className="mb-2 mt-2 flex flex-row space-x-0 pr-10 md:mt-0 md:flex-col">
            {navItems[pathname] ? (
              <>
                {/* Desktop version, hidden on mobile, animates y axis */}
                <div className="hidden md:block">
                  <motion.div
                    className="absolute z-[-1] h-[34px] rounded-md bg-neutral-100 dark:bg-neutral-800"
                    layoutId="test2"
                    initial={{ opacity: 0, y: navItems[pathname].y }}
                    animate={{
                      opacity: 1,
                      y: navItems[pathname].y,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
                {/* Mobile version, hidden on desktop, animates x axis */}
                <div className="block md:hidden">
                  <motion.div
                    className="absolute z-[-1] h-[34px] rounded-md bg-neutral-100 dark:bg-neutral-800"
                    layoutId="test"
                    initial={{ opacity: 0, x: navItems[pathname].x }}
                    animate={{
                      opacity: 1,
                      x: navItems[pathname].x,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
              </>
            ) : null}

            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;

              return (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    "py-[5px] px-[10px] transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
                    {
                      "text-neutral-500": !isActive,
                      "font-bold": isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
