import { fetcher } from "./fetcher";
import invariant from "tiny-invariant";

invariant(process.env.LAST_FM_API_KEY, "`LAST_FM_API_KEY` should be set!");

const api_url = new URL("https://ws.audioscrobbler.com/2.0/");
api_url.searchParams.append("api_key", process.env.LAST_FM_API_KEY);
api_url.searchParams.append("format", "json");

export async function getScrobbleCount() {
  const url = new URL(api_url);
  url.searchParams.append("method", "user.getinfo");
  url.searchParams.append("user", "nielsrowinbik");

  const body = await fetcher(url.href, {
    next: { revalidate: 60 },
  });

  return +body.user.playcount;
}

type Period = "overall" | "7day" | "1month" | "3month" | "6month" | "12month";

export async function getTopAlbums(period: Period = "7day") {
  const url = new URL(api_url);
  url.searchParams.append("method", "user.gettopalbums");
  url.searchParams.append("user", "nielsrowinbik");
  url.searchParams.append("limit", "5");
  url.searchParams.append("period", period);

  const body = await fetcher(url.href, { next: { revalidate: 60 * 60 * 24 } });

  return body.topalbums.album;
}
