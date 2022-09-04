import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";

import { Box, Section } from "../components";

const nums = range(0, 10);

const Pixel: FC = (): JSX.Element => (
  <Section
    examples={
      <Fragment>
        {nums.map((val) => (
          <Box className={`h2 w${val}`} key={val} label={`w${val}`} />
        ))}
        {nums.map((val) => (
          <Box className={`w2 h${val}`} key={val} label={`h${val}`} />
        ))}
      </Fragment>
    }
    id={"pixel"}
    title={"By Pixel"}
  />
);

export { Pixel };
