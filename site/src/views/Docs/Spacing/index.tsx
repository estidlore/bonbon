import type { FC } from "react";
import React from "react";

import { Doc } from "../components";
import { Margin } from "./Margin";
import { Padding } from "./Padding";

const Spacing: FC = (): JSX.Element => (
  <Doc title={"Spacing"}>
    <Margin />
    <Padding />
  </Doc>
);

export { Spacing };
