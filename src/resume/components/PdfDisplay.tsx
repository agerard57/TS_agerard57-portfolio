/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { Document, Page } from "react-pdf";

export const PdfDisplay: FC = () => (
  <div>
    <Document file={"/assets/cv.pdf"}>
      <Page scale={0.3} pageNumber={1} />
    </Document>
  </div>
);
