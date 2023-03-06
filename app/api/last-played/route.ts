import { NextResponse } from "next/server";
import { getRecentlyPlayed } from "@/lib/spotify";

export const revalidate = 60;

export async function GET() {
  const recentlyPlayed = await getRecentlyPlayed(1);

  return NextResponse.json(recentlyPlayed, {
    status: 200,
  });
}
