import { getScrobbleCount } from "@/lib/lastfm";
import { ListensStat } from "./ListensStat";

export async function ListensWrapper() {
  const scrobbleCount = await getScrobbleCount();

  return <ListensStat scrobbleCount={scrobbleCount} />;
}

ListensWrapper.Skeleton = function Skeleton() {
  return (
    <span className="grid h-7 animate-pulse grid-cols-[1.25rem_auto] items-center gap-2">
      <span className="h-5 w-5 rounded-full bg-neutral-100 dark:bg-neutral-800" />
      <span className="h-4 w-48 rounded-md bg-neutral-100 dark:bg-neutral-800" />
    </span>
  );
};
