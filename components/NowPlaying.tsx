import { ExternalLink } from '@/components/ExternalLink';
import { Icon } from '@/components/Icon';
import { useNowPlaying } from '@/hooks/use-now-playing';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

export function NowPlaying() {
  const { data } = useNowPlaying();

  if (!data) return null;

  const { artists, track } = data;

  const reduceMotion = usePrefersReducedMotion();
  const animationDuration = `${
    (1 / track.beatsPerSecond) * (reduceMotion ? track.timeSignature : 1)
  }s`;

  return (
    <span className="flex items-center flex-row space-x-3 w-full not-prose">
      <ExternalLink
        className="relative flex h-5 w-5 rounded-full grow-0 shrink-0"
        href="https://open.spotify.com/user/nielsrowinbik"
        title="This pulses to the beat of the currently playing track"
      >
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spotify-green opacity-60"
          style={{ animationDuration }}
        />
        <Icon.Spotify className="relative h-full w-full text-spotify-green" />
      </ExternalLink>
      <span className="flex-auto flex truncate">
        <ExternalLink
          className="font-semibold no-underline hover:underline"
          href={track.url}
          title={track.name}
        >
          {track.name}
        </ExternalLink>
        <span className="mx-2">{' – '}</span>
        {artists.map(({ name, url }, i) => (
          <ExternalLink
            className="no-underline hover:underline truncate mr-1 last:mr-0"
            href={url}
            key={url}
            title={name}
          >
            {name}
            {i !== artists.length - 1 && ','}
          </ExternalLink>
        ))}
      </span>
    </span>
  );
}
