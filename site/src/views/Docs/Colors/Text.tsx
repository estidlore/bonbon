import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";

import { Section } from "../components";

const nums = range(1, 8);

const element = "d-ib f3 fw7 p1";
const wrapper = "d-f jc-around m1 py3 rnd";

const Text: FC = (): JSX.Element => (
  <Section
    examples={
      <Fragment>
        <div className={`${wrapper} bg-light1`}>
          {nums.map((val) => (
            <p className={`${element} dark${val}`} key={val}>
              {`dark${val}`}
            </p>
          ))}
        </div>
        <div className={`${wrapper} bg-dark1`}>
          {nums.map((val) => (
            <p className={`${element} light${val}`} key={val}>
              {`light${val}`}
            </p>
          ))}
        </div>
        <div className={`${wrapper} bg-light1`}>
          {nums.map((val) => (
            <p className={`${element} primary${val}`} key={val}>
              {`primary${val}`}
            </p>
          ))}
        </div>
      </Fragment>
    }
    id={"text"}
    title={"Text"}
  />
);

export { Text };
