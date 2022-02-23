/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { NavBar } from "./Navbar";
import { Flags } from "./flags";

export const Layout: FC = ({ children }) => (
  <div className="App">
    <Flags />
    {children}
    <NavBar />
  </div>
);
