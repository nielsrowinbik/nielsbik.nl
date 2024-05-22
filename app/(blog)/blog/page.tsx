import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on product management, design, and more.",
  alternates: {
    canonical: "https://nielsbik.nl/blog",
  },
};

export default async function BlogPage() {
  const allBlogs = getBlogPosts();

  if (allBlogs.length === 0) return notFound();

  return (
    <section className="prose prose-neutral text-neutral-800 dark:prose-invert prose-headings:font-serif prose-p:text-pretty dark:text-neutral-200">
      <h1 className="text-2xl">My blog</h1>
      <div className="not-prose contents">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="mb-4 flex flex-col space-y-1 text-inherit"
              href={`/${post.slug}`}
            >
              <div className="flex w-full flex-col">
                <p className="font-medium">{post.metadata.title}</p>
                <p className="font-mono text-sm text-neutral-500">
                  {post.metadata.readingTime.text}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
