import { getNowPlaying } from "@/lib/spotify";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getNowPlaying();

  return Response.json(data);
}
