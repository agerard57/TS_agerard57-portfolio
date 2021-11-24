/** @jsxImportSource @emotion/react */
import { FC, Suspense } from "react";

import "./App.css";
import "./i18n";
import { RouteManager } from "./routeManager";

//TODO Proper Suspense

export const App: FC = () => (
  <Suspense fallback={<div>deez</div>}>
    <RouteManager />
  </Suspense>
);
