import { getBlogPosts } from "@/lib/blog";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://nielsbik.nl/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/work", "/blog"].map((route) => ({
    url: `https://nielsbik.nl${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
