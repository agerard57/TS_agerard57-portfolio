import { FC } from "react";
import { useTranslation } from "react-i18next";

import { BlueBorderBackground, BackgroundVideo, PageTitle } from "../../core";
import { PartTitle } from "../../core";
import { SoftUsed } from "./SoftUsed";

export const Skills: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <BlueBorderBackground backgroundColor={"transparent"}>
        <BackgroundVideo />
        <PageTitle title={t("Skills.title")} />
        <PartTitle title={t("Skills.parts.software")} />
        <SoftUsed />
      </BlueBorderBackground>
    </>
  );
};
