import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";

import { Box, Section } from "../components";

const nums = range(1, 10).map((val) => val * 10);

const Percentage: FC = (): JSX.Element => (
  <Section
    examples={
      <Fragment>
        {nums.map((val) => (
          <Box
            className={`h2 wp${val}`}
            key={val}
            label={`wp${val}`}
            wrapperClass={"grow"}
          />
        ))}
        {nums.map((val) => (
          <div className={"d-ib"} key={val}>
            <Box className={`hp${val}`} wrapperClass={"h9"}>
              {`hp${val}`}
            </Box>
          </div>
        ))}
      </Fragment>
    }
    id={"percentage"}
    title={"By Percentage"}
  />
);

export { Percentage };
