/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { FC } from "react";

export const LandingPageBackground: FC = ({children}) => {
  return (
    <div
      css={css`
        background-color: white;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 0px 1.3vw #364ca1 inset;
        align-items: center;
        /* justify-content: center; */          //Centers content vertically
        padding-top:1wh;
        font-size: calc(10px + 2vmin);
        color: white;
      `}
    >
      {children}
    </div>
  );
};
