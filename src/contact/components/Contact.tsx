/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { InlineWidget } from "react-calendly";
import { useTranslation } from "react-i18next";

import { BlueBorderBackground, BackgroundVideo, PageTitle } from "../../core";

export const Contact: FC = () => {
  const { t } = useTranslation("contact");
  return (
    <>
      <BlueBorderBackground backgroundColor={"transparent"}>
        <BackgroundVideo />
        <PageTitle title={t("title")} />
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-md-6">
              <InlineWidget url="https://calendly.com/agerard57" />
            </div>
            <div className="col-xs-6  col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83585.40926309294!2d6.126194057231984!3d49.10480381483622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dc1b6074b6a9%3A0x596be4b635bba669!2sMetz!5e0!3m2!1sfr!2sfr!4v1646302663049!5m2!1sfr!2sfr"
                css={css`
                  border: 0;
                  width: 100%;
                  height: 79%;
                `}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </BlueBorderBackground>
    </>
  );
};
