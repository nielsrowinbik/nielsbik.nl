import { NextRequest, NextResponse } from "next/server";

import { getRecentlyPlayed } from "@/lib/spotify";

export async function GET(req: NextRequest) {
  const recentlyPlayed = await getRecentlyPlayed(1);

  return NextResponse.json(recentlyPlayed, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
    },
  });
}
