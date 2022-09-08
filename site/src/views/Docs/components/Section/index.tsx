import type { FC, ReactNode } from "react";
import React from "react";

import type { INotationProps } from "./Notation";
import { Notation } from "./Notation";
import { SubSection } from "./SubSection";

interface ISectionProps {
  examples?: ReactNode;
  id: string;
  notation?: INotationProps;
  title: string;
}

const Section: FC<ISectionProps> = ({
  examples,
  id,
  notation,
  title,
}: Readonly<ISectionProps>): JSX.Element => (
  <section id={id}>
    <p className={"f6 mt5 mb3"}>{title}</p>
    {notation === undefined ? undefined : <Notation {...notation} />}
    {examples === undefined ? undefined : (
      <SubSection title={"Examples"}>{examples}</SubSection>
    )}
  </section>
);

export type { ISectionProps };
export { Section };
