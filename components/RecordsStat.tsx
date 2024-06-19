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
