import type { FC } from "react";
import React from "react";

import { Customize } from "../components/Section";

const variables =
`$dark: (base: #000, mode: "dark", n: 8);
$light: (base: #fff, mode: "light", n: 8);
$primary: (base: #f2590d, mode: "full", n: 8);
$secondary: (base: #dfc020, mode: "full", n: 8);

$colors: (
  dark: $dark,
  light: $light,
  primary: $primary,
  secondary: $secondary,
);`;

const ColorsCustomize: FC = (): JSX.Element => (
  <Customize variables={variables} />
);

export { ColorsCustomize };
