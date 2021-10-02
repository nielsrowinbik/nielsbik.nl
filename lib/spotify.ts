import querystring from 'querystring';

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

const getAccessToken = async () => {
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

    return response.json();
};

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

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export const getAudioFeatures = async (id: string) => {
    const { access_token } = await getAccessToken();

    return fetch(`https://api.spotify.com/v1/audio-features/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};
