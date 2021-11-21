import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "../core";
import { LandingPage } from "../landingPage";

export const RouteManager: FC = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<LandingPage />} />
    </Routes>
    <NavBar />
  </Router>
);
