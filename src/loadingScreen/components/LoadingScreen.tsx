/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { BlueBorderBackground } from "../../core";

export const LoadingScreen: FC = () => (
  <BlueBorderBackground backgroundColor={"white"}>
    <h1
      css={css`
        background-color: "red";
      `}
    >
      Deez
    </h1>
  </BlueBorderBackground>
);
