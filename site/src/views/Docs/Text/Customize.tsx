import type { FC } from "react";
import React from "react";

import { Customize } from "../components/Section";

const variables =
`$font-families: (
  arial: arial,
  system: system-ui,
  tahoma: tahoma,
  verdana: verdana,
);

$font-styles: (
  i: italic,
  n: normal,
);

$text-aligns: (
  center: center,
  end: end,
  justify: justify,
  start: start,
);

$text-decors: (
  no: none,
  over: overline,
  through: line-through,
  under: underline,
);

$white-spaces: (
  bs: break-spaces,
  n: normal,
  nw: nowrap,
  p: pre,
  pl: pre-line,
  pw: pre-wrap,
);

$word-wraps: (
  bw: break-word,
  n: normal,
);

$f: (
  b: 12px, // base font size
  growth: $b1_3, // exponential-growth's base
  n: 10, // classes (from 0 to n) for font size
);`;

const TextCustomize: FC = (): JSX.Element => (
  <Customize variables={variables} />
);

export { TextCustomize };
