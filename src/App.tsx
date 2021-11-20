/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import "./App.css";
import { Logo, NavBar } from "./core";
import { LandingPageBackground } from "./landingPage";

function App() {
  return (
    <div className="App">
      <LandingPageBackground>
        <p
          css={css`
            font-size: 180%;
            white-space: nowrap;
            overflow: hidden;
            color: black;
          `}
        >
          &gt;Bonjour, je suis GERARD Alexandre !!!!!!!!
        </p>
        <Logo
          styles={css`
            justify-self: center;
            width: 20%;
            height: auto;
            pointer-events: none;
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
}

export default App;
