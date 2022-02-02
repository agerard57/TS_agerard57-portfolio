/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { SkillCard } from "./SkillCard";

type Props = {
  skillType: string;
  skillArray: string[];
};

export const SkillsGrid: FC<Props> = ({ skillType, skillArray }) => (
  <div
    className="container"
    css={css`
      width: 75%;
      margin: 0 auto;
      padding-top: 60px;
      padding-bottom: 70px;
    `}
  >
    <div
      className="row"
      css={css`
        align-items: flex-end;
      `}
    >
      {skillArray.map((key) => (
        <SkillCard key={key} skillType={skillType} skillName={key} />
      ))}
    </div>
  </div>
);
