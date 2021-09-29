import type { NextApiRequest, NextApiResponse } from 'next';

import { getNowPlaying, getAudioAnalysis } from '../../lib/spotify';
import type { NowPlayingResponse as Response } from '../../lib/types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const nowPlayingResponse = await getNowPlaying();

    // Return "not playing" if we get an error back from Spotify:
    if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    const song: SpotifyApi.CurrentlyPlayingObject =
        await nowPlayingResponse.json();

    // Ignore podcasts:
    if (song.item.type === 'episode') {
        return res.status(200).json({ isPlaying: false });
    }

    // Get track analysis information:
    const analysisResponse = await getAudioAnalysis(song.item.id);
    const trackDetails: SpotifyApi.AudioAnalysisResponse =
        await analysisResponse.json();

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-while-revalidate=30'
    );

    // Construct response:
    const response: Response = {
        album: song.item.album.name,
        albumImageUrl: song.item.album.images[0].url,
        albumUrl: song.item.album.external_urls.spotify,
        artist: song.item.artists.map(({ name }) => name).join(', '),
        artistUrl: song.item.artists[0].external_urls.spotify,
        isPlaying: song.is_playing,
        // @ts-expect-error
        songBps: trackDetails.track.tempo / 60,
        // @ts-expect-error
        songTimeSignature: trackDetails.track.time_signature,
        songUrl: song.item.external_urls.spotify,
        title: song.item.name,
    };

    return res.status(200).json(response);
};
