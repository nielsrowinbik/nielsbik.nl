import { PlaybackResponse } from "types";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export const useNowPlaying = () => {
  return useSWR<PlaybackResponse>("/api/now-playing", fetcher);
};
