import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import { NowPlayingResponse } from '../lib/types';

import { Spotify } from './Logo';

export const NowPlaying = () => {
    const response = useSWR('/api/now-playing', fetcher);
    const data: NowPlayingResponse = response.data;

    if (!data || !data.isPlaying) return null;

    const { artist, artistUrl, songBps, songTimeSignature, songUrl, title } =
        data;
    const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;
    const animationDuration = `${
        (1 / songBps) * (prefersReducedMotion ? songTimeSignature : 1)
    }s`;

    return (
        <span className="flex items-center flex-row space-x-3 w-full">
            <a
                className="relative flex h-5 w-5 rounded-full"
                href="https://open.spotify.com/user/nielsrowinbik"
                target="_blank"
                title={`This pulses at the BPM of ${title}, which is ${
                    songBps * 60
                }`}
                rel="noopener noreferrer"
            >
                <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spotify-green opacity-60"
                    style={{
                        animationDuration,
                    }}
                />
                <Spotify className="relative h-full w-full" />
            </a>
            <span className="truncate">
                <a
                    className="font-medium max-w-max truncate hover:underline"
                    href={songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {title}
                </a>
                <span className="mx-1">{' – '}</span>
                <a
                    className="max-w-max truncate hover:underline"
                    href={artistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {artist}
                </a>
            </span>
        </span>
    );
};
