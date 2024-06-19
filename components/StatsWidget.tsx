import { RecordsStat } from "@/components/RecordsStat";
import Image from "next/image";
import avatar from "../public/images/niels.jpg";
import { getScrobbleCount } from "@/lib/lastfm";
import { getNowPlaying, getTopTracks } from "@/lib/spotify";
import { NowPlayingStat } from "./NowPlayingStat";
import { ListensStat } from "./ListensStat";

export async function StatsWidget() {
  const nowPlaying = await getNowPlaying();
  const topTracks = await getTopTracks();
  const scrobbleCount = await getScrobbleCount();

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
        <NowPlayingStat nowPlaying={nowPlaying} topTracks={topTracks} />
        <ListensStat scrobbleCount={scrobbleCount} />
        <RecordsStat />
      </div>
    </div>
  );
}
