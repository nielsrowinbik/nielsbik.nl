import { WeatherResponse } from "types";
import { fetcher } from "./fetcher";
import invariant from "tiny-invariant";

invariant(process.env.WEATHER_TOKEN, "`WEATHER_TOKEN` should be set!");
invariant(process.env.WEATHER_QUERY, "`WEATHER_QUERY` should be set!");

const token = process.env.WEATHER_TOKEN;
const query = process.env.WEATHER_QUERY;

export async function getWeather() {
  const url = new URL(`https://api.weatherapi.com/v1/current.json`);
  url.searchParams.append("key", token);
  url.searchParams.append("q", query);
  url.searchParams.append("aqi", "no");

  const body: WeatherResponse = await fetcher(url.href, {
    next: { revalidate: 60 * 60 * 1 },
  });

  return body;
}
