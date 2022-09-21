import type { FC } from "react";
import React, { Fragment } from "react";

import { SubSection } from "./SubSection";

interface IModifiersProps {
  modifiers?: Record<string, string> | string[];
  title: string;
}

interface INotationProps {
  base: string;
  numbers?: string[];
  values?: Record<string, string>;
}

const Modifiers: FC<IModifiersProps> = ({
  modifiers,
  title
}: Readonly<IModifiersProps>): JSX.Element | null =>
  modifiers === undefined ? null : (
    <Fragment>
      <p className={"f3 mb1 mt2"}>{title}</p>
      <div className={"d-f"}>
        <div className={"mr2"}>
          {Object.keys(modifiers).map((key) => (
            <p key={`nk${key}`}>{key}</p>
          ))}
        </div>
        <div className={"grow"}>
          {Object.values(modifiers).map((val) => (
            <p key={`nv${val}`}>{`= ${val}`}</p>
          ))}
        </div>
      </div>
    </Fragment>
  );

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
