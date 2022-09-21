import type { ButtonHTMLAttributes, FC } from "react";
import React from "react";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<IButtonProps> = ({
  className = "",
  ...rest
}: Readonly<IButtonProps>): JSX.Element => (
  <button
    {...rest}
    className={
      `bdr0 bg-no f2 hov-bg-light3 dark1 px2 py1 rnd trn trn2 ${className}`
    }
  />
);

export type { IButtonProps };
export { Button };
