import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Contact } from "../contact";
import { LandingPage } from "../landingPage";
import { Layout } from "../layout";
import { Projects } from "../projects";
import { Resume } from "../resume";
import { Skills } from "../skills";

export const RouteManager: FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Resume />} />
      </Routes>
    </Layout>
  </Router>
);
