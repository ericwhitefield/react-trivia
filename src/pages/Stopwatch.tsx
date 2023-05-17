import { useEffect, useState } from "react";

type Props = {};

/**
 * 1. Should count up every second
 **/
export default function Stopwatch({}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return <div>Stopwatch {count}</div>;
}
