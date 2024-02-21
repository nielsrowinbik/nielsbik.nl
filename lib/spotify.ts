import type {
  AccessTokenResponse,
  AudioFeaturesResponse,
  NowPlayingResponse,
  RecentlyPlayedResponse,
  TopTracksResponse,
} from "types";

import invariant from "tiny-invariant";
import { fetcher } from "./fetcher";

// Refer to https://documenter.getpostman.com/view/583/spotify-playlist-generator/2MtDWP to get a refresh token.
// 1. Open Postman (https://web.postman.co/) and create a new request
// 2. Under Authorization, choose OAuth2.0
// 3. Fill in the following:
//    - Auth URL: https://accounts.spotify.com/authorize
//    - Access Token URL: https://accounts.spotify.com/api/token
//    - Client ID
//    - Client Secret
//    - Scope: `user-read-currently-playing user-read-recently-played user-top-read`
// 4. Click on "Get New Access Token"
// 5. Authorize the request with your account, and get the Refresh Token from Postman

invariant(process.env.SPOTIFY_CLIENT_ID, "`SPOTIFY_CLIENT_ID` should be set!");
invariant(
  process.env.SPOTIFY_CLIENT_SECRET,
  "`SPOTIFY_CLIENT_SECRET` should be set!",
);
invariant(
  process.env.SPOTIFY_REFRESH_TOKEN,
  "`SPOTIFY_REFRESH_TOKEN` should be set!",
);

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const api_url = "https://api.spotify.com/v1";

async function getAccessToken(): Promise<string> {
  const { access_token } = await fetcher<AccessTokenResponse>(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
        client_id,
      }),
    },
  );

  return access_token;
}

export async function getAudioFeatures(
  id: string,
): Promise<AudioFeaturesResponse> {
  const access_token = await getAccessToken();

  const body = await fetcher<SpotifyApi.AudioFeaturesResponse>(
    `https://api.spotify.com/v1/audio-features/${id}`,
    {
      headers: { Authorization: `Bearer ${access_token}` },
      next: { revalidate: 60 * 60 * 24 * 7 },
    },
  );

  return {
    beatsPerSecond: body.tempo / 60,
    tempo: body.tempo,
    timeSignature: body.time_signature,
  };
}

export async function getNowPlaying(): Promise<NowPlayingResponse> {
  const access_token = await getAccessToken();

  const body = await fetcher<SpotifyApi.CurrentlyPlayingResponse>(
    `${api_url}/me/player/currently-playing`,
    {
      headers: { Authorization: `Bearer ${access_token}` },
      next: { revalidate: 60 },
    },
  );

  if (!body) {
    return {
      isPlaying: false,
    };
  }

  const { item } = body;

  if (!item || item.type === "episode") {
    return {
      isPlaying: false,
    };
  }

  const audioFeatures = await getAudioFeatures(item.id);

  return {
    album: {
      name: item.album.name,
      image: item.album.images[0].url,
      url: item.album.external_urls.spotify,
    },
    artists: item.artists.map(({ name, external_urls: { spotify } }) => ({
      name,
      url: spotify,
    })),
    isPlaying: true,
    track: {
      name: item.name,
      url: item.external_urls.spotify,
      ...audioFeatures,
    },
  };
}

export async function getRecentlyPlayed(
  limit: number = 10,
): Promise<RecentlyPlayedResponse> {
  const access_token = await getAccessToken();

  const url = new URL(`${api_url}/me/player/recently-played`);
  url.searchParams.append("limit", limit.toString());

  const { items } = await fetcher<SpotifyApi.UsersRecentlyPlayedTracksResponse>(
    url.href,
    {
      headers: { Authorization: `Bearer ${access_token}` },
      next: { revalidate: 60 * 60 },
    },
  );

  return items.map(({ track }) => ({
    album: {
      name: track.album.name,
      image: track.album.images[0].url,
      url: track.album.external_urls.spotify,
    },
    artists: track.artists.map((artist) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
    })),
    track: {
      name: track.name,
      url: track.external_urls.spotify,
    },
  }));
}

type TimeRange = "short_term" | "medium_term" | "long_term";

export async function getTopTracks(
  limit: number = 10,
  time_range: TimeRange = "short_term",
): Promise<TopTracksResponse> {
  const access_token = await getAccessToken();

  const url = new URL(`${api_url}/me/top/tracks`);
  url.searchParams.append("limit", limit.toString());
  url.searchParams.append("time_range", time_range);

  const { items } = await fetcher<SpotifyApi.UsersTopTracksResponse>(url.href, {
    headers: { Authorization: `Bearer ${access_token}` },
    next: { revalidate: 60 * 60 * 24 },
  });

  return items.map((track) => ({
    album: {
      name: track.album.name,
      image: track.album.images[0].url,
      url: track.album.external_urls.spotify,
    },
    artists: track.artists.map((artist) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
    })),
    track: {
      name: track.name,
      url: track.external_urls.spotify,
    },
  }));
}
