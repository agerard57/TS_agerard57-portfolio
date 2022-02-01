import { FC } from "react";
import { useTranslation } from "react-i18next";

import { SkillCard } from "./SkillCard";

export const SoftUsed: FC = () => {
  const { t } = useTranslation();
  const softwares = ["ae", "blender", "fls", "git", "mso", "psd", "veg"];

  return (
    <div className="container">
      <div className="card-group">
        {softwares.map((key) => (
          <SkillCard
            title={t("Skills.softwares." + t(["days", key]) + ".title")}
            src={t("Skills.softwares." + t(["days", key]) + ".src")}
            key={key}
            description={t(
              "Skills.softwares." + t(["days", key]) + ".description"
            )}
            acquired={t("Skills.softwares." + t(["days", key]) + ".acquired")}
          />
        ))}
      </div>
    </div>
  );
};
