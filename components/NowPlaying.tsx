import cn from 'classnames';
import useSWR from 'swr';
import { useTranslation } from 'next-i18next';

import fetcher from '../lib/fetcher';
import { LastPlayedResponse, NowPlayingResponse } from '../lib/types';

import { Spotify } from './Logo';

export const useNowPlaying = () => {
    const { data } = useSWR<NowPlayingResponse | LastPlayedResponse>(
        '/api/now-playing',
        fetcher
    );

    return data;
};

const NowPlaying = () => {
    const data = useNowPlaying();
    const { t } = useTranslation('home');

    if (!data || !data.isPlaying) return null;

    const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;
    const animationDuration = `${
        (1 / data.track.bps) * (reduceMotion ? data.track.ts : 1)
    }s`;

    return (
        <span className="flex items-center flex-row space-x-3 w-full not-prose">
            <a
                className="relative flex h-5 w-5 rounded-full grow-0 shrink-0"
                href="https://open.spotify.com/user/nielsrowinbik"
                target="_blank"
                title={t('pulse-hover')}
                rel="noopener noreferrer"
            >
                <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spotify-green opacity-60"
                    style={{ animationDuration }}
                />
                <Spotify className="relative h-full w-full" />
            </a>
            <span className="flex-auto flex truncate">
                <a
                    className="font-semibold no-underline hover:underline"
                    href={data.track.url}
                    target="_blank"
                    title={data.track.name}
                    rel="noopener noreferrer"
                >
                    {data.track.name}
                </a>
                <span className="mx-2">{' – '}</span>
                {data.artists.map(({ name, url }, i) => (
                    <a
                        className="no-underline hover:underline truncate mr-1 last:mr-0"
                        href={url}
                        key={url}
                        target="_blank"
                        title={name}
                        rel="noopener noreferrer"
                    >
                        {name}
                        {i !== data.artists.length - 1 && ','}
                    </a>
                ))}
            </span>
        </span>
    );
};

export default NowPlaying;
