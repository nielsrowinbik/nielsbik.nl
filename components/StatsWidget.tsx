import { Suspense } from "react";
import { ListensStat } from "./ListensStat";
import { NowPlayingStat } from "./NowPlayingStat";
import { RecordsStat } from "./RecordsStat";
import Image from "next/image";
import avatar from "../public/images/niels.jpg";

export function StatsWidget() {
  return (
    <div className="grid grid-flow-row items-center gap-5 md:grid-cols-[max-content_auto]">
      <Image
        alt="Niels Bik"
        className="aspect-square rounded-full object-cover object-top dark:grayscale"
        src={avatar}
        placeholder="blur"
        width={125}
        priority
      />
      <div className="not-prose grid h-[100px] grid-flow-row gap-y-2 text-neutral-500 dark:text-neutral-400">
        <Suspense fallback={<NowPlayingStat.Skeleton />}>
          <NowPlayingStat />
        </Suspense>
        <Suspense fallback={<ListensStat.Skeleton />}>
          <ListensStat />
        </Suspense>
        <Suspense fallback={<RecordsStat.Skeleton />}>
          <RecordsStat />
        </Suspense>
      </div>
    </div>
  );
}
