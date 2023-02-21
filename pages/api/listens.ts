import type { NextApiRequest, NextApiResponse } from "next";

import { getScrobbleCount } from "@/lib/lastfm";
import nc from "next-connect";
import { onError } from "@/lib/api-middlewares/on-error";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError,
});

handler.get(async (req, res) => {
  const scrobbleCount = await getScrobbleCount();

  return res
    .setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=30"
    )
    .json(scrobbleCount);
});

export default handler;
