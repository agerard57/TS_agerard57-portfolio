/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

export const PageTitle: FC = () => (
  <p
    css={css`
      font-size: 180%;
      font-family: "MonoLisa-Regular";
      white-space: nowrap;
      overflow: hidden;
      color: black;
    `}
  >
    &gt;Bonjour, je suis GERARD Alexandre
  </p>
);
