import type { FC } from "react";
import React from "react";

import { Doc } from "../components";
import { BorderRound } from "./Round";
import { BorderWidth } from "./Width";

const Border: FC = (): JSX.Element => (
  <Doc title={"Border"}>
    <BorderRound />
    <BorderWidth />
  </Doc>
);

export { Border };
