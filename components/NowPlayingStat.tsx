"use client";

import type {
  NowPlayingResponse,
  SpotifyResponse,
  TopTracksResponse,
  Track,
  TrackWithAudioFeatures,
} from "types";
import useSWR from "swr";
import seedrandom from "seedrandom";

import { Icon } from "@/components/Icon";
import { fetcher } from "@/lib/fetcher";

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

export function NowPlayingStat({
  nowPlaying,
  seed,
  topTracks,
}: {
  nowPlaying: NowPlayingResponse;
  seed: string;
  topTracks: TopTracksResponse;
}) {
  const { data } = useSWR<NowPlayingResponse>("/api/now-playing", fetcher, {
    fallbackData: nowPlaying,
    refreshInterval: 30 * 1000,
  });
  const random = seedrandom(seed);

  if (data!.isPlaying === false) {
    const i = Math.floor(random() * (9 - 0 + 1) + 0);

    return (
      <a
        className="grid grid-cols-[1.25rem_auto] items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
        href={topTracks[i].track.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <StillIcon />
        <TrackInfo {...topTracks[i]} prefix="On repeat:" />
      </a>
    );
  }

  return (
    <a
      className="grid grid-cols-[1.25rem_auto] items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
      href={data!.track.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <PulsingIcon {...data!.track} />
      <TrackInfo {...data!} prefix="Now playing: " />
    </a>
  );
}
