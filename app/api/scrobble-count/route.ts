import { getScrobbleCount } from "@/lib/lastfm";

export const revalidate = 30;

export async function GET() {
  const data = await getScrobbleCount();

  return Response.json(data);
}
