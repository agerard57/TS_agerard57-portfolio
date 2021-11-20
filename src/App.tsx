/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import "./App.css";
import { Logo, NavBar } from "./core";
import { LandingPageBackground, PageTitle } from "./landingPage";

export const App: FC = () => (
  <div className="App">
    <LandingPageBackground>
      <PageTitle />
      <Logo
        styles={css`
          justify-self: center;
          width: 20%;
          height: auto;
          fill: #1f1a17;
          display: block;
          margin: 1.3vw 0 0 0;
          padding: 5vw 0;
        `}
      />
    </LandingPageBackground>
    <NavBar />
  </div>
);
