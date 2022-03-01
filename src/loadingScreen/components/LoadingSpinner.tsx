/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { default as SpinnerSvg } from "../assets";

export function LoadingSpinner(): JSX.Element {
  return (
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
      <img src={SpinnerSvg} alt="Spinner" width="40%" />
    </div>
  );
}
