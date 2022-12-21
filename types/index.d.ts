export type AccessTokenResponse = {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
  scope: string;
};

export type AudioFeaturesResponse = {
  beatsPerSecond: number;
  tempo: SpotifyApi.AudioFeaturesObject["tempo"];
  timeSignature: SpotifyApi.AudioFeaturesObject["time_signature"];
};

type Album = {
  name: SpotifyApi.AlbumObjectFull["name"];
  image: SpotifyApi.AlbumObjectFull["images"][0]["url"];
  url: SpotifyApi.AlbumObjectFull["external_urls"]["spotify"];
};

type Artist = {
  name: SpotifyApi.ArtistObjectSimplified["name"];
  url: SpotifyApi.ArtistObjectSimplified["external_urls"]["spotify"];
};

type Track = {
  name: SpotifyApi.TrackObjectFull["name"];
  url: SpotifyApi.TrackObjectFull["external_urls"]["spotify"];
};

type TrackWithAudioFeatures = {
  beatsPerSecond: number;
  name: SpotifyApi.TrackObjectFull["name"];
  tempo: SpotifyApi.AudioFeaturesObject["tempo"];
  timeSignature: SpotifyApi.AudioFeaturesObject["time_signature"];
  url: SpotifyApi.TrackObjectFull["external_urls"]["spotify"];
};

export type PlaybackResponse =
  | {
      album: Album;
      artists: Artist[];
      isPlaying: true;
      track: TrackWithAudioFeatures;
    }
  | {
      album: Album;
      artists: Artist[];
      isPlaying: false;
      track: Track;
    };
