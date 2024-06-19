"use client";

import { Counter } from "@/components/Counter";
import { Icon } from "@/components/Icon";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export function ListensStat({ scrobbleCount }: { scrobbleCount: number }) {
  const { data } = useSWR<number>("/api/scrobble-count", fetcher, {
    fallbackData: scrobbleCount,
    refreshInterval: 30 * 1000,
  });

  // const count = Math.max(data!, scrobbleCount);

  return (
    <a
      className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
      href="https://open.spotify.com/user/nielsrowinbik"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon.TrendUp className="h-5 w-5" />
      <span className="flex items-center">
        <Counter value={data!} />
        &nbsp;all time digital listens
      </span>
    </a>
  );
}
