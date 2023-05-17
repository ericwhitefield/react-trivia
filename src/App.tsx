import { Outlet } from "react-router";
import { Link, createBrowserRouter } from "react-router-dom";
import "./menu.css";
import Home from "./pages/Home";
import Poke from "./pages/Poke";
import Stopwatch from "./pages/Stopwatch";
import { Fetcher } from "./pages/Fetcher";
import Memo from "./pages/Memo";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Stopwatch",
        element: <Stopwatch />,
      },
      {
        path: "Fetcher",
        element: <Fetcher url="https://pokeapi.co/api/v2/pokemon/ditto" />,
      },
      {
        path: "Memo",
        element: <Memo init={"blah"} />,
      },
      {
        path: "Poke",
        element: <Poke />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export function App() {
  return (
    <>
      <ul className="menu">
        {routes[0].children.map((route) => {
          return (
            <li key={route.path}>
              <Link to={`/${route.path}`}>{route.path}</Link>
            </li>
          );
        })}
      </ul>

      <Outlet />
    </>
  );
}
