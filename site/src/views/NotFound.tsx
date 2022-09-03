import { FC } from "react";
import React from "react";

const NotFound: FC = (): JSX.Element => (
  <div className={"ai-center flex flex-col px7 py7"}>
    <p className={"f7 fw7"}>{"Oops!"}</p>
    <p className={"f5"}>{"Couldn't find the page you're looking for."}</p>
    <p className={"f3"}>{"This page doesn't exist or was deleted."}</p>
  </div>
);

export { NotFound };
