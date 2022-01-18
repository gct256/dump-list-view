import * as React from "react";

import { Block } from "./Block";
import { DataChar } from "./DataChar";
import { DataHex } from "./DataHex";
import { Row } from "./Row";

const formatOffset = (offset: number, offsetWidth: number): string =>
  `+${offset.toString(16).padStart(offsetWidth, "0")}`.padStart(6, " ");

/** Props for data row. */
type DataRowProps = {
  offset: number;
  data: Uint8Array;
  vertical: string;
  offsetWidth: number;
  showOffset?: boolean;
  showCharacter?: boolean;
};

/** data row. */
export const DataRow: React.VFC<DataRowProps> = ({
  offset,
  data,
  vertical,
  offsetWidth,
  showOffset,
  showCharacter,
}: DataRowProps): React.ReactElement | null => (
  <Row>
    <Block content={vertical} visible={showOffset} />
    <Block content={formatOffset(offset, offsetWidth)} visible={showOffset} />
    <Block content={vertical} />
    <Block content=" " />
    <DataHex value={data[offset]} />
    <Block content=" " />
    <DataHex value={data[offset + 1]} />
    <Block content=" " />
    <DataHex value={data[offset + 2]} />
    <Block content=" " />
    <DataHex value={data[offset + 3]} />
    <Block content=" " />
    <DataHex value={data[offset + 4]} />
    <Block content=" " />
    <DataHex value={data[offset + 5]} />
    <Block content=" " />
    <DataHex value={data[offset + 6]} />
    <Block content=" " />
    <DataHex value={data[offset + 7]} />
    <Block content=" " />
    <DataHex value={data[offset + 8]} />
    <Block content=" " />
    <DataHex value={data[offset + 9]} />
    <Block content=" " />
    <DataHex value={data[offset + 10]} />
    <Block content=" " />
    <DataHex value={data[offset + 11]} />
    <Block content=" " />
    <DataHex value={data[offset + 12]} />
    <Block content=" " />
    <DataHex value={data[offset + 13]} />
    <Block content=" " />
    <DataHex value={data[offset + 14]} />
    <Block content=" " />
    <DataHex value={data[offset + 15]} />
    <Block content=" " />
    <Block content={vertical} />
    <DataChar value={data[offset]} />
    <DataChar value={data[offset + 1]} />
    <DataChar value={data[offset + 2]} />
    <DataChar value={data[offset + 3]} />
    <DataChar value={data[offset + 4]} />
    <DataChar value={data[offset + 5]} />
    <DataChar value={data[offset + 6]} />
    <DataChar value={data[offset + 7]} />
    <DataChar value={data[offset + 8]} />
    <DataChar value={data[offset + 9]} />
    <DataChar value={data[offset + 10]} />
    <DataChar value={data[offset + 11]} />
    <DataChar value={data[offset + 12]} />
    <DataChar value={data[offset + 13]} />
    <DataChar value={data[offset + 14]} />
    <DataChar value={data[offset + 15]} />
    <Block content={vertical} visible={showCharacter} />
  </Row>
);

DataRow.displayName = "DataRow";
