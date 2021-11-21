/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Link } from "react-router-dom";

/* TODO Add an arrow that displays the navbar when hovered */

export const NavBar: FC = () => (
  <div
    css={css`
      position: fixed;
      bottom: 0px;
      left: 0;
      right: 0;
      background-color: #eeeeee;
      box-shadow: 0px -3px 5px 0px #656565;
      font-size: 1.4vw;
      height: 5vw;
    `}
  >
    <ul
      css={css`
        display: flex;
        height: fill-available;
        margin-left: 0;
        padding: 0;
        width: fill-available;

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
      <li>
        <Link to="/home">Présentation</Link>
      </li>
      <li>
        <a href="#cpt">Mes compétences</a> {/* TODO Change Route */}
      </li>
      <li>
        <a href="#proj">Projets</a> {/* TODO Change Route */}
      </li>
      <li>
        <a href="#contact">Me contacter</a> {/* TODO Change Route */}
      </li>
      <li>
        <a target="_blank" href="medias/cv.pdf">
          CV
        </a>
      </li>
    </ul>
  </div>
);
