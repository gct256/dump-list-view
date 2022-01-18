import * as React from "react";

import { Block } from "./Block";
import { Row } from "./Row";
import { Space } from "./Space";

/** Props for ruler. */
type RulerProps = {
  visible?: boolean;
  vertical: string;
  offsetWidth: number;
  showOffset?: boolean;
  showCharacter?: boolean;
};

/** Ruler. */
export const Ruler: React.VFC<RulerProps> = React.memo(
  ({
    visible,
    vertical,
    offsetWidth,
    showOffset,
    showCharacter,
  }: RulerProps): React.ReactElement | null => (
    <Row visible={visible}>
      <Block content={vertical} visible={showOffset} />
      <Block
        content={"OFFSET".padStart(offsetWidth + 1)}
        visible={showOffset}
      />

      <Block content={vertical} />
      <Space />
      <Block content="+0" />
      <Space />
      <Block content="+1" />
      <Space />
      <Block content="+2" />
      <Space />
      <Block content="+3" />
      <Space />
      <Block content="+4" />
      <Space />
      <Block content="+5" />
      <Space />
      <Block content="+6" />
      <Space />
      <Block content="+7" />
      <Space />
      <Block content="+8" />
      <Space />
      <Block content="+9" />
      <Space />
      <Block content="+A" />
      <Space />
      <Block content="+B" />
      <Space />
      <Block content="+C" />
      <Space />
      <Block content="+D" />
      <Space />
      <Block content="+E" />
      <Space />
      <Block content="+F" />
      <Space />
      <Block content={vertical} />

      <Block content="0" visible={showCharacter} />
      <Block content="1" visible={showCharacter} />
      <Block content="2" visible={showCharacter} />
      <Block content="3" visible={showCharacter} />
      <Block content="4" visible={showCharacter} />
      <Block content="5" visible={showCharacter} />
      <Block content="6" visible={showCharacter} />
      <Block content="7" visible={showCharacter} />
      <Block content="8" visible={showCharacter} />
      <Block content="9" visible={showCharacter} />
      <Block content="A" visible={showCharacter} />
      <Block content="B" visible={showCharacter} />
      <Block content="C" visible={showCharacter} />
      <Block content="D" visible={showCharacter} />
      <Block content="E" visible={showCharacter} />
      <Block content="F" visible={showCharacter} />
      <Block content={vertical} visible={showCharacter} />
    </Row>
  ),
  (prev, next) =>
    prev.vertical === next.vertical &&
    prev.visible === next.visible &&
    prev.showOffset === next.showOffset &&
    prev.showCharacter === next.showCharacter,
);

Ruler.displayName = "Ruler";
