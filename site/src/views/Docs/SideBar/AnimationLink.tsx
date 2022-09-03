import type { FC } from "react";
import React from "react";
import { Link } from "components";

const AnimationLink: FC = (): JSX.Element => (
  <div>
    <Link disabled={true} to={"animation"}>
      {"Animation"}
    </Link>
  </div>
);

export { AnimationLink };
