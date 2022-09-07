import type { FC } from "react";
import React from "react";

import { Doc } from "../components";
import { AlignItems } from "./Align";
import { JustifyContent } from "./Justify";

const Flex: FC = (): JSX.Element => (
  <Doc title={"Flex"}>
    <AlignItems />
    <JustifyContent />
  </Doc>
);

export { Flex };
