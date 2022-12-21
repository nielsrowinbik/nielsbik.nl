export interface LastPlayedResponse {
  artists: {
    name: string;
    url: string;
  }[];
  isPlaying: false;
  track: {
    name: string;
    url: string;
  };
}

export interface NowPlayingResponse {
  album: {
    name: string;
    image: string;
    url: string;
  };
  artists: {
    name: string;
    url: string;
  }[];
  isPlaying: true;
  track: {
    bps: number;
    name: string;
    tempo: number;
    ts: number;
    url: string;
  };
}
