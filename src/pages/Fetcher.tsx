import { useEffect, useState } from "react";

/***
 * 1. Should fetch one time, each time the URL prop changes.
 *
 *    The parent component is not changing the URL currently, just consider what would happen if it did.
 *
 * (Hint: It is currently an infinite loop. Don't kill your browser window.)
 */
export function Fetcher({ url }: { url: string }) {
  const data = useFetch({ url });

  return (
    <div>
      <h1>Infinite</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// ======================

function useFetch(options: any) {
  const [data, setData] = useState();

  useEffect(() => {
    console.log("fetching...");
    fetch(options.url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [options]);

  return data;
}
