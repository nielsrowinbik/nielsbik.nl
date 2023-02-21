import type { NextApiRequest, NextApiResponse } from "next";

import { getCollectionSize } from "@/lib/discogs";
import nc from "next-connect";
import { onError } from "@/lib/api-middlewares/on-error";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError,
});

handler.get(async (req, res) => {
  const collectionSize = await getCollectionSize();

  return res
    .setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=30"
    )
    .json(collectionSize);
});

export default handler;
