import { useEffect, useState } from "react";

/**
 * 1. Write a re-usable function named "tada"
 *
 *     - Tada should accept a Promise parmater.
 *     - Tada should return a tuple of [err, res] ( one of them will be undefined)
 *     - [err, undefined] if the promise rejects
 *     - [undefined, res] if the promise resolves
 *     - Tada should be awaitable
 *
 * 2. Change the useEffect contents to use await tada
 *
 *    - Remove use of .then from the useEffect
 *    - Use await tada instead
 *
 * 3. Bonus: properly type the tada function
 *
 */
export default function Poke() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    console.log("fetching...");
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`).then((res) => {
      console.log(
        "fetched!",
        res.json().then((res) => {
          console.log("parsed json");
          console.log(res);
          setPokemon(res);
        })
      );
    });
  }, []);

  return (
    <div>
      <h1>Poke</h1>
      <pre>{JSON.stringify(pokemon, null, 2)}</pre>
    </div>
  );
}
