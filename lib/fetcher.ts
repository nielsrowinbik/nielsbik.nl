export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.body && res.json();
}

type CacheConfig = {
  cache?: RequestInit["cache"];
  next?: RequestInit["next"];
};

export function spotifetch(cacheConfig: CacheConfig) {
  return async function fetcher(input: RequestInfo | URL, init?: RequestInit) {
    return fetch(input, { ...init, ...cacheConfig });
  };
}
