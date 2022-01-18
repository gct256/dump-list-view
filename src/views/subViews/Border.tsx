import * as React from "react";

import { Block } from "./Block";
import { Row } from "./Row";

/** Props for border. */
type BorderProps = {
  visible?: boolean;
  cross: string;
  horizontal: string;
  offsetWidth: number;
  showOffset?: boolean;
  showCharacter?: boolean;
};

/** Border. */
export const Border: React.VFC<BorderProps> = React.memo(
  ({
    visible,
    cross,
    horizontal,
    offsetWidth,
    showOffset,
    showCharacter,
  }: BorderProps): React.ReactElement | null => (
    <Row visible={visible}>
      <Block content={cross} visible={showOffset} />
      <Block
        content={horizontal.repeat(Math.max(6, offsetWidth + 1))}
        visible={showOffset}
      />
      <Block content={cross} />
      <Block content={horizontal.repeat(49)} />
      <Block content={cross} />
      <Block content={horizontal.repeat(16)} visible={showCharacter} />
      <Block content={cross} visible={showCharacter} />
    </Row>
  ),
  (prev, next) =>
    prev.cross === next.cross &&
    prev.horizontal === next.horizontal &&
    prev.visible === next.visible &&
    prev.showOffset === next.showOffset &&
    prev.showCharacter === next.showCharacter,
);

Border.displayName = "Ruler";
