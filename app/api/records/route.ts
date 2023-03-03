import { NextRequest, NextResponse } from "next/server";

import { getCollectionSize } from "@/lib/discogs";

export async function GET(req: NextRequest) {
  const collectionSize = await getCollectionSize();

  // TODO: Increase cache times on this, since my library size will hardly change
  return NextResponse.json(collectionSize, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
    },
  });
}
