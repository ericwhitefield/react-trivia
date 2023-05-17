import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";

export default function Home() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <p>
        Each page maps to single file in the source. Go through each page and
        fix it. And/Or follow the instructions in the comments.
      </p>
    </>
  );
}
