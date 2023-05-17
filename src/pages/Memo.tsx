import { useState } from "react";

/**
 * 1. Make it possible to type in the input field
 *
 * 2. Enable the Save button:
 *     set the value of the input field to the saved state
 *
 */
export default function Memo({ init }: { init: string }) {
  const [name, setName] = useState<string>(init);
  const [saved, setSaved] = useState<string>("");

  return (
    <>
      <h1>Memo</h1>

      <input type="text" value={name} />

      <button>Save</button>

      <h3>Saved:</h3>
      <div>{saved}</div>
    </>
  );
}
