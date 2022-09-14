import type { FC } from "react";
import React from "react";

import { Doc } from "../components";
import { BorderCustomize } from "./Customize";
import { BorderRound } from "./Round";
import { BorderWidth } from "./Width";

const Border: FC = (): JSX.Element => (
  <Doc title={"Border"}>
    <BorderRound />
    <BorderWidth />
    <BorderCustomize />
  </Doc>
);

export { Border };
