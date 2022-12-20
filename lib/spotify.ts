import type {
  AccessTokenResponse,
  AudioFeaturesResponse,
  NowPlayingResponse,
} from 'types';

import querystring from 'querystring';
import superagent from 'superagent';

// Refer to https://documenter.getpostman.com/view/583/spotify-playlist-generator/2MtDWP to get a refresh token.
// 1. Open Postman (https://web.postman.co/) and create a new request
// 2. Under Authorization, choose OAuth2.0
// 3. Fill in the following:
//    - Auth URL: https://accounts.spotify.com/authorize
//    - Access Token URL: https://accounts.spotify.com/api/token
//    - Client ID
//    - Client Secret
//    - Scope: `user-read-currently-playing user-read-recently-played`
// 4. Click on "Get New Access Token"
// 5. Authorize the request with your account, and get the Refresh Token from Postman

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

async function getAccessToken(): Promise<AccessTokenResponse> {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return await response.json();
}

export const getRecentlyPlayed = async (limit: number = 10) => {
  const { access_token } = await getAccessToken();

  return fetch(
    `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};

export async function getNowPlaying(): Promise<NowPlayingResponse | null> {
  const { access_token } = await getAccessToken();

  const { body, statusCode } = await superagent
    .get('https://api.spotify.com/v1/me/player/currently-playing')
    .set('Authorization', `Bearer ${access_token}`);

  if (statusCode === 204 || statusCode > 400) {
    return null;
  }

  const item = body.item as SpotifyApi.CurrentlyPlayingObject['item'];

  if (!item || item.type === 'episode') {
    return null;
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

export const getAudioFeatures = async (
  id: string
): Promise<AudioFeaturesResponse> => {
  const { access_token } = await getAccessToken();

  const response = await superagent
    .get(`https://api.spotify.com/v1/audio-features/${id}`)
    .set('Authorization', `Bearer ${access_token}`);

  const features = response.body as SpotifyApi.AudioFeaturesObject;

  return {
    beatsPerSecond: features.tempo / 60,
    tempo: features.tempo,
    timeSignature: features.time_signature,
  };
};
