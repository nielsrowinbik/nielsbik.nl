import { getWeather } from "@/lib/weather";

export async function WeatherLocation() {
  const {
    current: { temp_c },
    location: { country, region },
  } = await getWeather();

  return `${Math.round(temp_c)}°C ${region}, ${country}`;
}
