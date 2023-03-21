"use client";

import { Icon } from "@/components/Icon";
import { MechanicalCounter } from "@/components/MechanicalCounter";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

type ListensStatProps = {
  fallbackData: number;
};

export function ListensStat({ fallbackData }: ListensStatProps) {
  const { data } = useSWR<number>("/api/listens", fetcher, {
    fallbackData,
    refreshInterval: 15_000,
  });

  return (
    <a
      className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
      href="https://open.spotify.com/user/nielsrowinbik"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon.TrendUp className="h-5 w-5" />
      <div className="flex items-center">
        <MechanicalCounter text={data!.toLocaleString()} />
        <span>&nbsp;all time digital listens</span>
      </div>
    </a>
  );
}
