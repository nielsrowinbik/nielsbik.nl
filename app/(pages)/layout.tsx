import type { ReactNode } from "react";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <section className="prose prose-neutral text-neutral-800 dark:prose-invert prose-headings:font-serif prose-h1:text-2xl prose-hr:my-6 prose-hr:border-neutral-100 dark:text-neutral-200 prose-hr:dark:border-neutral-800">
      {children}
    </section>
  );
}
