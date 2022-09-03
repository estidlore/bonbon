import { Box } from "views/Docs/components/Box";
import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";

import { Section } from "../components";

const nums = range(1, 8);

const Text: FC = (): JSX.Element => (
  <Section
    examples={
      <Fragment>
        <div className={"bg-light d-f jc-around m1 p1 rnd"}>
          {nums.map((val) => (
            <p className={`d-ib f3 fw7 dark${val} p1`}>{`dark${val}`}</p>
          ))}
        </div>
        <div className={"bg-dark1 d-f jc-around m1 p1 rnd"}>
          {nums.map((val) => (
            <p className={`d-ib f3 fw7 light${val} p1`}>{`light${val}`}</p>
          ))}
        </div>
        <div className={"bg-light d-f jc-around m1 p1 rnd"}>
          {nums.map((val) => (
            <p className={`d-ib f3 fw7 primary${val} p1`}>{`primary${val}`}</p>
          ))}
        </div>
      </Fragment>
    }
    id={"text"}
    title={"Text"}
  />
);

export { Text };
