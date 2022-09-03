import type { FC } from "react";
import React from "react";
import { Link } from "components";

const DisplayLink: FC = (): JSX.Element => (
  <div>
    <Link disabled={true} to={"display"}>
      {"Display"}
    </Link>
  </div>
);

export { DisplayLink };
