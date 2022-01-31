import { FC } from "react";
import { useTranslation } from "react-i18next";

import { BlueBorderBackground, BackgroundVideo, PageTitle } from "../../core";
import { SoftUsed } from "./SoftUsed";

export const Skills: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <BlueBorderBackground backgroundColor={"transparent"}>
        <BackgroundVideo />
        <PageTitle title={t("Skills.title")} />
        <SoftUsed />
      </BlueBorderBackground>
    </>
  );
};
