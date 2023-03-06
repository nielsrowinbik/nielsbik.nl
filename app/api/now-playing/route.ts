import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/spotify";

export const revalidate = 60;

export async function GET() {
  const nowPlaying = await getNowPlaying();

  return NextResponse.json(nowPlaying, {
    status: 200,
  });
}
