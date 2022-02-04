import React from "react";
import ReactDOM from "react-dom";
import { pdfjs } from "react-pdf";

import { App } from "./App";
import "./i18n";
import "./index.css";

pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.min.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
