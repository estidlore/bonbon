import { Box } from "views/Docs/components/Box";
import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";

import { Section } from "../components";

const nums = range(0, 10);

const Margin: FC = (): JSX.Element => (
  <Section
    examples={
      <Fragment>
        {nums.map((val) => (
          <Box className={`m${val} p1`} key={val}>
            {`m${val}`}
          </Box>
        ))}
        {nums.map((val) => (
          <Box className={`mx${val} p1`} key={val}>
            {`mx${val}`}
          </Box>
        ))}
        {nums.map((val) => (
          <Box className={`ml${val} p1`} key={val}>
            {`ml${val}`}
          </Box>
        ))}
        {nums.map((val) => (
          <Box className={`mr${val} p1`} key={val}>
            {`mr${val}`}
          </Box>
        ))}
        {nums.map((val) => (
          <Box className={`my${val} p1`} key={val}>
            {`my${val}`}
          </Box>
        ))}
        {nums.map((val) => (
          <Box className={`mt${val} p1`} key={val}>
            {`mt${val}`}
          </Box>
        ))}
        {nums.map((val) => (
          <Box className={`mb${val} p1`} key={val}>
            {`mb${val}`}
          </Box>
        ))}
      </Fragment>
    }
    id={"margin"}
    title={"Margin"}
  />
);

export { Margin };
