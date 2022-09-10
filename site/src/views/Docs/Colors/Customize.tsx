import type { FC } from "react";
import React from "react";

import { Snippet } from "components";

const code =
`$primary: (base: #df2020, mode: "full", n: 8);

@import "@estidlore/bonbon/scss/index.scss";`;

const Customize: FC = (): JSX.Element => (
  <div>
    <p className={"f6"}>{"Customize"}</p>
    <p>{"You can customize an entire color palette as follows."}</p>
    <Snippet>{code}</Snippet>
  </div>
);

export { Customize };
