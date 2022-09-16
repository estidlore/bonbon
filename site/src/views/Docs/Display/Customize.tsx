import type { FC } from "react";
import React from "react";

import { Customize } from "../components/Section";

const variables =
`$displays: (
  b: block,
  f: flex,
  i: inline,
  ib: inline-block,
  if: inline-flex,
);

$opacity: (n: 10);

$z: (n: 3, step: 10);`;

const DisplayCustomize: FC = (): JSX.Element => (
  <Customize variables={variables} />
);

export { DisplayCustomize };
