/** @jsxImportSource @emotion/react */
// eslint-disable-next-line import/no-internal-modules
import "bootstrap/dist/css/bootstrap.min.css";
import { FC, Suspense } from "react";
import { ToastProvider } from "react-toast-notifications";

import "./App.css";
import { LoadingScreen } from "./loadingScreen";
import { RouteManager } from "./routeManager";

//TODO Proper Suspense

export const App: FC = () => (
  <Suspense fallback={<LoadingScreen />}>
    <ToastProvider>
      <RouteManager />
    </ToastProvider>
  </Suspense>
);
