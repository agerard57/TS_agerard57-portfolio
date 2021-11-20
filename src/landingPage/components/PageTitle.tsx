/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

export const PageTitle: FC = () => (
  <p
    css={css`
      font-size: 140%;
      font-family: "MonoLisa-Regular";
      color: black;
    `}
  >
    &gt;Bonjour, je suis GERARD Alexandre
  </p>
);
