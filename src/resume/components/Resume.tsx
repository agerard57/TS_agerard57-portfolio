/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Document, Page } from "react-pdf";

import { BlueBorderBackground, BackgroundVideo, PageTitle } from "../../core";

export const Resume: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <BlueBorderBackground backgroundColor={"transparent"}>
        <BackgroundVideo />
        <PageTitle title={t("Resume.title")} />
        <div>
          <Document file={"/assets/cv.pdf"}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </BlueBorderBackground>
    </>
  );
};
