import { FC } from "react";
import { useTranslation } from "react-i18next";

import { SkillCard } from "./SkillCard";

export const SoftUsed: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="card-group">
        <SkillCard />
      </div>
    </div>
  );
};
