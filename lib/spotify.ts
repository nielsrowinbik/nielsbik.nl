import type {
  AudioFeaturesResponse,
  NowPlayingResponse,
  RecentlyPlayedResponse,
  TopTracksResponse,
} from "types";
import { SpotifyApi, type MaxInt } from "@spotify/web-api-ts-sdk";

import invariant from "tiny-invariant";
import { RefreshTokenStrategy } from "./spotify-auth";
import { spotifetch } from "./fetcher";

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

export async function getAudioFeatures(
  id: string,
): Promise<AudioFeaturesResponse> {
  const spotify = new SpotifyApi(
    new RefreshTokenStrategy(client_id, client_secret, refresh_token),
    {
      fetch: spotifetch({ next: { revalidate: 60 * 60 * 24 * 31 } }),
    },
  );

  const body = await spotify.tracks.audioFeatures(id);

  return {
    beatsPerSecond: body.tempo / 60,
    tempo: body.tempo,
    timeSignature: body.time_signature,
  };
}

export async function getNowPlaying(): Promise<NowPlayingResponse> {
  const spotify = new SpotifyApi(
    new RefreshTokenStrategy(client_id, client_secret, refresh_token),
    {
      fetch: spotifetch({ cache: "no-store" }),
    },
  );

  const { item } = await spotify.player.getCurrentlyPlayingTrack();

  if (!item || "show" in item) {
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
  limit: MaxInt<50> = 10,
): Promise<RecentlyPlayedResponse> {
  const spotify = new SpotifyApi(
    new RefreshTokenStrategy(client_id, client_secret, refresh_token),
    {
      fetch: spotifetch({ next: { revalidate: 60 * 60 * 24 } }),
    },
  );

  const { items } = await spotify.player.getRecentlyPlayedTracks(limit);

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
  limit: MaxInt<50> = 10,
  time_range: TimeRange = "short_term",
): Promise<TopTracksResponse> {
  const spotify = new SpotifyApi(
    new RefreshTokenStrategy(client_id, client_secret, refresh_token),
    {
      fetch: spotifetch({ next: { revalidate: 60 * 60 * 24 * 3 } }),
    },
  );

  const { items } = await spotify.currentUser.topItems(
    "tracks",
    time_range,
    limit,
  );

  return items.map((item) => ({
    album: {
      name: item.album.name,
      image: item.album.images[0].url,
      url: item.album.external_urls.spotify,
    },
    artists: item.artists.map((artist) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
    })),
    track: {
      name: item.name,
      url: item.external_urls.spotify,
    },
  }));
}
