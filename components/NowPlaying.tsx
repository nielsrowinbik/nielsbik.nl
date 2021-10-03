import classNames from 'classnames';
import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import { LastPlayedResponse, NowPlayingResponse } from '../lib/types';

import { Spotify } from './Logo';

export const NowPlaying = () => {
    const { data } = useSWR<NowPlayingResponse | LastPlayedResponse>(
        '/api/now-playing',
        fetcher
    );

    if (!data) return null;

    const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;
    const animationDuration = `${
        data.isPlaying
            ? (1 / data.track.bps) * (reduceMotion ? data.track.ts : 1)
            : 1
    }s`;

    return (
        <span className="flex items-center flex-row space-x-3 w-full">
            <a
                className="relative flex h-5 w-5 rounded-full"
                href="https://open.spotify.com/user/nielsrowinbik"
                target="_blank"
                title={
                    data.isPlaying &&
                    `This pulses at the BPM of ${data.track.name}, which is ${data.track.tempo}`
                }
                rel="noopener noreferrer"
            >
                <span
                    className={classNames(
                        'animate-ping absolute inline-flex h-full w-full rounded-full bg-spotify-green opacity-60',
                        { hidden: !data.isPlaying }
                    )}
                    style={{
                        animationDuration,
                    }}
                />
                <Spotify
                    className={classNames(
                        'relative h-full w-full transition-opacity',
                        {
                            'opacity-50 hover:opacity-100': !data.isPlaying,
                        }
                    )}
                />
            </a>
            <span
                className={classNames('truncate transition-opacity', {
                    'italic opacity-20': !data.isPlaying,
                })}
            >
                <a
                    className={classNames(
                        'max-w-max truncate hover:underline',
                        { 'font-medium': data.isPlaying }
                    )}
                    href={data.track.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.track.name}
                </a>
                <span className="mx-1">{' – '}</span>
                {data.artists.map(({ name, url }, i) => (
                    <a
                        className="max-w-max truncate hover:underline"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {name}
                        {i !== data.artists.length - 1 && ', '}
                    </a>
                ))}
            </span>
        </span>
    );
};
