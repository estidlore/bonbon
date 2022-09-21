import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";

import { Section } from "../components";

const BorderWidth: FC = (): JSX.Element => (
  <Section
    examples={
      <Fragment>
        {range(0, 3).map((val) => (
          <div className={`bdr${val} bdr-dark6 d-ib m1 p2 rnd`} key={val}>
            {`bdr${val}`}
          </div>
        ))}
      </Fragment>
    }
    id={"width"}
    title={"Border width"}
  />
);

export { BorderWidth };
