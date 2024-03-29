import type { FC } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Border } from "./Border";
import { Colors } from "./Colors";
import { DisplayDoc } from "./Display";
import { Flex } from "./Flex";
import { SideBar } from "./SideBar";
import { Sizing } from "./Sizing";
import { Spacing } from "./Spacing";
import { Text } from "./Text";

const Docs: FC = (): JSX.Element => (
  <div className={"d-f"}>
    <SideBar />
    <div className={"bg-light1 d-f grow overflowx p6"}>
      <Routes>
        <Route element={<Border />} path={"border"} />
        <Route element={<Colors />} path={"colors"} />
        <Route element={<DisplayDoc />} path={"display"} />
        <Route element={<Flex />} path={"flex"} />
        <Route element={<Sizing />} path={"sizing"} />
        <Route element={<Spacing />} path={"spacing"} />
        <Route element={<Text />} path={"text"} />
        <Route element={<Colors />} path={""} />
      </Routes>
    </div>
  </div>
);

export { Docs };
