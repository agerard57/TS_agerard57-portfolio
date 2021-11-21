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
      typeSpeed={40}
      backDelay={600}
      backSpeed={20}
      startDelay={700}
      strings={[
        "Bonjour, je suis heureux de faire votre connaissance !",
        "Bonjour, je suis GERARD Alexandre",
      ]}
      smartBackspace
      showCursor
      loop
      cursorChar="_"
      onLastStringBackspaced={() => setHasTypeWriterLoopEndedOnce(true)}
    />
  </div>
);
