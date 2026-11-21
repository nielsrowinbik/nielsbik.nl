import invariant from "tiny-invariant";

invariant(import.meta.env.KOITO_URL, "`KOITO_URL` should be set!");

const base_url = import.meta.env.KOITO_URL;

interface KoitoImage {
  xs: string;
  small: string;
  medium: string;
  large: string;
  xl: string;
}

interface KoitoArtistRef {
  id: number;
  name: string;
}

interface KoitoTrack {
  id: number;
  title: string;
  artists: KoitoArtistRef[];
  image: KoitoImage | null;
}

interface KoitoArtist {
  id: number;
  name: string;
  image: KoitoImage | null;
}

interface KoitoPage<T> {
  items: T[];
}

interface KoitoListen {
  time: string;
  track: KoitoTrack;
}

interface KoitoRanked<T> {
  item: T;
  rank: number;
}

type Period = "week" | "month" | "year" | "all_time";

const PERIODS: Period[] = ["week", "month", "year", "all_time"];

async function get<T>(path: string, params: Record<string, string | number>): Promise<T> {
  const url = new URL(`/apis/web/v1${path}`, base_url);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, `${value}`);
  }

  // The homepage is rendered per request, so without this every page view
  // would hit Koito. Cloudflare caches the response at the edge for 5 minutes
  // (matching the homepage's s-maxage). Outside Workers `cf` is ignored, and
  // it isn't in the standard RequestInit type, hence the separate object.
  const init = { cf: { cacheEverything: true, cacheTtl: 300 } };
  const res = await fetch(url.href, init);
  if (!res.ok) throw new Error(`Koito ${url.pathname} responded with ${res.status}`);
  return res.json();
}

// Koito returns image paths relative to its own host.
function imageUrl(image: KoitoImage | null): string {
  return image ? new URL(image.small, base_url).href : "";
}

type Album = {
  image: string;
};

type Artist = {
  name: string;
};

type Track = {
  name: string;
};

export interface KoitoResponse {
  album: Album;
  artists: Artist[];
  track: Track;
}

function toResponse(track: KoitoTrack): KoitoResponse {
  return {
    album: { image: imageUrl(track.image) },
    artists: track.artists.map(({ name }) => ({ name })),
    track: { name: track.title },
  };
}

export type RecentlyPlayedResponse = KoitoResponse[];

export async function getRecentlyPlayed(limit = 10): Promise<RecentlyPlayedResponse> {
  // Without a period, Koito returns no listens at all.
  const data = await get<KoitoPage<KoitoListen>>("/listens", {
    limit,
    period: "all_time",
  });
  return data.items.map((listen) => toResponse(listen.track));
}

export type TopTracksResponse = KoitoResponse[];

export async function getTopTracks(
  limit = 10,
  period: Period = "week",
): Promise<TopTracksResponse> {
  for (const p of PERIODS.slice(PERIODS.indexOf(period))) {
    const data = await get<KoitoPage<KoitoRanked<KoitoTrack>>>("/top/tracks", {
      limit,
      period: p,
    });
    if (data.items.length > 0) return data.items.map(({ item }) => toResponse(item));
  }
  return [];
}

type TopArtist = {
  name: string;
  image: string;
};

export type TopArtistsResponse = TopArtist[];

export async function getTopArtists(
  limit = 10,
  period: Period = "week",
): Promise<TopArtistsResponse> {
  for (const p of PERIODS.slice(PERIODS.indexOf(period))) {
    const data = await get<KoitoPage<KoitoRanked<KoitoArtist>>>("/top/artists", {
      limit,
      period: p,
    });
    if (data.items.length > 0) {
      return data.items.map(({ item }) => ({
        name: item.name,
        image: imageUrl(item.image),
      }));
    }
  }
  return [];
}
