import type { FC } from "react";
import React from "react";

import { Doc } from "../components";
import { DisplayCustomize } from "./Customize";
import { Display } from "./Display";

const DisplayDoc: FC = (): JSX.Element => (
  <Doc title={"Display"}>
    <Display />
    <DisplayCustomize />
  </Doc>
);

export { DisplayDoc };
