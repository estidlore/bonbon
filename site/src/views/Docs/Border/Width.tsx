import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";
import { Section } from "../components";

const BorderWidth: FC = (): JSX.Element => (
  <Section id={"width"} title={"Border width"}
    examples={
      <Fragment>
        {range(0, 3).map((val) => (
          <div key={val} className={`bdr${val} bdr-dark6 d-ib m1 p2 rnd`}>
            {`bdr${val}`}
          </div>
        ))}
      </Fragment>
    }
  />
);

export { BorderWidth };
