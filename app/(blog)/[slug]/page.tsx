import Balancer from "react-wrap-balancer";
import type { Metadata } from "next";
import { format, formatDistance } from "date-fns";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../../mdx-components";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `https://nielsbik.nl${image}`
    : `https://nielsbik.nl/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://nielsbik.nl/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://nielsbik.nl/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: PageProps) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const components = useMDXComponents({});

  return (
    <article className="prose">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://nielsbik.nl${post.metadata.image}`
              : `https://nielsbik.nl/api/og?title=${post.metadata.title}`,
            url: `https://nielsbik.nl/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Niels Bik",
            },
          }),
        }}
      />
      <Balancer
        as="h1"
        className="mb-0 max-w-[650px] font-serif text-2xl font-bold"
      >
        {post.metadata.title}
      </Balancer>
      <div className="mb-8 mt-1 grid max-w-[650px] grid-cols-[auto_1fr_auto] items-center text-sm text-neutral-600 dark:text-neutral-400">
        <div>
          {format(new Date(post.metadata.publishedAt), "d MMMM yyyy")} (
          {formatDistance(new Date(post.metadata.publishedAt), new Date(), {
            addSuffix: true,
          })}
          )
        </div>
        <div />
        <div>{post.metadata.readingTime.text}</div>
      </div>
      {/* @ts-expect-error */}
      <MDXRemote components={components} source={post.content} />
    </article>
  );
}
