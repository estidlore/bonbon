import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";
import { Section } from "../components";

const FontSize: FC = (): JSX.Element => (
  <Section id={"size"} title={"Font size"}
    examples={
      <Fragment>
        {range(1, 10).map((val) => (
          <span className={`f${val} p2`}>{`f${val}`}</span>
        ))}
      </Fragment>
    }
  />
);

export { FontSize };
