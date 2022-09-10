import type { FC } from "react";
import React, { useCallback } from "react";

interface ISnippetProps {
  children: string;
}

const copy = (text: string): void => {
  void navigator.clipboard.writeText(text);
};

const Snippet: FC<ISnippetProps> = ({
  children: code,
}: Readonly<ISnippetProps>): JSX.Element => {
  const handleCopy = useCallback(() => copy(code), []);

  return (
    <div className={"bdr1 bdr-light5 bg-light2 dark4 my3 p4 pos-rel rnd ws-pl"}>
      <p>{code}</p>
      <button
        className={
          "bdr1 bdr-light4 bg-light1 hov-bg-light4 px2 py1 pos-abs r2 rnd t2"
        }
        onClick={handleCopy}
      >
        {"Copy"}
      </button>
    </div>
  );
};

export type { ISnippetProps };
export { Snippet };
