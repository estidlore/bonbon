import type { FC } from "react";
import React from "react";

import { Customize } from "../components/Section";

const variables =
`$size: (
  b: 12px, // base size
  growth: $b2_3, // exponential-growth's base
  n: 10, // classes for pixel-based sizing
  p: 10, // classes for percentage-based sizing
);`;

const SizeCustomize: FC = (): JSX.Element => (
  <Customize variables={variables} />
);

export { SizeCustomize };
