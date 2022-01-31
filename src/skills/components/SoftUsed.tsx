import { FC } from "react";
import { useTranslation } from "react-i18next";

import { SkillCard } from "./SkillCard";

export const SoftUsed: FC = () => {
  const { t } = useTranslation();
  const fruits: Array<string> = ["Apple", "Orange", "Banana", "Kiwi"];
  return (
    <div className="container">
      <div className="card-group">
        <SkillCard
          title={"Powerpoint"}
          src={
            "https://www.pierrebaptistebouillon.com/themes/pb/assets/img/logos/angular.svg"
          }
          description={fruits}
          acquired={fruits}
        />
      </div>
    </div>
  );
};
