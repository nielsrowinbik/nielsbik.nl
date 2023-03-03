import { NextRequest, NextResponse } from "next/server";

import { getNowPlaying } from "@/lib/spotify";

export async function GET(req: NextRequest) {
  const nowPlaying = await getNowPlaying();

  return NextResponse.json(nowPlaying, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
    },
  });
}
