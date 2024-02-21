import { cache } from "react";
import { fetcher } from "./fetcher";
import invariant from "tiny-invariant";

invariant(process.env.LAST_FM_API_KEY, "`LAST_FM_API_KEY` should be set!");

const api_url = new URL("https://ws.audioscrobbler.com/2.0/");
api_url.searchParams.append("api_key", process.env.LAST_FM_API_KEY);
api_url.searchParams.append("format", "json");

export const getScrobbleCount = cache(async () => {
  const url = new URL(api_url);
  url.searchParams.append("method", "user.getinfo");
  url.searchParams.append("user", "nielsrowinbik");

  const body = await fetcher(url.href, { next: { revalidate: 60 } });

  return +body.user.playcount;
});

export const getScrobbleCountForArtist = cache(async (artist: string) => {
  const url = new URL(api_url);
  url.searchParams.append("method", "artist.getinfo");
  url.searchParams.append("artist", artist);
  url.searchParams.append("username", "nielsrowinbik");

  const body = await fetcher(url.href);

  return +body.artist.stats.userplaycount;
});

type Period = "overall" | "7day" | "1month" | "3month" | "6month" | "12month";

export const getTopAlbums = cache(async (period: Period = "7day") => {
  const url = new URL(api_url);
  url.searchParams.append("method", "user.gettopalbums");
  url.searchParams.append("user", "nielsrowinbik");
  url.searchParams.append("limit", "5");
  url.searchParams.append("period", period);

  const body = await fetcher(url.href);

  return body.topalbums.album;
});
