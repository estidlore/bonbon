import type { FC } from "react";
import React, { Fragment } from "react";

import { Section } from "../components";

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
  <Section examples={
      <Fragment>
        {fontStyles.map(({ key }) => (
          <span className={`fs-${key} p2`} key={key}>
            {`fs-${key}`}
          </span>
        ))}
      </Fragment>
    } id={"style"}
    title={"Font style"}
  />
);

export { FontStyle };
