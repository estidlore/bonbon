import type { FC } from "react";
import React from "react";
import { Link } from "components";

const ColorsLink: FC = (): JSX.Element => (
  <div>
    <Link to={"colors"}>{"Colors"}</Link>
    <div className={"py1 pl4"}>
      <Link to={{ hash: "background", pathname: "colors" }}>
        {"Background"}
      </Link>
      <Link to={{ hash: "border", pathname: "colors" }}>
        {"Border"}
      </Link>
      <Link to={{ hash: "text", pathname: "colors" }}>
        {"Text"}
      </Link>
    </div>
  </div>
);

export { ColorsLink };
