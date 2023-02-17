import type {
  AccessTokenResponse,
  AudioFeaturesResponse,
  NowPlayingResponse,
  RecentlyPlayedResponse,
  TopTracksResponse,
} from "types";

import qs from "querystring";
import superagent from "superagent";

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

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

async function getAccessToken(): Promise<string> {
  const { body } = await superagent
    .post("https://accounts.spotify.com/api/token")
    .set("Authorization", `Basic ${basic}`)
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send({
      grant_type: "refresh_token",
      refresh_token,
    });

  const { access_token } = body as AccessTokenResponse;

  return access_token;
}

export async function getAudioFeatures(
  id: string
): Promise<AudioFeaturesResponse> {
  const access_token = await getAccessToken();

  const response = await superagent
    .get(`https://api.spotify.com/v1/audio-features/${id}`)
    .set("Authorization", `Bearer ${access_token}`);

  const features = response.body as SpotifyApi.AudioFeaturesObject;

  return {
    beatsPerSecond: features.tempo / 60,
    tempo: features.tempo,
    timeSignature: features.time_signature,
  };
}

export async function getNowPlaying(): Promise<NowPlayingResponse> {
  const access_token = await getAccessToken();

  const { body, statusCode } = await superagent
    .get("https://api.spotify.com/v1/me/player/currently-playing")
    .set("Authorization", `Bearer ${access_token}`);

  if (statusCode === 204 || statusCode > 400) {
    return {
      isPlaying: false,
    };
  }

  const item = body.item as SpotifyApi.CurrentlyPlayingObject["item"];

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
  limit: number = 10
): Promise<RecentlyPlayedResponse[]> {
  const access_token = await getAccessToken();

  const params = qs.stringify({
    limit,
  });

  const { body } = await superagent
    .get(`https://api.spotify.com/v1/me/player/recently-played?${params}`)
    .set("Authorization", `Bearer ${access_token}`);

  const { items } = body as SpotifyApi.UsersRecentlyPlayedTracksResponse;

  return items.map<RecentlyPlayedResponse>(({ track }) => ({
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
  time_range: TimeRange = "short_term"
): Promise<TopTracksResponse[]> {
  const access_token = await getAccessToken();

  const params = qs.stringify({
    limit,
    time_range,
  });

  const { body } = await superagent
    .get(`https://api.spotify.com/v1/me/top/tracks?${params}`)
    .set("Authorization", `Bearer ${access_token}`);

  const { items } = body as SpotifyApi.UsersTopTracksResponse;

  return items.map<TopTracksResponse>((track) => ({
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
