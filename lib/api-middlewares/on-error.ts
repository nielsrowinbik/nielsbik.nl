import type { NextApiRequest, NextApiResponse } from "next";

export function onError(
  error: unknown,
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(error);

  return res.status(500).end();
}
