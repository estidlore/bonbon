import type { FC, ReactNode } from "react";
import React from "react";

interface IBoxProps {
  children?: ReactNode;
  className: string;
  label?: string;
}

const Box: FC<IBoxProps> = ({
  children,
  className,
  label,
}: Readonly<IBoxProps>): JSX.Element => (
  <div className={"ai-center d-f py1"}>
    <p className={"d-ib pr2"}>{label}</p>
    <div className={"bg-light4 d-ib rnd"}>
      <div
        className={
          `bdr2 bdr-dark7 bg-light4 d-b dark4 rnd ${className}`.trimEnd()
        }
      >
        {children}
      </div>
    </div>
  </div>
);

export type { IBoxProps };
export { Box };
