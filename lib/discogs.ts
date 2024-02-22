import { fetcher } from "./fetcher";
import invariant from "tiny-invariant";

invariant(process.env.DISCOGS_TOKEN, "`DISCOGS_TOKEN` should be set!");

const token = process.env.DISCOGS_TOKEN;

export async function getCollection() {
  const url = new URL(
    `https://api.discogs.com/users/nielsbik/collection/folders/0/releases`,
  );
  url.searchParams.append("token", token);
  url.searchParams.append("per_page", "100");
  url.searchParams.append("sort", "artist");

  const body = await fetcher(url.href, {
    headers: {
      "User-Agent": "NielsBikApp/0.0",
    },
    next: { revalidate: 60 * 60 * 24 },
  });

  return body.releases;
}
