import invariant from "tiny-invariant";

invariant(import.meta.env.LAST_FM_API_KEY, "`LAST_FM_API_KEY` should be set!");

const api_url = new URL("https://ws.audioscrobbler.com/2.0/");
api_url.searchParams.append("api_key", import.meta.env.LAST_FM_API_KEY);
api_url.searchParams.append("format", "json");

interface LastFmImage {
  size: "small" | "medium" | "large" | "extralarge";
  "#text": string;
}

interface LastFmTrack {
  name: string;
  url: string;
  mbid: string;
  artist: { mbid: string; "#text": string };
  album: { mbid: string; "#text": string };
  image: LastFmImage[];
  streamable: string;
  date?: { uts: string; "#text": string };
  "@attr"?: { nowplaying: "true" };
}

interface LastFmRecentTracksResponse {
  recenttracks: {
    track: LastFmTrack[];
    "@attr": {
      user: string;
      totalPages: string;
      page: string;
      perPage: string;
      total: string;
    };
  };
}

type Album = {
  name: string;
  image: string;
};

type Artist = {
  name: string;
};

type Track = {
  name: string;
  url: string;
};

export interface LastFmResponse {
  album: Album;
  artists: Artist[];
  track: Track;
}

export type RecentlyPlayedResponse = LastFmResponse[];

export async function getRecentlyPlayed(limit = 10): Promise<RecentlyPlayedResponse> {
  const url = new URL(api_url);
  url.searchParams.append("method", "user.getrecenttracks");
  url.searchParams.append("user", "nielsrowinbik");
  url.searchParams.append("limit", `${limit}`);

  const body = await fetch(url.href);
  const data: LastFmRecentTracksResponse = await body.json();

  return data.recenttracks.track.map((track) => ({
    album: {
      name: track.album["#text"],
      image: track.image.find((i) => i.size === "extralarge")?.["#text"] ?? "",
    },
    artists: [{ name: track.artist["#text"] }],
    track: {
      name: track.name,
      url: track.url,
    },
  }));
}

interface LastFmTopTrack {
  name: string;
  url: string;
  mbid: string;
  artist: { name: string; url: string; mbid: string };
  image: LastFmImage[];
  streamable: { fulltrack: string; "#text": string };
  duration: string;
  playcount: string;
  "@attr": { rank: string };
}

interface LastFmTopTracksResponse {
  toptracks: {
    track: LastFmTopTrack[];
    "@attr": {
      user: string;
      totalPages: string;
      page: string;
      perPage: string;
      total: string;
    };
  };
}

type Period = "overall" | "7day" | "1month" | "3month" | "6month" | "12month";

const PERIODS: Period[] = ["7day", "1month", "3month", "6month", "12month", "overall"];

export type TopTracksResponse = LastFmResponse[];

async function fetchTopTracks(limit: number, period: Period): Promise<TopTracksResponse> {
  const url = new URL(api_url);
  url.searchParams.append("method", "user.gettoptracks");
  url.searchParams.append("user", "nielsrowinbik");
  url.searchParams.append("limit", `${limit}`);
  url.searchParams.append("period", period);

  const body = await fetch(url.href);
  const data: LastFmTopTracksResponse = await body.json();

  return data.toptracks.track.map((track) => ({
    album: {
      name: "",
      image: track.image.find((i) => i.size === "extralarge")?.["#text"] ?? "",
    },
    artists: [{ name: track.artist.name }],
    track: {
      name: track.name,
      url: track.url,
    },
  }));
}

export async function getTopTracks(
  limit = 10,
  period: Period = "7day",
): Promise<TopTracksResponse> {
  for (const p of PERIODS.slice(PERIODS.indexOf(period))) {
    const results = await fetchTopTracks(limit, p);
    if (results.length > 0) return results;
  }
  return [];
}
