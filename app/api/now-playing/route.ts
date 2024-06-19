import { getNowPlaying } from "@/lib/spotify";

export const revalidate = 30;

export async function GET() {
  const data = await getNowPlaying();

  return Response.json(data);
}
