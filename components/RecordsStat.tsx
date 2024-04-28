import { Counter } from "./Counter";
import { Icon } from "@/components/Icon";
import { getCollectionCount } from "@/lib/discogs";

export async function RecordsStat() {
  const records = await getCollectionCount();

  return (
    <a
      className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
      href="https://www.discogs.com/user/nielsbik"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon.Record className="h-5 w-5" />
      <span className="flex items-center">
        <Counter value={records} />
        &nbsp;physical records owned
      </span>
    </a>
  );
}

RecordsStat.Skeleton = function Skeleton() {
  return (
    <span className="grid h-7 animate-pulse grid-cols-[1.25rem_auto] items-center gap-2">
      <span className="h-5 w-5 rounded-full bg-neutral-100 dark:bg-neutral-800" />
      <span className="h-4 w-48 rounded-md bg-neutral-100 dark:bg-neutral-800" />
    </span>
  );
};
