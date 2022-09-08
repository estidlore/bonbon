import type { FC } from "react";
import React from "react";

import { Doc } from "../components";
import { Display } from "./Display";

const DisplayDoc: FC = (): JSX.Element => (
  <Doc title={"Display"}>
    <Display />
  </Doc>
);

export { DisplayDoc };
