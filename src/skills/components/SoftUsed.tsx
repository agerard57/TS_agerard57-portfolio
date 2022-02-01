/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

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
        padding-top: 120px;
        padding-bottom: 70px;
      `}
    >
      {softwares.map((key) => (
        <SkillCard
          key={key}
          title={t("Skills.softwares." + t(["days", key]) + ".title")}
          src={t("Skills.softwares." + t(["days", key]) + ".src")}
          description={t(
            "Skills.softwares." + t(["days", key]) + ".description"
          )}
          acquired={t("Skills.softwares." + t(["days", key]) + ".acquired")}
        />
      ))}
    </div>
  );
};
