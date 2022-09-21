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
  <Section id={"display"} notation={{
      base: "d",
      values: displays,
    }}
    title={"Display"}
  />
);

export { Display };
