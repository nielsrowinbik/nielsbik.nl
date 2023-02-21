"use client";

import type {
  NowPlayingResponse,
  SpotifyResponse,
  Track,
  TrackWithAudioFeatures,
} from "types";
import { useEffect, useState } from "react";

import { Icon } from "@/components/Icon";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

function PulsingIcon({
  beatsPerSecond,
  timeSignature,
}: TrackWithAudioFeatures) {
  const [slow, setSlow] = useState(false);
  const animationDuration = `${
    (1 / beatsPerSecond) * (slow ? timeSignature : 1)
  }s`;

  useEffect(() => {
    setSlow(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

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

type NowPlayingStatProps = {
  fallbackData: NowPlayingResponse;
};

export function NowPlayingStat({ fallbackData }: NowPlayingStatProps) {
  const { data, error } = useSWR<NowPlayingResponse>(
    "/api/now-playing",
    fetcher,
    { fallbackData }
  );

  if (!data || (!!data && data.isPlaying === false) || !!error) {
    return (
      <div className="flex items-center gap-2">
        <StillIcon />
        <span>Not listening right now</span>
      </div>
    );
  }

  return (
    <a
      className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
      href={data.track.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <PulsingIcon {...data.track} />
      <TrackInfo {...data} prefix="Now playing" />
    </a>
  );
}
