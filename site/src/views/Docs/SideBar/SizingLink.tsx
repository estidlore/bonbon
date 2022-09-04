import type { FC } from "react";
import React from "react";
import { Link } from "components";

const SizingLink: FC = (): JSX.Element => (
  <div>
    <Link to={"sizing"}>{"Sizing"}</Link>
  </div>
);

export { SizingLink };
