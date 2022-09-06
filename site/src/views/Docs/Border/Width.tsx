import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";
import { Section } from "../components";

const BorderWidth: FC = (): JSX.Element => (
  <Section id={"width"} title={"Border width"}
    examples={
      <Fragment>
        {range(0, 3).map((val) => (
          <span key={val} className={`bdr${val} bdr-light8 p2`}>
            {`bdr${val}`}
          </span>
        ))}
      </Fragment>
    }
  />
);

export { BorderWidth };
