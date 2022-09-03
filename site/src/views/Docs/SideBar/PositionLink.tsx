import type { FC } from "react";
import React from "react";
import { Link } from "components";

const PositionLink: FC = (): JSX.Element => (
  <div>
    <Link disabled={true} to={"position"}>
      {"Position"}
    </Link>
  </div>
);

export { PositionLink };
