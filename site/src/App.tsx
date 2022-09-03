import type { FC } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import { AppWrapper, Nav } from "components";
import { navLink } from "components/Nav";
import imgBonbon from "imgs/Bonbon.svg";
import { Docs, Home, NotFound } from "views";

const App: FC = (): JSX.Element => (
  <Router>
    <AppWrapper>
      <Nav logo={imgBonbon} name={"Bonbon"}>
        <NavLink className={navLink} to={"docs"}>
          {"Docs"}
        </NavLink>
      </Nav>
      <Routes>
        <Route element={<Docs />} path={"docs/*"} />
        <Route element={<Home />} path={""} />
        <Route element={<NotFound />} path={"*"} />
      </Routes>
    </AppWrapper>
  </Router>
);

export { App };
