import type { FC } from "react";
import React, { Fragment } from "react";

interface IModifiersProps {
  modifiers?: Record<string, string> | string[];
  title: string;
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

export type { IModifiersProps };
export { Modifiers };
