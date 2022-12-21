import { NowPlayingResponse } from "types";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export const useNowPlaying = () => {
  return useSWR<NowPlayingResponse>("/api/now-playing", fetcher);
};
