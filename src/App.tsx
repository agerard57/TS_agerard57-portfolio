/** @jsxImportSource @emotion/react */
import { FC, Suspense } from "react";
import { ToastProvider } from "react-toast-notifications";

import "./App.css";
import "./i18n";
import { RouteManager } from "./routeManager";

//TODO Proper Suspense

export const App: FC = () => (
  <Suspense fallback={<div>deez</div>}>
    <ToastProvider>
      <RouteManager />
    </ToastProvider>
  </Suspense>
);
