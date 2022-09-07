import type { FC, ReactNode } from "react";
import React, { Fragment } from "react";

interface ISubSectionProps {
  children: ReactNode;
  title: string;
}

const SubSection: FC<ISubSectionProps> = ({
  children,
  title,
}: Readonly<ISubSectionProps>): JSX.Element => (
  <Fragment>
    <p className={"f5"}>{title}</p>
    <div className={"SubSection overflowy p2 rnd"}>{children}</div>
  </Fragment>
);

export type { ISubSectionProps };
export { SubSection };
