/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import ReactTyped from "react-typed";

type Props = {
  setHasTypeWriterLoopEndedOnce: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LandingPageGreeting: FC<Props> = ({
  setHasTypeWriterLoopEndedOnce,
}) => (
  <div
    css={css`
      padding: 0px 1.3vw;
      p {
        margin: 0;
        font-size: 140%;
        font-family: "MonoLisa-Regular";
        color: black;
        display: inline-block;
      }
    `}
  >
    <p>&gt;&nbsp;</p>
    <ReactTyped
      css={css`
        font-size: 140%;
        font-family: "MonoLisa-Regular";
        color: black;
      `}
      typeSpeed={50}
      backSpeed={20}
      startDelay={1000}
      strings={[
        "Bonjour, je suis heureux de faire votre connaissance !",
        "Bonjour, je suis GERARD Alexandre",
      ]}
      smartBackspace
      backDelay={1000}
      showCursor
      loop
      cursorChar="_"
      onLastStringBackspaced={() => setHasTypeWriterLoopEndedOnce(true)} //TODO Animation description
    />
  </div>
);
