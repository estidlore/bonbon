import type { FC } from "react";
import React from "react";
import { Link as RRLink, LinkProps } from "react-router-dom";

import { Button } from "./Button";

interface ILinkProps extends LinkProps {
  disabled?: boolean;
}

const Link: FC<ILinkProps> = ({
  children,
  className = "",
  disabled,
  ...rest
}: Readonly<ILinkProps>): JSX.Element => (
  <Button className={`d-b ${className}`} disabled={disabled}>
    {disabled ? children : (
      <RRLink {...rest} className={"m0 td-no"}>
        {children}
      </RRLink>
    )}
  </Button>
);

export type { ILinkProps };
export { Link };
