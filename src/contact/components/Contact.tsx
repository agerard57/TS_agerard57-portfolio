import { FC } from "react";
import { useTranslation } from "react-i18next";

import { BlueBorderBackground, BackgroundVideo, PageTitle } from "../../core";
import { Calendly } from "./Calendly";

export const Contact: FC = () => {
  const { t } = useTranslation("contact");
  return (
    <>
      <BlueBorderBackground backgroundColor={"transparent"}>
        <BackgroundVideo />
        <PageTitle title={t("title")} />
        <Calendly />
      </BlueBorderBackground>
    </>
  );
};
