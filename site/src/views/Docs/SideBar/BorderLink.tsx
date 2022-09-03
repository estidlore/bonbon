import type { FC } from "react";
import React from "react";
import { Link } from "components";

const BorderLink: FC = (): JSX.Element => (
  <div>
    <Link disabled={true} to={"border"}>
      {"Border"}
    </Link>
  </div>
);

export { BorderLink };
