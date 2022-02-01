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
  <div className="card">
    <img
      css={css`
        width: 20px;
      `}
      className="card-img-top"
      src={src}
      alt="Card image cap"
    />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      {description.map((description, key) => (
        <p className="card-text" key={key}>
          {description}
        </p>
      ))}
    </div>
    <div className="card-footer">
      <div>
        <ul
          css={css`
            width: 90%;
            margin: 0 auto;
            padding-top: 16px;
            padding-bottom: 18px;
            color: rgba(70, 70, 70, 0.74);
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
              <i className="fa fa-circle"></i>
              {acquired}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
