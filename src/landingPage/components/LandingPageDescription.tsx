/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type Props = {
  hasTypeWriterLoopEndedOnce: boolean;
};
export const LandingPageDescription: FC<Props> = ({
  hasTypeWriterLoopEndedOnce,
}) => {
  const { t } = useTranslation();

  return (
    <div
      css={css`
        p {
          opacity: ${hasTypeWriterLoopEndedOnce ? "100%" : "0%"};
          transition: opacity 0.8s;
          color: black;
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
          transition: left 2000ms cubic-bezier(1, 0.8, 0.13, 1);
          background-color: #7f99ff4d;
        }
        a:hover:after {
          top: 0%;
        }
      `}
    >
      <p>
        {t("Student.Title1")} J&apos;espère me spécialiser en design et
        front-end :)
      </p>
      <p>
        Vous pouvez voir{" "}
        <Link to="/skills">mes principales compétences en cliquant ici</Link>,
      </p>
      <p>
        <b>bonne visite !</b>
      </p>
    </div>
  );
};
