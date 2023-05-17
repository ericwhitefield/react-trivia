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

  async function dofetch() {
    console.log("fetching...");

    const [err, resp] = await tada<Response>(
      fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    );

    if (err) {
      console.log("error", err);
      return;
    }

    const respSure = resp as Response;

    const [err2, resp2] = await tada<any>(respSure.json());

    if (err2) {
      console.log("error", err2);
      return;
    }

    console.log("data", resp2);
    setPokemon(resp2);
  }

  useEffect(() => {
    dofetch();
  }, []);

  return (
    <div>
      <h1>Poke</h1>
      <pre>{JSON.stringify(pokemon, null, 2)}</pre>
    </div>
  );
}

async function tada<T>(
  prom: Promise<any>
): Promise<[undefined, T] | [T, undefined]> {
  return prom
    .then((res) => {
      return [undefined, res] as [undefined, T];
    })
    .catch((err) => {
      return [err, undefined];
    });
}
