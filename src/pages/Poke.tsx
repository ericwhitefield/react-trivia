import { useEffect, useState } from "react";

/**
 * 1. Change the useEffect contents to use await
 *
 *    To do this, write a function named "tada"
 *      it should accept a Promise
 *      and return a tuple of [err, resp] (they can be undefined)
 *      await this function and check for errors (just console.log them)
 *
 *  Use tada to await the two promises already in the useEffect
 *
 * 2. Properly type the tada function
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
