import { useEffect, useState } from "react";

/***
 * 1. Should fetch when the component loads
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
