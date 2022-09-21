import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";

import { Section } from "../components";

const FontSize: FC = (): JSX.Element => (
  <Section
    examples={
      <Fragment>
        {range(1, 10).map((val) => (
          <span className={`f${val} p2`} key={val}>
            {`f${val}`}
          </span>
        ))}
      </Fragment>
    }
    id={"size"}
    title={"Font size"}
  />
);

export { FontSize };
