const fetcher = async (input: RequestInfo, init?: RequestInit) =>
    (await fetch(input, init)).json();

export default fetcher;
