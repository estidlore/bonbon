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
  <Section id={"style"} title={"Font style"}
    examples={
      <Fragment>
        {fontStyles.map(({ key }) => (
          <span key={key} className={`fs-${key} p2`}>
            {`fs-${key}`}
          </span>
        ))}
      </Fragment>
    }
  />
);

export { FontStyle };
