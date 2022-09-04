import type { FC, ReactNode } from "react";
import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

interface IAppWrapperProps {
  children: ReactNode;
}

const AppWrapper: FC<IAppWrapperProps> = ({
  children,
}: Readonly<IAppWrapperProps>): JSX.Element => {
  const { hash, pathname } = useLocation();

  useLayoutEffect(() => {
    const el = document.getElementById(hash.replace("#", ""));
    setTimeout(() => {
      window.scrollTo({
          behavior: el ? "smooth" : "auto",
          top: el ? el.offsetTop : 0
      });
    }, 0);
  }, [hash, pathname]);
  
  return (
    <div className={"AppWrapper bg-light1 dark1 f2 ff-arial"}>{children}</div>
  );
};

export type { IAppWrapperProps };
export { AppWrapper };
