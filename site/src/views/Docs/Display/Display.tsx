import type { FC } from "react";
import React from "react";

import { Section } from "../components";

const displays = {
  b: "block",
  f: "flex",
  i: "inline",
  ib: "inline-block",
  if: "inline-flex",
};

const Display: FC = (): JSX.Element => (
  <Section id={"display"} title={"Display"}
    notation={{
      base: "d",
      values: displays,
    }}
  />
);

export { Display };
