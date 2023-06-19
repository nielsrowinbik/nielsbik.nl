import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://nielsbik.nl/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/about", "/blog"].map((route) => ({
    url: `https://nielsbik.nl${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
