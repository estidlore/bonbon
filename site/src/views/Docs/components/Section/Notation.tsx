import type { FC } from "react";
import React from "react";

import { Modifiers } from "./Modifiers";
import { SubSection } from "./SubSection";

interface INotationProps {
  base: string;
  numbers?: string[];
  values?: Record<string, string>;
}

const Notation: FC<INotationProps> = ({
  base,
  numbers,
  values,
}: Readonly<INotationProps>): JSX.Element => (
  <SubSection title={"Notation"}>
    <p className={"f3 mb1 mt2"}>{"Structure"}</p>
    <p>
      {`${
        base
      }${
        values === undefined ? "" : "-<value>"
      }${
        numbers === undefined ? "" : "<number>"
      }`}
    </p>
    <Modifiers modifiers={values} title={"Values"} />
    <Modifiers modifiers={numbers} title={"Numbers"} />
  </SubSection>
);

export type { INotationProps };
export { Notation };
