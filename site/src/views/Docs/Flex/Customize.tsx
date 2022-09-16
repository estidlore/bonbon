import type { FC } from "react";
import React from "react";

import { Customize } from "../components/Section";

const variables =
`$aligns: (
  center: center,
  end: flex-end,
  start: flex-start,
  stretch: stretch,
);

$justifies: (
  around: space-around,
  between: space-between,
  center: center,
  end: end,
  even: space-evenly,
  start: start,
);`;

const FlexCustomize: FC = (): JSX.Element => (
  <Customize variables={variables} />
);

export { FlexCustomize };
