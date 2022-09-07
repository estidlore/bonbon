import type { FC } from "react";
import React, { Fragment } from "react";

import { range } from "utils/arrays";
import { Section } from "../components";

const justifies = {
  around: "space-around",
  between: "space-between",
  center: "center",
  end: "end",
  even: "space-evenly",
  start: "start",
};

const element = "bdr2 bdr-dark6 bg-light6 h4 rnd w4";
const wrapper = "bdr2 bdr-dark6 d-f jc-center m2 rnd";

const JustifyContent: FC = (): JSX.Element => (
  <Section id={"justify"} title={"Justify content"}
    examples={
      <Fragment>
        {Object.keys(justifies).map((val) => (
          <Fragment key={val}>
            <p className={"m2"}>{`jc-${val}:`}</p>
            <div className={`jc-${val} ${wrapper}`}>
              {range(0, 3).map((num) => (
                <div className={element} key={`${val}${num}`} />
              ))}
            </div>
          </Fragment>
        ))}
      </Fragment>
    }
  />
);

export { JustifyContent };
