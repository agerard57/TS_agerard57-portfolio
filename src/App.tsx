/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { NavBar } from "./core";
import { LandingPage } from "./landingPage";
import { RouteManager } from "./routeManager";

export const App: FC = () => (
  <BrowserRouter>
    <div className="App">
      <LandingPage>
        <RouteManager />
      </LandingPage>
      <NavBar />
    </div>
  </BrowserRouter>
);
