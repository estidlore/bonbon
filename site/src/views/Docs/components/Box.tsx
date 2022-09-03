import type { FC, ReactNode } from "react";
import React from "react";

interface IBoxProps {
  children?: ReactNode;
  className: string;
}

const Box: FC<IBoxProps> = ({
  children,
  className,
}: Readonly<IBoxProps>): JSX.Element => (
  <div className={"py1"}>
    <div className={`bg-light4 d-ib rnd`}>
      <div
        className={
          `bdr2 bdr-dark7 bg-light4 d-ib dark4 rnd ${className}`.trimEnd()
        }
      >
        {children}
      </div>
    </div>
  </div>
);

export type { IBoxProps };
export { Box };
