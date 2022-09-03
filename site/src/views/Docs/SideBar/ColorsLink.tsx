import type { FC } from "react";
import React from "react";
import { Link } from "components";

const ColorsLink: FC = (): JSX.Element => (
  <div>
    <Link to={"colors"}>{"Colors"}</Link>
  </div>
);

export { ColorsLink };
