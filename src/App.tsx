/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import "./App.css";
import { Logo, NavBar } from "./core";
import {
  LandingPageBackground,
  LandingPageDescription,
  LandingPageGreeting,
} from "./landingPage";

export const App: FC = () => (
  <div className="App">
    <LandingPageBackground>
      <Logo
        styles={css`
          justify-self: center;
          width: 20%;
          height: auto;
          fill: #1f1a17;
          display: block;
          margin: 1.3vw 0 0 0;
          padding: 3vw 0;
        `}
      />
      <LandingPageGreeting />
      <LandingPageDescription />
    </LandingPageBackground>
    <NavBar />
  </div>
);
