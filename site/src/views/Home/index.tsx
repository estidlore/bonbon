import type { FC } from "react";
import React from "react";


import imgBonbon from "imgs/Bonbon.svg";

const snippet = "bg-light3 f3 mt2 px5 py3 rnd";

const Home: FC = (): JSX.Element => (
  <div className={"ai-center d-f dark3 flex-col py7"}>
    <img className={"ani4 hov-ani-rot w6"} src={imgBonbon} />
    <p className={"f8 fw7"}>{"Bonbon"}</p>
    <p className={"f6"}>{"Keep it simple, but powerful"}</p>
    <p className={"f6 fw7 mt7"}>{"Installation"}</p>
    <p className={"f4 mt5"}>{"Clone repo"}</p>
    <p className={snippet}>
      {"git clone https://github.com/estidlore/bonbon.git"}
    </p>
    <p className={"f4 mt5"}>{"Install with npm"}</p>
    <p className={snippet}>
      {"npm i @estidlore/bonbon"}
    </p>
    <p className={"f4 mt5"}>{"Install with yarn"}</p>
    <p className={snippet}>
      {"yarn add @estidlore/bonbon"}
    </p>
    <p className={"f6 fw7 mt7"}>{"Import"}</p>
    <p className={"f4 mt5"}>{"In your main file (i.e. src/index.js) write:"}</p>
    <div className={snippet}>
      <p>{"import \"@estidlore/bonbon/dist/css/index.css\";"}</p>
      <p className={"mt1"}>
        {"import \"@estidlore/bonbon/dist/css/animations.css\";"}
      </p>
    </div>
    <p className={"f4 mt5"}>{"or if you want to import the scss:"}</p>
    <div className={snippet}>
      <p>{"import \"@estidlore/bonbon/scss/index.scss\";"}</p>
      <p className={"mt1"}>
        {"import \"@estidlore/bonbon/scss/animations.scss\";"}
      </p>
    </div>
  </div>
);

export { Home };
