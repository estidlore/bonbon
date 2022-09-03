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
          <Box className={`m${val} p1`}>{`m${val}`}</Box>
        ))}
        {nums.map((val) => (
          <Box className={`mx${val} p1`}>{`mx${val}`}</Box>
        ))}
        {nums.map((val) => (
          <Box className={`ml${val} p1`}>{`ml${val}`}</Box>
        ))}
        {nums.map((val) => (
          <Box className={`mr${val} p1`}>{`mr${val}`}</Box>
        ))}
        {nums.map((val) => (
          <Box className={`my${val} p1`}>{`my${val}`}</Box>
        ))}
        {nums.map((val) => (
          <Box className={`mt${val} p1`}>{`mt${val}`}</Box>
        ))}
        {nums.map((val) => (
          <Box className={`mb${val} p1`}>{`mb${val}`}</Box>
        ))}
      </Fragment>
    }
    id={"margin"}
    title={"Margin"}
  />
);

export { Margin };
