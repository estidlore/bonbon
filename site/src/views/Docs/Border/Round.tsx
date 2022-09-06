import type { FC } from "react";
import React, { Fragment } from "react";

import { Section } from "../components";

const BorderRound: FC = (): JSX.Element => (
  <Section id={"round"} title={"Border round"}
    examples={
      <Fragment>
        {["", "-50", "-b", "-l", "-r", "-t"].map((val) => (
          <div
            className={`bdr1 bg-light6 d-ib m1 p1 rnd${val}`}
            key={`rnd${val}`}
          >
            {`rnd${val}`}
          </div>
        ))}
      </Fragment>
    }
  />
);

export { BorderRound };
