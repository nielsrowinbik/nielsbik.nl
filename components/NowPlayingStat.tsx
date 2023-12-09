import type { SpotifyResponse, Track, TrackWithAudioFeatures } from "types";

import { Icon } from "@/components/Icon";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { getNowPlaying } from "@/lib/spotify";

function PulsingIcon({ beatsPerSecond }: TrackWithAudioFeatures) {
  const animationDuration = `${1 / beatsPerSecond}s`;

  return (
    <div className="relative flex h-5 w-5">
      <span
        className="absolute inline-flex h-full w-full rounded-full bg-current opacity-60 motion-safe:animate-ping motion-reduce:animate-none"
        style={{ animationDuration }}
      />
      <Icon.Spotify className="relative h-full w-full" />
    </div>
  );
}

function StillIcon() {
  return <Icon.Spotify className="h-5 w-5" />;
}

function TrackInfo<T extends TrackWithAudioFeatures | Track>({
  artists,
  prefix,
  track,
}: SpotifyResponse<T> & { prefix: string }) {
  return (
    <span className="truncate">
      {[prefix, track.name, "by", artists[0].name].join(" ")}
    </span>
  );
}

export function NotPlaying() {
  return (
    <div className="grid grid-cols-[1.25rem_auto] items-center gap-2">
      <StillIcon />
      <span className="truncate">Not listening now</span>
    </div>
  );
}

export async function NowPlayingStat() {
  const data = await getNowPlaying();

  if (!data || (!!data && data.isPlaying === false)) {
    return <NotPlaying />;
  }

  return (
    <a
      className="grid grid-cols-[1.25rem_auto] items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
      href={data.track.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <PulsingIcon {...data.track} />
      <TrackInfo {...data} prefix="Now playing" />
    </a>
  );
}

NowPlayingStat.Skeleton = function Skeleton() {
  return (
    <span className="grid h-7 animate-pulse grid-cols-[1.25rem_auto] items-center gap-2">
      <span className="h-5 w-5 rounded-full bg-neutral-100 dark:bg-neutral-800" />
      <span className="h-4 w-36 rounded-md bg-neutral-100 dark:bg-neutral-800" />
    </span>
  );
};
