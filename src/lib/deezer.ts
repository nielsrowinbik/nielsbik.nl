// Deezer's public search API supplies the artwork for the music page.
// Last.FM drives the rankings, but its own image data is unreliable — album
// covers are often empty and artist images are a placeholder star — so we look
// artwork up here by name. No API key is required.

const API_URL = "https://api.deezer.com";

interface DeezerArtist {
  name: string;
  picture_xl: string;
}

interface DeezerAlbum {
  title: string;
  cover_xl: string;
}

interface DeezerTrack {
  title: string;
  artist: DeezerArtist;
  album: DeezerAlbum;
}

interface DeezerSearchResponse<T> {
  data?: T[];
}

// When Deezer has no image it still returns a URL, but with an empty hash
// segment (e.g. ".../images/artist//1000x1000-....jpg") that renders a grey
// placeholder. Treat those — and empty strings — as misses.
function realImage(url: string | undefined): string | null {
  if (!url) return null;
  if (url.includes("/images/artist//") || url.includes("/images/cover//")) return null;
  return url;
}

async function search<T>(path: string, query: string): Promise<T | null> {
  const url = new URL(`${API_URL}${path}`);
  url.searchParams.set("q", query);
  url.searchParams.set("limit", "1");

  try {
    const res = await fetch(url.href);
    if (!res.ok) return null;
    const data: DeezerSearchResponse<T> = await res.json();
    return data.data?.[0] ?? null;
  } catch {
    return null;
  }
}

export async function getDeezerArtistImage(name: string): Promise<string | null> {
  const artist = await search<DeezerArtist>("/search/artist", name);
  return realImage(artist?.picture_xl);
}

export async function getDeezerAlbumImage(
  artist: string,
  track: string,
): Promise<{ image: string | null; album: string | null }> {
  // Deezer's advanced query is precise; fall back to a loose query on a miss.
  const result =
    (await search<DeezerTrack>("/search", `artist:"${artist}" track:"${track}"`)) ??
    (await search<DeezerTrack>("/search", `${artist} ${track}`));

  return {
    image: realImage(result?.album?.cover_xl),
    album: result?.album?.title ?? null,
  };
}
