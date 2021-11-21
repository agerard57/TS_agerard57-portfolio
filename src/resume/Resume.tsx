/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Document, Page } from "react-pdf";

export const Resume: FC = () => (
  <div>
    <Document file={"/cv.pdf"}>
      <Page pageNumber={1} />
    </Document>
  </div>
);
