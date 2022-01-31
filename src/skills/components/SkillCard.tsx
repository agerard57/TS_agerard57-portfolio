/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const SkillCard: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="card">
      <img
        css={css`
          width: 20px;
        `}
        className="card-img-top"
        src="https://www.pierrebaptistebouillon.com/themes/pb/assets/img/logos/angular.svg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Software</h5>
        <p className="card-text">
          This is a sample test while I implement some good ol&apos; data
        </p>
      </div>
      <div className="card-footer">
        <div>
          <ul
            css={css`
              width: 90%;
              margin: 0 auto;
              padding-top: 16px;
              padding-bottom: 18px;
              color: rgba(70, 70, 70, 0.74);
              text-align: left;
            `}
          >
            <li
              css={css`
                font-family: SourceSansProRegular, serif;
                padding-left: 40px;
              `}
            >
              <i className="fa fa-circle"></i> Sample 1
            </li>
            <li>
              <i className="fa fa-circle"></i> Sample 2
            </li>
            <li>
              <i className="fa fa-circle"></i> Sample 3
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
