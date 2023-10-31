import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.sass";

import routesConfig from "./utils/routesConfig";
import works from "./data/works.json";
import skills from "./data/skills.json";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const routes = routesConfig(works, skills);
const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
