/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { FC } from "react";

export const NavBar: FC = () => {
  return (
    <div
      css={css`
        position: fixed;
        bottom: 0px;
        display: inline;
        left: 0;
        right: 0;
        background-color: #eeeeee;
        box-shadow: 0px -3px 5px 0px #656565;
        font-size: 23px;
        height: 97px;
      `}
    >
      <ul
        css={css`
          display: flex;
          width: fill-available;
          height: fill-available;
          margin-left: 0;

          li {
            margin: 0 auto;
            list-style: none;
            align-self: center;
            font-family: "Archia-Regular";

            a {
              top: 50%;
              text-decoration: none;
              color: #121314;
              position: relative;
            }
          }
        `}
      >
        <li>
          <a href="#about">Présentation</a>
        </li>
        <li>
          <a href="#cpt">Mes compétences</a>
        </li>
        <li>
          <a href="#proj">Projets</a>
        </li>
        <li>
          <a href="#contact">Me contacter</a>
        </li>
        <li>
          <a target="_blank" href="medias/cv.pdf">
            CV
          </a>
        </li>
      </ul>
    </div>
  );
};
