"use client";

import { Icon } from "@/components/Icon";
import { MechanicalCounter } from "./MechanicalCounter";
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
      <div className="flex items-center">
        <MechanicalCounter text={data!.toLocaleString()} />
        <span>&nbsp;physical records owned</span>
      </div>
    </a>
  );
}
