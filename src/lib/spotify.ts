import {
  type Album as AlbumObject,
  type Artist as ArtistObject,
  type AudioAnalysis,
  type MaxInt,
  SpotifyApi,
  type Track as TrackObject,
} from "@spotify/web-api-ts-sdk";
import invariant from "tiny-invariant";
import { RefreshTokenStrategy } from "./spotify-auth";

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

const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

invariant(client_id, "`SPOTIFY_CLIENT_ID` should be set!");
invariant(client_secret, "`SPOTIFY_CLIENT_SECRET` should be set!");
invariant(refresh_token, "`SPOTIFY_REFRESH_TOKEN` should be set!");

type Album = {
  name: AlbumObject["name"];
  image: AlbumObject["images"][0]["url"];
  url: AlbumObject["external_urls"]["spotify"];
};

type Artist = {
  name: ArtistObject["name"];
  url: ArtistObject["external_urls"]["spotify"];
};

type Track = {
  name: TrackObject["name"];
  url: TrackObject["external_urls"]["spotify"];
};

type TrackWithAudioFeatures = {
  beatsPerSecond: number;
  name: TrackObject["name"];
  tempo: AudioAnalysis["track"]["tempo"];
  timeSignature: AudioAnalysis["track"]["time_signature"];
  url: TrackObject["external_urls"]["spotify"];
};

export interface SpotifyResponse<T extends Track | TrackWithAudioFeatures> {
  album: Album;
  artists: Artist[];
  track: T;
}

export type RecentlyPlayedResponse = SpotifyResponse<Track>[];

export type TopTracksResponse = SpotifyResponse<Track>[];

export async function getRecentlyPlayed(
  limit: MaxInt<50> = 10,
): Promise<RecentlyPlayedResponse> {
  const spotify = new SpotifyApi(
    new RefreshTokenStrategy(client_id, client_secret, refresh_token),
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
  );

  const { items } = await spotify.currentUser.topItems("tracks", time_range, limit);

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
