import { FC } from "react";
import { useTranslation } from "react-i18next";

import { BackgroundVideo, BlueBorderBackground, PageTitle } from "../../core";

export const Presentation: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <BlueBorderBackground backgroundColor={"transparent"}>
        <BackgroundVideo />
        <PageTitle title={t("Presentation.title")} />
      </BlueBorderBackground>
    </>
  );
};
