import type { FC } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Colors } from "./Colors";
import { SideBar } from "./SideBar";
import { Spacing } from "./Spacing";
import { Text } from "./Text";

const Docs: FC = (): JSX.Element => (
  <div className={"d-f"}>
    <SideBar />
    <div className={"bg-light1 grow p6"}>
      <Routes>
        <Route element={<Colors />} path={"colors"} />
        <Route element={<Spacing />} path={"spacing"} />
        <Route element={<Text />} path={"text"} />
        <Route element={<Colors />} path={""} />
      </Routes>
    </div>
  </div>
);

export { Docs };
