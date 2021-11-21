import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { LandingPage } from "../landingPage";
import { Layout } from "../layout";
import { Resume } from "../resume";

export const RouteManager: FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/cv" element={<Resume />} />
      </Routes>
    </Layout>
  </Router>
);
