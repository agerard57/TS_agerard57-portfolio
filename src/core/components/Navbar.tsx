/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { Arrow } from "./Arrow";
import { Logo } from "./Logo";

/* TODO Add an arrow that displays the navbar when hovered */

export const NavBar: FC = () => {
  const { t } = useTranslation("core");
  const location = useLocation();
  const isHome = location.pathname === "/home";
  return (
    <div
      css={css`
        position: fixed;
        bottom: 0px;
        left: 0;
        right: 0;
        font-size: 1.4vw;
        transform: translateY(55%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        &:hover {
          transform: translateY(0%);
        }
        &:hover > svg {
          visibility: hidden;
          opacity: 0;
          transition: visibility 0s 0.1s, opacity 0.1s linear;
        }
        svg {
          visibility: visible;
          opacity: 1;
          transition: visibility 0s 0.1s, opacity 0.1s linear;
        }
      `}
    >
      <Arrow />
      <div
        css={css`
          background-color: #eeeeee;
          box-shadow: 0px -3px 5px 0px #656565;
          display: grid;
          grid-auto-columns: 1fr;
          grid-template-columns: ${isHome
            ? "repeat(5, 1fr)"
            : "repeat(6, 1fr)"};
          gap: 0px 0px;
          font-size: 1.4vw;
          height: 5vw;
          margin-top: 1vw;

          a {
            margin: 0 auto;
            list-style: none;
            line-height: 360%;
            width: fill-available;
            height: fill-available;
            font-family: "Archia-Regular";
            text-decoration: none;
            color: #121314;

            &:hover {
              background-color: #b6b8d440;
            }
          }
        `}
      >
        {!isHome && (
          <Link to="/home">
            <Logo
              styles={css`
                padding: 0;
                width: 40%;
              `}
            />
          </Link>
        )}
        <Link to="/presentation">{t("titles.presentation")}</Link>
        <Link to="/skills">{t("titles.skills")}</Link>
        <Link to="/projects">{t("titles.projects")}</Link>
        <Link to="/contact">{t("titles.contact")}</Link>
        <Link to="/resume">{t("titles.resume")}</Link>
      </div>
    </div>
  );
};
