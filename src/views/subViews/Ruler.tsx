import * as React from "react";

import { isSameRenderSetting, RenderSetting } from "../../utils/RenderSetting";

import { Block } from "./Block";
import { Row } from "./Row";
import { Space } from "./Space";

/** Props for ruler. */
type RulerProps = {
  visible?: boolean;
  setting: RenderSetting;
};

/** Ruler. */
export const Ruler: React.VFC<RulerProps> = React.memo(
  ({ visible, setting }: RulerProps): React.ReactElement | null => (
    <Row visible={visible}>
      <Block content={setting.verticalBarChar} visible={setting.showOffset} />
      <Block
        content={"OFFSET".padStart(setting.offsetLabelWidth + 1)}
        visible={setting.showOffset}
      />

      <Block content={setting.verticalBarChar} />
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
      <Block content={setting.verticalBarChar} />

      <Block content="0" visible={setting.showCharacter} />
      <Block content="1" visible={setting.showCharacter} />
      <Block content="2" visible={setting.showCharacter} />
      <Block content="3" visible={setting.showCharacter} />
      <Block content="4" visible={setting.showCharacter} />
      <Block content="5" visible={setting.showCharacter} />
      <Block content="6" visible={setting.showCharacter} />
      <Block content="7" visible={setting.showCharacter} />
      <Block content="8" visible={setting.showCharacter} />
      <Block content="9" visible={setting.showCharacter} />
      <Block content="A" visible={setting.showCharacter} />
      <Block content="B" visible={setting.showCharacter} />
      <Block content="C" visible={setting.showCharacter} />
      <Block content="D" visible={setting.showCharacter} />
      <Block content="E" visible={setting.showCharacter} />
      <Block content="F" visible={setting.showCharacter} />
      <Block
        content={setting.verticalBarChar}
        visible={setting.showCharacter}
      />
    </Row>
  ),
  (prev, next) =>
    prev.visible === next.visible &&
    isSameRenderSetting(prev.setting, next.setting),
);

Ruler.displayName = "Ruler";
