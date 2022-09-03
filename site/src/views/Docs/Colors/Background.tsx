import { Box } from "views/Docs/components/Box";
import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";

import { Section } from "../components";

const nums = range(1, 8);

const Background: FC = (): JSX.Element => (
  <Section
    examples={
      <Fragment>
        <div className={"d-f light1 ta-center"}>
          {nums.map((val) => (
            <p className={`bg-dark${val} fill px1 py3`}>{`bg-dark${val}`}</p>
          ))}
        </div>
        <div className={"d-f dark1 ta-center"}>
          {nums.map((val) => (
            <p className={`bg-light${val} fill px1 py3`}>{`bg-light${val}`}</p>
          ))}
        </div>
        <div className={"d-f ta-center"}>
          {nums.map((val) => (
            <p 
              className={
                `bg-primary${val} fill ${val <= 4 ? "light" : "dark"}1 px1 py3`
              }
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
