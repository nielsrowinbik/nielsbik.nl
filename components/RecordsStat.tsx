"use client";

import { Counter } from "./Counter";
import { Icon } from "@/components/Icon";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

type RecordsStatProps = {
  fallbackData: number;
};

export function RecordsStat({ fallbackData }: RecordsStatProps) {
  const { data } = useSWR<number>("/api/records", fetcher, {
    fallbackData,
  });

  return (
    <a
      className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
      href="https://www.discogs.com/user/nielsbik"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon.Record className="h-5 w-5" />
      <span className="flex items-center">
        <Counter value={data!} />
        &nbsp;physical records owned
      </span>
    </a>
  );
}
