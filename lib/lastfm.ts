import "server-only";

import { cache } from "react";
import superagent from "superagent";

const api_key = process.env.LAST_FM_API_KEY;

export const getScrobbleCount = cache(async () => {
  const { body } = await superagent.get(
    `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=nielsrowinbik&api_key=${api_key}&format=json`
  );

  return +body.user.playcount;
});

export const getScrobbleCountForArtist = cache(async (artist: string) => {
  const { body } = await superagent.get(
    `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&username=nielsrowinbik&api_key=${api_key}&format=json`
  );

  return +body.artist.stats.userplaycount;
});
