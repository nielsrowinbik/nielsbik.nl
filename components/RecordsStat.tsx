import { Icon } from "@/components/Icon";
import { getCollectionSize } from "@/lib/discogs";

export async function RecordsStat() {
  const recordCount = await getCollectionSize();

  return (
    <a
      className="flex items-center gap-2"
      href="https://www.discogs.com/user/nielsbik"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon.Record className="h-5 w-5" />
      <span>{`${recordCount.toLocaleString()} physical records owned`}</span>
    </a>
  );
}
