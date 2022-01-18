import * as React from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";

import { Border } from "./subViews/Border";
import { DataRow } from "./subViews/DataRow";
import { Ruler } from "./subViews/Ruler";
import { getSize } from "./subViews/utils";

/** Props for hex dump view. */
type HexDumpViewProps = {
  /** Dump data. */
  data: Uint8Array;

  /** Font family. (default: "monospace") */
  fontFamily?: string;

  /** Font size. (default: "1rem") */
  fontSize?: string | number;

  /** Row height. (default: fontSize) */
  rowHeight?: number;

  verticalBarChar?: string;
  horizontalBarChar?: string;
  crossBarChar?: string;

  /** Show header flag. (default: true) */
  showHeader?: boolean;

  /** Show footer flag. (default: true) */
  showFooter?: boolean;

  /** Show offset flag. (default: true) */
  showOffset?: boolean;

  /** Show character flag. (default: true) */
  showCharacter?: boolean;
};

/** Hex dump view. */
export const HexDumpView: React.VFC<HexDumpViewProps> = ({
  data,
  fontFamily = "monospace",
  fontSize = "1rem",
  rowHeight = getSize("monospace", "1rem"),
  verticalBarChar = "|",
  horizontalBarChar = "-",
  crossBarChar = "+",
  showHeader = true,
  showFooter = true,
  showOffset = true,
  showCharacter = true,
}: HexDumpViewProps): React.ReactElement | null => {
  const style: React.CSSProperties = {
    fontFamily: fontFamily ?? "monospace",
    fontSize: fontSize ?? "1em",
    lineHeight: "1",
    background: "#eee",
    whiteSpace: "pre",
  };

  const vertical = `${verticalBarChar}|`.slice(0, 1);
  const horizontal = `${horizontalBarChar}-`.slice(0, 1);
  const cross = `${crossBarChar}+`.slice(0, 1);
  const offsetWidth = (data.length - 1).toString(16).length;

  const renderItem = ({
    index,
  }: ListChildComponentProps): React.ReactElement => (
    <DataRow
      data={data}
      offset={index}
      offsetWidth={offsetWidth}
      vertical={vertical}
      showOffset={showOffset}
      showCharacter={showCharacter}
    />
  );

  return (
    <div style={style}>
      <Ruler
        visible={showHeader}
        vertical={vertical}
        offsetWidth={offsetWidth}
        showOffset={showOffset}
        showCharacter={showCharacter}
      />
      <Border
        visible={showHeader}
        cross={cross}
        horizontal={horizontal}
        offsetWidth={offsetWidth}
        showOffset={showOffset}
        showCharacter={showCharacter}
      />
      <FixedSizeList height={150} itemCount={999} itemSize={50} width={300}>
        {renderItem}
      </FixedSizeList>
      <Border
        visible={showFooter}
        cross={cross}
        horizontal={horizontal}
        offsetWidth={offsetWidth}
        showOffset={showOffset}
        showCharacter={showCharacter}
      />
      <Ruler
        visible={showFooter}
        vertical={vertical}
        offsetWidth={offsetWidth}
        showOffset={showOffset}
        showCharacter={showCharacter}
      />
    </div>
  );
};

HexDumpView.displayName = "HexDumpView";
