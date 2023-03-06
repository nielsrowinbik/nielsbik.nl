import { NextResponse } from "next/server";
import { getTopTracks } from "@/lib/spotify";

export const revalidate = 60 * 60 * 24;

export async function GET() {
  const topTracks = await getTopTracks();

  return NextResponse.json(topTracks, {
    status: 200,
  });
}
