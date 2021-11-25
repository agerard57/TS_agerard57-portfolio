/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { BlueBorderBackground, BackgroundVideo, PageTitle } from "../../core";
import { PdfDisplay } from "./PdfDisplay";

export const Resume: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <BlueBorderBackground backgroundColor={"transparent"}>
        <BackgroundVideo />
        <PageTitle title={t("Resume.title")} />
        <PdfDisplay />
      </BlueBorderBackground>
    </>
  );
};
