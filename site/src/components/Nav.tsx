import type { FC, ReactNode } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

interface INavProps {
  children: ReactNode;
  logo: string;
  name?: string;
}

const navLink = "hov-bg-primary3 mx1 px3 py1 rnd td-no trn trn2";

const Nav: FC<INavProps> = ({
  children,
  logo,
  name,
}: Readonly<INavProps>): JSX.Element => (
  <nav className={"ai-center bg-primary4 d-f light1 pos-stick px5 py1 t0"}>
    <NavLink className={`${navLink} d-f hp70 mr3`} to={"/"}>
      <img className={"ani4 hov-ani-rot h3"} src={logo} />
      {name === undefined ? undefined : (
        <p className={"as-center f3 ml2"}>{name}</p>
      )}
    </NavLink>
    <div className={"d-f f2"}>{children}</div>
  </nav>
);

export type { INavProps };
export { Nav, navLink };
