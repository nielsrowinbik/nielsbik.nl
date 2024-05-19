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

interface SpotifyResponse<T extends Track | TrackWithAudioFeatures> {
  album: Album;
  artists: Artist[];
  track: T;
}

type NowPlayingResponse =
  | {
      album: Album;
      artists: Artist[];
      isPlaying: true;
      track: TrackWithAudioFeatures;
    }
  | {
      isPlaying: false;
    };

type RecentlyPlayedResponse = SpotifyResponse<Track>[];

type TopTracksResponse = SpotifyResponse<Track>[];

export type WeatherResponse = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
};
