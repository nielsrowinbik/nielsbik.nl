import type { NextApiRequest, NextApiResponse } from "next";

import { getNowPlaying } from "@/lib/spotify";
import nc from "next-connect";
import { onError } from "@/lib/api-middlewares/on-error";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError,
});

handler.get(async (req, res) => {
  const nowPlaying = await getNowPlaying();

  return res
    .setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=30"
    )
    .json(nowPlaying);
});

export default handler;
