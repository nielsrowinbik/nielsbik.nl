import { NextRequest, NextResponse } from "next/server";

import { getTopTracks } from "@/lib/spotify";

export async function GET(req: NextRequest) {
  const topTracks = await getTopTracks();

  return NextResponse.json(topTracks, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
    },
  });
}
