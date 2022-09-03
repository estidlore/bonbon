import type { FC } from "react";
import React from "react";
import { Link } from "components";

const SpacingLink: FC = (): JSX.Element => (
  <div>
    <Link to={"spacing"}>{"Spacing"}</Link>
    <div className={"py1 pl4"}>
      <Link to={{ hash: "margin", pathname: "spacing" }}>
        {"Margin"}
      </Link>
      <Link to={{ hash: "padding", pathname: "spacing" }}>
        {"Padding"}
      </Link>
    </div>
  </div>
);

export { SpacingLink };
