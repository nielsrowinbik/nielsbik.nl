export type LastPlayedResponse = {
    artist: {
        name: string;
        url: string;
    };
    isPlaying: false;
    track: {
        name: string;
        url: string;
    };
};

export type NowPlayingResponse = {
    album: {
        name: string;
        image: string;
        url: string;
    };
    artist: {
        name: string;
        url: string;
    };
    isPlaying: true;
    track: {
        bps: number;
        name: string;
        tempo: number;
        ts: number;
        url: string;
    };
};
