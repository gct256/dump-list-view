import * as React from "react";
import * as ReactDOM from "react-dom";

import { HexDumpView } from "../src";

import { Checkbox } from "./views/Checkbox";

const data = new Uint8Array(0x10000);

for (let i = 0; i < 256; i += 1) data[i] = i;
for (let i = 256; i < data.length; i += 1) data[i] = Math.random() * 256;

const Example: React.VFC = (): React.ReactElement => {
  const [showHeader, setShowHeader] = React.useState(true);
  const [showFooter, setShowFooter] = React.useState(true);
  const [showOffset, setShowOffset] = React.useState(true);
  const [showCharacter, setShowCharacter] = React.useState(true);

  return (
    <>
      <fieldset>
        <div>
          <Checkbox
            label="show header"
            initial={showHeader}
            onUpdate={setShowHeader}
          />
        </div>
        <div>
          <Checkbox
            label="show footer"
            initial={showFooter}
            onUpdate={setShowFooter}
          />
        </div>
        <div>
          <Checkbox
            label="show offset"
            initial={showOffset}
            onUpdate={setShowOffset}
          />
        </div>
        <div>
          <Checkbox
            label="show character"
            initial={showCharacter}
            onUpdate={setShowCharacter}
          />
        </div>
      </fieldset>
      <fieldset>
        <HexDumpView
          data={data}
          showHeader={showHeader}
          showFooter={showFooter}
          showOffset={showOffset}
          showCharacter={showCharacter}
        />
      </fieldset>
    </>
  );
};

ReactDOM.render(<Example />, document.getElementById("root"));
