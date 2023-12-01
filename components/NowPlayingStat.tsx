"use client";

import type {
  NowPlayingResponse,
  SpotifyResponse,
  Track,
  TrackWithAudioFeatures,
} from "types";

import { Icon } from "@/components/Icon";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { BPMTapper } from "./BPMTapper";

function PulsingIcon({ tempo }: TrackWithAudioFeatures) {
  return (
    <BPMTapper initial={tempo}>
      {({ bpm }) => {
        const animationDuration = `${1 / (bpm / 60)}s`;
        return (
          <button className="relative flex h-5 w-5">
            <span
              key={animationDuration}
              className="absolute inline-flex h-full w-full rounded-full bg-current opacity-60 motion-safe:animate-ping motion-reduce:animate-none"
              style={{ animationDuration }}
            />
            <Icon.Spotify className="relative h-full w-full" />
          </button>
        );
      }}
    </BPMTapper>
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
    <a
      className="truncate"
      href={track.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {[prefix, track.name, "by", artists[0].name].join(" ")}
    </a>
  );
}

type NowPlayingStatProps = {
  fallbackData: NowPlayingResponse;
};

export function NowPlayingStat({ fallbackData }: NowPlayingStatProps) {
  const { data, error } = useSWR<NowPlayingResponse>(
    "/api/now-playing",
    fetcher,
    { fallbackData, refreshInterval: 15_000 },
  );

  if (!data || (!!data && data.isPlaying === false) || !!error) {
    return (
      <div className="grid grid-cols-[1.25rem_auto] items-center gap-2">
        <StillIcon />
        <span className="truncate">Not listening now</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[1.25rem_auto] items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200">
      <PulsingIcon {...data.track} />
      <TrackInfo {...data} prefix="Now playing" />
    </div>
  );
}
