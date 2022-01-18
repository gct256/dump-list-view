import * as React from "react";

import { isSameRenderSetting, RenderSetting } from "../../utils/RenderSetting";

import { Block } from "./Block";
import { Row } from "./Row";

/** Props for border. */
type BorderProps = {
  visible?: boolean;
  setting: RenderSetting;
};

/** Border. */
export const Border: React.VFC<BorderProps> = React.memo(
  ({ visible, setting }: BorderProps): React.ReactElement | null => (
    <Row visible={visible}>
      <Block content={setting.crossBarChar} visible={setting.showOffset} />
      <Block
        content={setting.horizontalBarChar.repeat(
          Math.max(6, setting.offsetLabelWidth + 1),
        )}
        visible={setting.showOffset}
      />
      <Block content={setting.crossBarChar} />
      <Block content={setting.horizontalBarChar.repeat(49)} />
      <Block content={setting.crossBarChar} />
      <Block
        content={setting.horizontalBarChar.repeat(16)}
        visible={setting.showCharacter}
      />
      <Block content={setting.crossBarChar} visible={setting.showCharacter} />
    </Row>
  ),
  (prev, next) =>
    prev.visible === next.visible &&
    isSameRenderSetting(prev.setting, next.setting),
);

Border.displayName = "Ruler";
