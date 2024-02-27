import { getBlogPosts } from "@/lib/blog";

function routeToSitemapEntry(route: string) {
  return {
    url: `https://nielsbik.nl${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  };
}

export default async function sitemap() {
  const routes = ["", "/work"].map(routeToSitemapEntry);

  const posts = getBlogPosts().map((post) => ({
    url: `https://nielsbik.nl/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  return [
    ...routes,
    ...(posts.length > 0 ? [routeToSitemapEntry("/blog")] : []),
    ...posts,
  ];
}
