import type { FC } from "react";
import React from "react";

import { Doc } from "../components";
import { TextCustomize } from "./Customize";
import { FontSize } from "./FontSize";
import { FontStyle } from "./FontStyle";

const Text: FC = (): JSX.Element => (
  <Doc title={"Text"}>
    <FontSize />
    <FontStyle />
    <TextCustomize />
  </Doc>
);

export { Text };
