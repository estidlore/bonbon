import type { FC } from "react";
import React from "react";

import { Link } from "components";

const FlexLink: FC = (): JSX.Element => (
  <div>
    <Link to={"flex"}>{"Flex"}</Link>
    <div className={"py1 pl4"}>
      <Link to={{ hash: "align", pathname: "flex" }}>
        {"Align"}
      </Link>
      <Link to={{ hash: "justify", pathname: "flex" }}>
        {"Justify"}
      </Link>
    </div>
  </div>
);

export { FlexLink };
