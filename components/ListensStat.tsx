import { Icon } from "@/components/Icon";
import { getScrobbleCount } from "@/lib/lastfm";

export async function ListensStat() {
  const scrobbleCount = await getScrobbleCount();

  return (
    <a
      className="flex items-center gap-2"
      href="https://open.spotify.com/user/nielsrowinbik"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon.TrendUp className="h-5 w-5" />
      <span>{`${scrobbleCount.toLocaleString()} all time digital listens`}</span>
    </a>
  );
}
