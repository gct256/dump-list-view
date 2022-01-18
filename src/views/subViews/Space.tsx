import * as React from "react";

import { Block } from "./Block";

const makeArray = (size?: number): string[] =>
  new Array(size ?? 1).fill(0).map((_, i) => `${i}`);

/** Props for space. */
type SpaceProps = {
  size?: number;
};

/** space. */
export const Space: React.VFC<SpaceProps> = ({
  size,
}: SpaceProps): React.ReactElement | null => (
  <>
    {makeArray(size).map((x) => (
      <Block key={x} content=" " />
    ))}
  </>
);

Space.displayName = "Space";
