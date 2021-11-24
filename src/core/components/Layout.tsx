/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { Flags } from "./Flags";
import { NavBar } from "./Navbar";

export const Layout: FC = ({ children }) => (
  <div className="App">
    <Flags />
    {children}
    <NavBar />
  </div>
);
