/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { changeLanguage } from "i18next";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { EnglishFlag } from "./EnglishFlag";
import { FrenchFlag } from "./FranceFlag";

// https://www.svgrepo.com/collection/international-flags-6/

export const Flags: FC = () => {
  const { t } = useTranslation();
  return (
    <div
      css={css`
        position: fixed;
        padding: 1vw 1vw 0 0;
        text-align: right;
        right: 1.3vw;
        top: 1.3vw;
        left: 86%;
        display: grid;
        grid-auto-columns: 1fr;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1vw 0px;
        grid-template-areas:
          "frflag"
          "enflag";
        justify-items: end;
        align-items: center;
        align-content: center;

        svg {
          width: 25%;
          height: auto;
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
};
