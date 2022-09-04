import type { FC } from "react";
import React from "react";

import { Doc } from "../components";

import { Percentage } from "./Percentage";
import { Pixel } from "./Pixel";

const Sizing: FC = (): JSX.Element => (
  <Doc title={"Sizing"}>
    <Pixel />
    <Percentage />
  </Doc>
);

export { Sizing };
