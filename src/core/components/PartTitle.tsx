/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  title: string;
  alt?: boolean;
  profilePicture?: boolean;
};

export const PartTitle: FC<Props> = ({ title, alt, profilePicture }) => (
  <>
    {profilePicture ? (
      <img
        src={"assets/img/pfp.png"}
        css={css`
          margin: 0 auto;
          margin-top: 30px;
          width: 160px;
          height: 160px;
          border: 3px solid #364ca1;
          border-radius: 50%;
          background: #364ca1;
          display: table;
        `}
      />
    ) : (
      <></>
    )}
    <div
      css={css`
        position: relative;
        margin-top: -20px;
      `}
    >
      <h3
        css={css`
          text-transform: uppercase;
          letter-spacing: 5px;
          font-family: "Archia-Regular";
          font-size: 14px;
          display: inline-block;
          margin: 0 auto;
          padding: 15px 75px;
          background: ${alt ? "none" : "#364ca1"};
          color: ${alt ? "#364ca1" : "#ffffff"};
          border: ${alt ? "2px solid #364ca1" : "none"};
        `}
      >
        {title}
      </h3>
      {alt ? (
        <></>
      ) : (
        <div
          css={css`
            position: relative;
            width: 80%;
            height: 2px;
            margin: 0 auto;
            margin-top: -2px;
            background: #364ca1;
          `}
        />
      )}
    </div>
  </>
);
