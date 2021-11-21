/** @jsxImportSource @emotion/react */
import { FC } from "react";

import "./App.css";
import { NavBar } from "./core";
import { LandingPage } from "./landingPage";

export const App: FC = () => (
  <div className="App">
    <LandingPage />
    <NavBar />
  </div>
);
