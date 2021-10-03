import type { NextApiRequest, NextApiResponse } from 'next';

import { getNowPlaying, getAudioFeatures } from '../../lib/spotify';
import type { NowPlayingResponse as Response } from '../../lib/types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const nowPlayingResponse = await getNowPlaying();

    const redirectToLastPlayed = () => res.redirect(303, '/api/last-played');

    // Check if we're playing anything and catch any errors by redirecting:
    if (
        nowPlayingResponse.status === 204 || // Spotify will return a 204 when we're not playing anything (or when a private session is on)
        nowPlayingResponse.status > 400 // Catch any client (introduced by us) or server errors (from Spotify)
    )
        return redirectToLastPlayed();

    // We are playing something, parse the reponse body:
    const currentlyPlaying: SpotifyApi.CurrentlyPlayingObject =
        await nowPlayingResponse.json();

    // Check if what we're playing is music, we don't want to show podcast episodes so redirect if we are:
    if (currentlyPlaying.item.type === 'episode') return redirectToLastPlayed();

    // Get audio features for the currently playing item:
    const audioFeatures: SpotifyApi.AudioFeaturesResponse = await (
        await getAudioFeatures(currentlyPlaying.item.id)
    ).json();

    // Construct response:
    const response: Response = {
        album: {
            name: currentlyPlaying.item.album.name,
            image: currentlyPlaying.item.album.images[0].url,
            url: currentlyPlaying.item.album.external_urls.spotify,
        },
        artists: currentlyPlaying.item.artists.map(
            ({ name, external_urls: { spotify: url } }) => ({ name, url })
        ),
        isPlaying: true,
        track: {
            bps: audioFeatures.tempo / 60,
            name: currentlyPlaying.item.name,
            tempo: audioFeatures.tempo,
            ts: audioFeatures.time_signature,
            url: currentlyPlaying.item.external_urls.spotify,
        },
    };

    // Make browsers cache our response for a minute tops:
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-while-revalidate=30'
    );

    return res.status(200).json(response);
};
