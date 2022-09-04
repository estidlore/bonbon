import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";

import { Section } from "../components";

const nums = range(1, 8);

const element = "fill px1 py5";
const wrapper = "d-f ta-center";

const Background: FC = (): JSX.Element => (
  <Section
    examples={
      <Fragment>
        <div className={`${wrapper} light1`}>
          {nums.map((val) => (
            <p className={`${element} bg-dark${val}`} key={val}>
              {`bg-dark${val}`}
            </p>
          ))}
        </div>
        <div className={`${wrapper} dark1`}>
          {nums.map((val) => (
            <p className={`${element} bg-light${val}`} key={val}>
              {`bg-light${val}`}
            </p>
          ))}
        </div>
        <div className={wrapper}>
          {nums.map((val) => (
            <p 
              className={
                `${element} bg-primary${val} ${val <= 4 ? "light" : "dark"}1`
              }
              key={val}
            >
              {`bg-primary${val}`}
            </p>
          ))}
        </div>
      </Fragment>
    }
    id={"background"}
    title={"Background"}
  />
);

export { Background };
