import type { FC } from "react";
import React from "react";

import { Snippet } from "components";
import imgBonbon from "imgs/Bonbon.svg";

const Home: FC = (): JSX.Element => (
  <div className={"ai-center d-f dark3 flex-col py7"}>
    <img className={"ani4 hov-ani-rot w6"} src={imgBonbon} />
    <p className={"f8 fw7"}>{"Bonbon"}</p>
    <p className={"f6"}>{"Keep it simple, but powerful"}</p>
    <p className={"f6 fw7 mt7"}>{"Installation"}</p>
    <p className={"f4 mt5"}>{"Clone repo"}</p>
    <Snippet>{"git clone https://github.com/estidlore/bonbon.git"}</Snippet>
    <p className={"f4 mt5"}>{"Install with npm"}</p>
    <Snippet>{"npm i @estidlore/bonbon"}</Snippet>
    <p className={"f4 mt5"}>{"Install with yarn"}</p>
    <Snippet>{"yarn add @estidlore/bonbon"}</Snippet>
    <p className={"f6 fw7 mt7"}>{"Import"}</p>
    <p className={"f4 mt5"}>{"In your main file (i.e. src/index.js) write:"}</p>
    <Snippet>
      {`import "@estidlore/bonbon/dist/css/index.css";

      "import "@estidlore/bonbon/dist/css/animations.css";`}
    </Snippet>
    <p className={"f4 mt5"}>{"or if you want to import the scss:"}</p>
    <Snippet>
      {`import "@estidlore/bonbon/scss/index.scss";
      
      import "@estidlore/bonbon/scss/animations.scss";`}
    </Snippet>
  </div>
);

export { Home };
