/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { Document, Page } from "react-pdf";

export const Resume: FC = () => (
  <div>
    <Document file={"/assets/cv.pdf"}>
      <Page pageNumber={1} />
    </Document>
  </div>
);
