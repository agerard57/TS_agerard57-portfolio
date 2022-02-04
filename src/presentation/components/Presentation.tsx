/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { BackgroundVideo, BlueBorderBackground, PageTitle } from "../../core";
import { PartTitle } from "../../core";

export const Presentation: FC = () => {
  const { t } = useTranslation("presentation");

  return (
    <>
      <BlueBorderBackground backgroundColor={"transparent"}>
        <BackgroundVideo />
        <div
          className="container"
          css={css`
            width: 80%;
          `}
        >
          <PageTitle title={t("title")} />
          <PartTitle title="MOI" profilePicture />
          {/* <ProfileDescription></ProfileDescription> */}
        </div>
      </BlueBorderBackground>
    </>
  );
};
