/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useState } from "react";

import { BlueBorderBackground, Logo } from "../../core";
import { LandingPageDescription } from "./LandingPageDescription";
import { LandingPageGreeting } from "./LandingPageGreeting";

export const LandingPage: FC = () => {
  const [hasTypeWriterLoopEndedOnce, setHasTypeWriterLoopEndedOnce] =
    useState(false);
  return (
    <>
      <BlueBorderBackground backgroundColor={"white"}>
        <Logo
          styles={css`
            justify-self: center;
            width: 20%;
            height: auto;
            display: block;
            margin: 1.3vw 0 0 0;
            padding: 3vw 0;
          `}
        />
        <LandingPageGreeting
          setHasTypeWriterLoopEndedOnce={setHasTypeWriterLoopEndedOnce}
        />
        <LandingPageDescription
          hasTypeWriterLoopEndedOnce={hasTypeWriterLoopEndedOnce}
        />
      </BlueBorderBackground>
    </>
  );
};
