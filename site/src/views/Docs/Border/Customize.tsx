import type { FC } from "react";
import React from "react";

import { Customize } from "../components/Section";

const variables =
`$border: (
  n: 3, // maximum border-width (.bdr3)
  rnd: 4px, // border-radius of .rnd
);`;

const BorderCustomize: FC = (): JSX.Element => (
  <Customize variables={variables} />
);

export { BorderCustomize };
