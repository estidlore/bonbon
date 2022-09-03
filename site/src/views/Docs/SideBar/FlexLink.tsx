import type { FC } from "react";
import React from "react";
import { Link } from "components";

const FlexLink: FC = (): JSX.Element => (
  <div>
    <Link disabled={true} to={"flex"}>
      {"Flex"}
    </Link>
  </div>
);

export { FlexLink };
