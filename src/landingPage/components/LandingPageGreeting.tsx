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
      typeSpeed={15}
      backDelay={1500}
      backSpeed={15}
      startDelay={700}
      strings={[
        "Bonjour !",
        "Bonjour, je suis GERARD Alexandre",
        "Bonjour, je suis heureux de faire votre connaissance !",
      ]}
      smartBackspace
      showCursor
      loop
      cursorChar="_"
      onLastStringBackspaced={() => setHasTypeWriterLoopEndedOnce(true)}
    />
  </div>
);
