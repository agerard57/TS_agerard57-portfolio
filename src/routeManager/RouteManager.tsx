import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Contact } from "../contact";
import { Layout } from "../core";
import { LandingPage } from "../landingPage";
import { Presentation } from "../presentation";
import { Projects } from "../projects";
import { Resume } from "../resume";
import { Skills } from "../skills";

export const RouteManager: FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Layout>
  </Router>
);
