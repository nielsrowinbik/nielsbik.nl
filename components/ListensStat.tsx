"use client";

import { Icon } from "@/components/Icon";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

type ListensStatProps = {
  fallbackData: number;
};

export function ListensStat({ fallbackData }: ListensStatProps) {
  const { data } = useSWR<number>("/api/listens", fetcher, {
    fallbackData,
  });

  return (
    <a
      className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
      href="https://open.spotify.com/user/nielsrowinbik"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon.TrendUp className="h-5 w-5" />
      <span>{`${data!.toLocaleString()} all time digital listens`}</span>
    </a>
  );
}
