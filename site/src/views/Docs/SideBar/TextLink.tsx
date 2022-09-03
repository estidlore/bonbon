import type { FC } from "react";
import React from "react";

import { Link } from "components";

const TextLink: FC = (): JSX.Element => (
  <div>
    <Link to={"text"}>{"Text"}</Link>
    <div className={"py1 pl4"}>
      <Link to={"text#size"}>{"Size"}</Link>
      <Link to={"text#style"}>{"Style"}</Link>
    </div>
  </div>
);

export { TextLink };
