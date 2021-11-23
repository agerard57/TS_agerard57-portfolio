/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { Logo } from "../core";
import { Arrow } from "./Arrow";

/* TODO Add an arrow that displays the navbar when hovered */

export const NavBar: FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  console.error(location.pathname);
  console.error(isHome);
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

          li {
            margin: 0 auto;
            list-style: none;
            align-self: center;
            font-family: "Archia-Regular";

            a {
              text-decoration: none;
              color: #121314;
            }
          }
        `}
      >
        {!isHome && (
          <li>
            <Link to="/home">
              <Logo
                styles={css`
                  width: 40%;
                  transform: translateY(7%);
                  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
                `}
              />
            </Link>
          </li>
        )}
        <li>
          <Link to="/presentation">Présentation</Link>
        </li>
        <li>
          <Link to="/skills">Mes compétences</Link>
        </li>
        <li>
          <Link to="/projects"> Mes projets</Link>
        </li>
        <li>
          <Link to="/contact"> Me contacter</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
      </div>
    </div>
  );
};
