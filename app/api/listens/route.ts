import { NextResponse } from "next/server";
import { getScrobbleCount } from "@/lib/lastfm";

export const revalidate = 60;

export async function GET() {
  const scrobbleCount = await getScrobbleCount();

  return NextResponse.json(scrobbleCount, {
    status: 200,
  });
}
