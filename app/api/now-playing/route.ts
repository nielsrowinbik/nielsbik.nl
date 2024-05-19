import { getNowPlaying } from "@/lib/spotify";

export async function GET() {
  const data = await getNowPlaying();

  return Response.json(data);
}
