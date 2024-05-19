import { getScrobbleCount } from "@/lib/lastfm";

export async function GET() {
  const data = await getScrobbleCount();

  return Response.json(data);
}
