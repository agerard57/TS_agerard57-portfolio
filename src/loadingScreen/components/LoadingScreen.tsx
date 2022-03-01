/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { BlueBorderBackground } from "../../core";
import { Spinner as SpinnerSvg } from "../assets";

export const LoadingScreen: FC = () => (
  <BlueBorderBackground backgroundColor={"white"}>
    <div
      css={css`
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      `}
    >
      <h1>Please wait while this page is loading...</h1>
      <img src={SpinnerSvg} alt="Spinner" width="40%" />
    </div>
  </BlueBorderBackground>
);
