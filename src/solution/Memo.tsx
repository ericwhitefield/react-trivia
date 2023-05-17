import { ChangeEvent, useRef, useState } from "react";

/**
 * 1. Make it possible to type in the input field
 *
 * 2. Enable the Save button:
 *     set the value of the input field to the saved state
 */
export default function Memo({ init }: { init: string }) {
  const [name, setName] = useState<string>(init);
  const [saved, setSaved] = useState<string>("");

  // 1. Make it possible to type in the input field
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // 2. Enable the Save button
  const ref = useRef<HTMLInputElement>(null);

  const handleSave = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("event", event);
    console.log("Name is", ref?.current ? ref?.current.value : "");
    setSaved(ref?.current ? ref?.current.value : "");
  };

  return (
    <>
      <h1>Memo</h1>

      <input ref={ref} type="text" value={name} onChange={handleChange} />

      <button onClick={handleSave}>Click me</button>

      <h3>Saved</h3>
      <div>{saved}</div>
    </>
  );
}
