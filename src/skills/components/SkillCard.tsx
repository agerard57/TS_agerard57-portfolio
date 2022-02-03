/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { languagesLogos } from "../assets";
import { softwaresLogos } from "../assets";

type Props = {
  skillType: string;
  skillName: string;
};

export const SkillCard: FC<Props> = ({ skillType, skillName }) => {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const linkBuilder: any = (type: string) =>
    t("Skills." + skillType + "." + skillName + "." + type);
  const title = linkBuilder("title");
  const description: string[] = linkBuilder("description");
  const acquired: string[] = linkBuilder("acquired");

  return (
    <div
      className="col-sm-6"
      css={css`
        margin-bottom: 20px;
      `}
    >
      <div>
        <img
          src={
            skillType === "software"
              ? softwaresLogos[skillName]
              : languagesLogos[skillName]
          }
          css={css`
            width: 65px;
            height: 65px;
            margin: 0 auto;
          `}
        />
        <div
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
          <h2
            css={css`
              font-size: 18px;
              margin-top: 20px;
              margin-bottom: 12px;
              letter-spacing: 2px;
              font-family: "Archia-Regular";
              text-transform: uppercase;
            `}
          >
            {title}
          </h2>
          {description.map((description, key) => (
            <p
              key={key}
              css={css`
                width: 90%;
                margin: 0 auto;
                font-family: SourceSansProRegular, serif;
                font-size: medium;
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
                font-size: medium;
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
};
