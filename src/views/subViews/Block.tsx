import * as React from "react";

/** Props for border view. */
type BlockProps = {
  visible?: boolean;
  content: string;
};

/** Border view. */
export const Block: React.VFC<BlockProps> = React.memo(
  ({ visible, content }: BlockProps): React.ReactElement | null => {
    if (visible === false) return null;

    const style: React.CSSProperties = {
      width: `${content.length * 1}ch`,
    };

    return <div style={style}>{content}</div>;
  },
  (prev, next) =>
    prev.content === next.content && prev.visible === next.visible,
);

Block.displayName = "Block";
