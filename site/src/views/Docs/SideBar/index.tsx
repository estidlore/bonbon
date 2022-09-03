import type { FC } from "react";
import React from "react";

import { AnimationLink } from "./AnimationLink";
import { BorderLink } from "./BorderLink";
import { ColorsLink } from "./ColorsLink";
import { DisplayLink } from "./DisplayLink";
import { FlexLink } from "./FlexLink";
import { PositionLink } from "./PositionLink";
import { SizingLink } from "./SizingLink";
import { SpacingLink } from "./SpacingLink";
import { TextLink } from "./TextLink";

const SideBar: FC = (): JSX.Element => (
  <div className={"SideBar bg-light1 px6 pos-stick t8"}>
    <AnimationLink />
    <BorderLink />
    <ColorsLink />
    <DisplayLink />
    <FlexLink />
    <PositionLink />
    <SizingLink />
    <SpacingLink />
    <TextLink />
  </div>
);

export { SideBar };
