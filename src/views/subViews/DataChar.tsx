import * as React from "react";

import { Block } from "./Block";

const format = (value: number): string =>
  value >= 0x20 && value <= 0x7e ? String.fromCharCode(value) : ".";

/** Props for char. */
type DataCharProps = {
  value: number;
};

/** char. */
export const DataChar: React.VFC<DataCharProps> = ({
  value,
}: DataCharProps): React.ReactElement | null => (
  <Block content={format(value)} />
);

DataChar.displayName = "DataChar";
