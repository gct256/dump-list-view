import * as React from "react";

import { Block } from "./Block";

const format = (value: number): string => value.toString(16).padStart(2, "0");

/** Props for hex. */
type DataHexProps = {
  value: number;
};

/** hex. */
export const DataHex: React.VFC<DataHexProps> = ({
  value,
}: DataHexProps): React.ReactElement | null => (
  <Block content={format(value)} />
);

DataHex.displayName = "DataHex";
