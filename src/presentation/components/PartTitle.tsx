/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  title: string;
  photoUrl?: string;
};

export const PartTitle: FC<Props> = ({ title, photoUrl }) => (
  <>
    {photoUrl ? (
      <img
        src={photoUrl}
        alt="with"
        css={css`
          margin: 0 auto;
          margin-top: 30px;
          width: 160px;
          height: 160px;
          border: 3px solid #1f1a17;
          border-radius: 50%;
          background: #1f1a17;
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
          background: #1f1a17;
          color: #fff;
        `}
      >
        {title}
      </h3>
      <div
        css={css`
          position: relative;
          width: 80%;
          height: 2px;
          margin: 0 auto;
          margin-top: -2px;
          background: #1f1a17;
        `}
      />
    </div>
  </>
);
