import { fetcher } from "./fetcher";
import invariant from "tiny-invariant";

invariant(process.env.DISCOGS_TOKEN, "`DISCOGS_TOKEN` should be set!");

const token = process.env.DISCOGS_TOKEN;

export async function getCollectionCount() {
  const url = new URL(
    `https://api.discogs.com/users/nielsbik/collection/folders/0`,
  );
  url.searchParams.append("token", token);

  const body = await fetcher(url.href, {
    headers: {
      "User-Agent": "NielsBikApp/0.0",
    },
    next: { revalidate: 60 * 60 * 24 },
  });

  return body.count;
}
