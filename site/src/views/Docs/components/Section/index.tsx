import type { FC, ReactNode } from "react";
import React from "react";

import { SubSection } from "./SubSection";

interface ISectionProps {
  examples: ReactNode;
  id: string;
  title: string;
}

const Section: FC<ISectionProps> = ({
  examples,
  id,
  title,
}: Readonly<ISectionProps>): JSX.Element => (
  <section id={id}>
    <p className={"f6 mt5 mb3"}>{title}</p>
    <SubSection title={"Examples"}>{examples}</SubSection>
  </section>
);

export type { ISectionProps };
export { Section };
