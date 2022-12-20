import type { NextApiRequest, NextApiResponse } from 'next';

import type { LastPlayedResponse as Response } from '@/lib/types';
import { getRecentlyPlayed } from '@/lib/spotify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const historyObject: SpotifyApi.UsersRecentlyPlayedTracksResponse = await (
    await getRecentlyPlayed(1)
  ).json();
  const track = historyObject.items[0].track;

  // Construct response:
  const response: Response = {
    artists: track.artists.map(({ name, external_urls: { spotify: url } }) => ({
      name,
      url,
    })),
    isPlaying: false,
    track: {
      name: track.name,
      url: track.external_urls.spotify,
    },
  };

  // Make browsers cache our response for a minute tops:
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json(response);
};
