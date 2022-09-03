import type { FC } from "react";
import React from "react";

import { Doc } from "../components";

import { Background } from "./Background";
import { Text } from "./Text";

const Colors: FC = (): JSX.Element => (
  <Doc title={"Colors"}>
    <Background />
    <Text />
  </Doc>
);

export { Colors };
