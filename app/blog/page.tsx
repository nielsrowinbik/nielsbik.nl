import Link from "next/link";
import type { Metadata } from "next";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
  alternates: {
    canonical: "https://nielsbik.nl/blog",
  },
};

export default async function BlogPage() {
  if (allBlogs.length === 0) return notFound();

  return (
    <section className="prose prose-neutral text-neutral-800 dark:prose-invert prose-headings:font-serif dark:text-neutral-200">
      <h1>Blog</h1>
      <div className="not-prose contents">
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post._id}
              className="mb-4 flex flex-col space-y-1 text-inherit"
              href={`/${post.slug}`}
            >
              <div className="flex w-full flex-col">
                <p className="font-medium">{post.title}</p>
                <p className="font-mono text-sm text-neutral-500">
                  {post.readingTime.text}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
