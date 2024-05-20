import { getWeather } from "@/lib/weather";

export async function WeatherLocation() {
  const weather = await getWeather();

  return `${weather.current.temp_c}°C ${weather.location.region}, ${weather.location.country}`;
}
