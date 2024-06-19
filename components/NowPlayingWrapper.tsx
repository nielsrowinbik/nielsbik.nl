import { getNowPlaying, getTopTracks } from "@/lib/spotify";
import { NowPlayingStat } from "./NowPlayingStat";

export async function NowPlayingWrapper() {
  const nowPlaying = await getNowPlaying();
  const topTracks = await getTopTracks();

  return <NowPlayingStat nowPlaying={nowPlaying} topTracks={topTracks} />;
}

NowPlayingWrapper.Skeleton = function Skeleton() {
  return (
    <span className="grid h-7 animate-pulse grid-cols-[1.25rem_auto] items-center gap-2">
      <span className="h-5 w-5 rounded-full bg-neutral-100 dark:bg-neutral-800" />
      <span className="h-4 w-36 rounded-md bg-neutral-100 dark:bg-neutral-800" />
    </span>
  );
};
