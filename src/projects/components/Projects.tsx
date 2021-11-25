import { FC } from "react";
import { useTranslation } from "react-i18next";

import { BackgroundVideo, BlueBorderBackground, PageTitle } from "../../core";

export const Projects: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <BlueBorderBackground backgroundColor={"transparent"}>
        <BackgroundVideo />
        <PageTitle title={t("Projects.title")} />
      </BlueBorderBackground>
    </>
  );
};
