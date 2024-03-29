import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";

import { Section } from "../components";

const nums = range(1, 8);

const element = "bdr3 fill m1 px1 py4 rnd";
const wrapper = "d-f ta-center";

const Border: FC = (): JSX.Element => (
  <Section
    examples={
      <Fragment>
        <div className={`${wrapper} bg-light1`}>
          {nums.map((val) => (
            <p className={`${element} bdr-dark${val} dark${val}`} key={val}>
              {`bdr-dark${val}`}
            </p>
          ))}
        </div>
        <div className={`${wrapper} bg-dark1`}>
          {nums.map((val) => (
            <p className={`${element} bdr-light${val} light${val}`} key={val}>
              {`bdr-light${val}`}
            </p>
          ))}
        </div>
        <div className={`${wrapper} bg-light1`}>
          {nums.map((val) => (
            <p
              className={`${element} bdr-primary${val} primary${val}`}
              key={val}
            >
              {`bdr-primary${val}`}
            </p>
          ))}
        </div>
        <div className={`${wrapper} bg-light1`}>
          {nums.map((val) => (
            <p
              className={`${element} bdr-secondary${val} secondary${val}`}
              key={val}
            >
              {`bdr-secondary${val}`}
            </p>
          ))}
        </div>
      </Fragment>
    }
    id={"border"}
    title={"Border"}
  />
);

export { Border };
