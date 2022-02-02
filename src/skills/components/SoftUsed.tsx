/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { softwareLogos } from "../assets";
import { SkillCard } from "./SkillCard";

export const SoftUsed: FC = () => {
  const { t } = useTranslation();
  const softwares = ["ae", "blender", "fls", "git", "mso", "psd", "veg"];

  return (
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
        {softwares.map((key) => (
          <SkillCard
            key={key}
            title={t("Skills.softwares." + key + ".title")}
            src={t("Skills.softwares." + key + ".src")}
            description={t("Skills.softwares." + key + ".description")}
            acquired={t("Skills.softwares." + key + ".acquired")}
          />
        ))}
      </div>
    </div>
  );
};
