import { NextRequest, NextResponse } from "next/server";

import { getScrobbleCount } from "@/lib/lastfm";

export async function GET(req: NextRequest) {
  const scrobbleCount = await getScrobbleCount();

  return NextResponse.json(scrobbleCount, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
    },
  });
}
