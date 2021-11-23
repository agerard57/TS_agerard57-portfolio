/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { changeLanguage } from "i18next";
import { FC } from "react";

import { EnglishFlag } from "./EnglishFlag";
import { FrenchFlag } from "./FranceFlag";

// https://www.svgrepo.com/collection/international-flags-6/

export const Flags: FC = () => (
  <div
    css={css`
      position: fixed;
      text-align: right;
      right: 1.3vw;
      top: 1.3vw;
      display: grid;
      justify-items: end;

      svg {
        width: 10%;
        height: auto;
        padding: 1vw 1vw 0 0;
        opacity: 20%;
        transition: opacity 0.1s linear 0.1s;
      }

      svg:hover {
        cursor: pointer;
        opacity: 100%;
        transition: opacity 0.1s linear 0.1s;
      }
    `}
  >
    <FrenchFlag onClick={() => changeLanguage("fr")} />
    <EnglishFlag onClick={() => changeLanguage("en")} />
  </div>
);
