/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type Props = {
  title: string;
  src: string;
  description: string[];
  acquired: string[];
};

export const SkillCard: FC<Props> = ({ title, src, acquired, description }) => (
  <div
    className="col-sm-6"
    css={css`
      font-size: medium;
      margin-bottom: 20px;
    `}
  >
    <div>
      <img
        src={src}
        css={css`
          width: 65px;
          height: 65px;
          margin: 0 auto;
        `}
      />
      <div
        className="details"
        css={css`
          width: 80%;
          padding-top: 22px;
          padding-bottom: 20px;
          margin: 0 auto;
          margin-top: -30px;
          background: #eaeaea;
          border: 1px solid rgba(72, 72, 72, 0.22);
          border-bottom: transparent;
        `}
      >
        <h1
          css={css`
            font-size: 16px;
            margin-top: 20px;
            margin-bottom: 12px;
            letter-spacing: 2px;
            font-family: ProximaBold, serif;
            text-transform: uppercase;
          `}
        >
          {title}
        </h1>
        {description.map((description, key) => (
          <p
            key={key}
            css={css`
              width: 90%;
              margin: 0 auto;
              font-family: SourceSansProRegular, serif;
              color: #848484;
            `}
          >
            {description}
          </p>
        ))}
      </div>
      <ul
        css={css`
          width: 90%;
          margin: 0 auto;
          background: #484848;
          padding-top: 16px;
          padding-bottom: 18px;
          color: rgba(255, 255, 255, 0.74);
          text-align: left;
        `}
      >
        {acquired.map((acquired, key) => (
          <li
            key={key}
            css={css`
              font-family: SourceSansProRegular, serif;
              padding-left: 40px;
            `}
          >
            <i className="fa fa-circle"></i> {acquired}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
