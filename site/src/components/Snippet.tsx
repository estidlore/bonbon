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
    <div className={"bg-light2 d-f dark4 my3 p4 rnd ws-pl"}>
      <div className={"f3 grow"}>
        {code.split("\n").map((line): JSX.Element => {
          const spaces = line.length - line.trimStart().length;

          return (
            <p key={line} style={{ paddingLeft: `${spaces / 2}em` }}>{line}</p>
          );
        })}
      </div>
      <button
        className={"as-start bdr-no bg-no hov-bg-light3 ml5 px3 py2 rnd trn2"}
        onClick={handleCopy}
      >
        {"Copy"}
      </button>
    </div>
  );
};

export type { ISnippetProps };
export { Snippet };
