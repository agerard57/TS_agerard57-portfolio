/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { changeLanguage } from "i18next";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import { EnglishFlag } from "./EnglishFlag";
import { FrenchFlag } from "./FrenchFlag";

// https://www.svgrepo.com/collection/international-flags-6/

export const Flags: FC = () => {
  const { addToast } = useToasts();
  const { t } = useTranslation();
  // const toaster = (lang: string) => {
  const toaster = (lang: string) => {
    changeLanguage(lang);
    addToast(t("Core.confirmationMessage"), {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: 3000,
    });
  };
  return (
    <div
      css={css`
        position: fixed;
        padding: 1vw 0 0 3vw;
        text-align: left;
        top: 1.3vw;
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
          width: 10%;
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
      <FrenchFlag
        onClick={() => {
          toaster("fr");
        }}
      />
      <EnglishFlag
        onClick={() => {
          toaster("en");
        }}
      />
    </div>
  );
};
