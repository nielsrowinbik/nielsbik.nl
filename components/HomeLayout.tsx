import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface HomeLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export function HomeLayout({ children, className }: HomeLayoutProps) {
  return (
    <div className="grid place-content-around">
      <main
        className={cn(
          "prose prose-zinc m-8 max-w-md prose-a:font-normal prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-hr:my-8 last:prose-hr:hidden dark:prose-invert dark:prose-a:text-blue-400 sm:mt-24 lg:mt-36 xl:mt-48",
          className
        )}
      >
        {children}
      </main>
    </div>
  );
}
