/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { NavBar } from "./Navbar";

export const Layout: FC = ({ children }) => (
  <div className="App">
    {children}
    <NavBar />
  </div>
);
