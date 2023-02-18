import "server-only";

import { cache } from "react";
import superagent from "superagent";

const token = process.env.DISCOGS_TOKEN;

export const getCollection = cache(async () => {
  const { body } = await superagent
    .get(
      `https://api.discogs.com/users/nielsbik/collection/folders/0/releases?token=${token}&per_page=100&sort=artist`
    )
    .set("User-Agent", "NielsBikApp/0.0");

  return body.releases;
});

export const getCollectionSize = cache(async () => {
  const collection = await getCollection();

  return collection.length;
});
