import type { FC } from "react";
import React from "react";

import { Customize } from "../components/Section";

const variables =
`$space: (
  b: 12px, // base space
  growth: $b2_3, // exponential-growth's base
  n: 10, // class modifiers (from 0 to n) for spacing
);`;

const SpaceCustomize: FC = (): JSX.Element => (
  <Customize variables={variables} />
);

export { SpaceCustomize };
