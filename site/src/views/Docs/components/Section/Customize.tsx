import type { FC } from "react";
import React from "react";

import { Snippet } from "components";

interface ICustomizeProps {
  variables: string;
}

const overwrite =
`$some_variable: <some value>;

@import "@estidlore/bonbon/scss/index.scss";`;

const Customize: FC<ICustomizeProps> = ({
  variables
}: Readonly<ICustomizeProps>): JSX.Element => (
  <section>
    <p className={"f6"}>{"Customize"}</p>
    <p className={"f5"}>{"Variables"}</p>
    <Snippet>{variables}</Snippet>
    <p>
      {"To overwrite a variable, only define it before the @import statement."}
    </p>
    <Snippet>{overwrite}</Snippet>
  </section>
);

export type { ICustomizeProps };
export { Customize };
