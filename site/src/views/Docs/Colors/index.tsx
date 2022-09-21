import type { FC } from "react";
import React from "react";

import { Doc } from "../components";
import { Background } from "./Background";
import { Border } from "./Border";
import { ColorsCustomize } from "./Customize";
import { Text } from "./Text";

const Colors: FC = (): JSX.Element => (
  <Doc title={"Colors"}>
    <Background />
    <Border />
    <Text />
    <ColorsCustomize />
  </Doc>
);

export { Colors };
