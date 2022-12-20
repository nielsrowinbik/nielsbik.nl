export type AccessTokenResponse = {
  access_token: string;
  token_type: 'Bearer';
  expires_in: number;
  scope: string;
};

export type AudioFeaturesResponse = {
  beatsPerSecond: number;
  tempo: SpotifyApi.AudioFeaturesObject['tempo'];
  timeSignature: SpotifyApi.AudioFeaturesObject['time_signature'];
};

interface TrackResponse extends AudioFeaturesResponse {
  name: SpotifyApi.TrackObjectFull['name'];
  url: SpotifyApi.TrackObjectFull['external_urls']['spotify'];
}

export type NowPlayingResponse = {
  album: {
    name: SpotifyApi.AlbumObjectFull['name'];
    image: SpotifyApi.AlbumObjectFull['images'][0]['url'];
    url: SpotifyApi.AlbumObjectFull['external_urls']['spotify'];
  };
  artists: {
    name: SpotifyApi.ArtistObjectSimplified['name'];
    url: SpotifyApi.ArtistObjectSimplified['external_urls']['spotify'];
  }[];
  isPlaying: true;
  track: TrackResponse;
};
