import type { FC } from "react";
import React from "react";

const fontStyles = [
  {
    key: "i",
    val: "italic",
  },
  {
    key: "n",
    val: "normal"
  },
];

const FontStyle: FC = (): JSX.Element => (
  <div id={"style"}>
    <p className={"f6"}>{"Font style"}</p>
    {fontStyles.map(({ key }): JSX.Element => (
      <p className={`fs-${key} p2`}>{`fs-${key}`}</p>
    ))}
  </div>
);

export { FontStyle };
