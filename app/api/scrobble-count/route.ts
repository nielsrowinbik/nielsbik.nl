import { getScrobbleCount } from "@/lib/lastfm";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getScrobbleCount();

  return Response.json(data);
}
