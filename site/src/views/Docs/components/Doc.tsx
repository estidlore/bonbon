import type { FC, ReactNode } from "react";
import React from "react";

interface IDocProps {
  children: ReactNode;
  title: string;
}

const Doc: FC<IDocProps> = ({
  children,
  title,
}: Readonly<IDocProps>): JSX.Element => (
  <div className={"fill"}>
    <p className={"f7 fw7"}>{title}</p>
    <hr className={"bg-light6 mt0 mb4"} />
    {children}
  </div>
);

export type { IDocProps };
export { Doc };
