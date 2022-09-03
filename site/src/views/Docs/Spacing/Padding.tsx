import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";

import { Box, Section } from "../components";

const nums = range(0, 10);

const Padding: FC = (): JSX.Element => (
  <Section
    examples={
      <Fragment>
        {nums.map((val) => (
          <Box className={`p${val}`}>{`p${val}`}</Box>
        ))}
        {nums.map((val) => (
          <Box className={`px${val}`}>{`px${val}`}</Box>
        ))}
        {nums.map((val) => (
          <Box className={`pl${val}`}>{`pl${val}`}</Box>
        ))}
        {nums.map((val) => (
          <Box className={`pr${val}`}>{`pr${val}`}</Box>
        ))}
        {nums.map((val) => (
          <Box className={`py${val}`}>{`py${val}`}</Box>
        ))}
        {nums.map((val) => (
          <Box className={`pt${val}`}>{`pt${val}`}</Box>
        ))}
        {nums.map((val) => (
          <Box className={`pb${val}`}>{`pb${val}`}</Box>
        ))}
      </Fragment>
    }
    id={"padding"}
    title={"Padding"}
  />
);

export { Padding };
