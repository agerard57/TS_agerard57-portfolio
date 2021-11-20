/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

export const LandingPageDescription: FC = () => (
  <div
    css={css`
      p {
        color: black;
        /* opacity: 0;
        transition: opacity 0.8s; */ //This is for the animation, duh
        text-align: center;
        height: 103%;
        margin: 8vh;
        font-size: 70%;
        font-family: "Archia-Regular";
      }
      a {
        text-decoration: none;
        color: #121314;
        position: relative;
      }
      a:after {
        content: "";
        position: absolute;
        top: 60%;
        left: -0.1em;
        right: -0.1em;
        bottom: 0;
        transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
        background-color: #7f99ff4d;
      }
      a:hover:after {
        top: 0%;
      }
    `}
  >
    <p>
      Je suis un étudiant en informatique. J&apos;espère me spécialiser en
      design et front-end :)
    </p>
    <p>
      Vous pouvez voir{" "}
      <a href="#cpt">mes principales compétences en cliquant ici</a>,
    </p>
    <p>
      <b>bonne visite !</b>
    </p>
  </div>
);
