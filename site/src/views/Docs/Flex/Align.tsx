import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";

import { Section } from "../components";

const aligns = {
  center: "center",
  end: "flex-end",
  start: "flex-start",
  stretch: "stretch",
};

const element = "bdr2 bdr-dark6 bg-light6 rnd";
const wrapper = "bdr2 bdr-dark6 d-f h6 jc-center m2 rnd";

const AlignItems: FC = (): JSX.Element => (
  <Section examples={
      <Fragment>
        {Object.keys(aligns).map((val) => (
          <Fragment key={val}>
            <p className={"m2"}>{`ai-${val}:`}</p>
            <div className={`${wrapper} ai-${val}`}>
              {range(0, 3).map((num) => (
                <div className={element} key={`${val}${num}`}>
                  <div className={"h4 w4"} />
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </Fragment>
    } id={"align"}
    title={"Align items"}
  />
);

export { AlignItems };
