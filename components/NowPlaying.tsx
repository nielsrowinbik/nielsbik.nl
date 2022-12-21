import { ExternalLink } from "@/components/ExternalLink";
import { Icon } from "@/components/Icon";
import { useNowPlaying } from "@/hooks/use-now-playing";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function NowPlaying() {
  const { data } = useNowPlaying();

  if (!data || !data.isPlaying) return null;

  const { artists, track } = data;

  const reduceMotion = usePrefersReducedMotion();
  const animationDuration = `${
    (1 / track.beatsPerSecond) * (reduceMotion ? track.timeSignature : 1)
  }s`;

  return (
    <span className="not-prose flex w-full flex-row items-center space-x-3">
      <ExternalLink
        className="relative flex h-5 w-5 shrink-0 grow-0 rounded-full"
        href="https://open.spotify.com/user/nielsrowinbik"
        title="This pulses to the beat of the currently playing track"
      >
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spotify-green opacity-60"
          style={{ animationDuration }}
        />
        <Icon.Spotify className="relative h-full w-full text-spotify-green" />
      </ExternalLink>
      <span className="flex flex-auto truncate">
        <ExternalLink
          className="font-semibold no-underline hover:underline"
          href={track.url}
          title={track.name}
        >
          {track.name}
        </ExternalLink>
        <span className="mx-2">{" – "}</span>
        {artists.map(({ name, url }, i) => (
          <ExternalLink
            className="mr-1 truncate no-underline last:mr-0 hover:underline"
            href={url}
            key={url}
            title={name}
          >
            {name}
            {i !== artists.length - 1 && ","}
          </ExternalLink>
        ))}
      </span>
    </span>
  );
}
