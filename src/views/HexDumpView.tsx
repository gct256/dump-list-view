import * as React from "react";
import useScrollbarSize from "react-scrollbar-size";
import { FixedSizeList, ListChildComponentProps } from "react-window";

import { getChar } from "../utils/getChar";
import { getRowHeight } from "../utils/getRowHeight";
import { DEFAULT_RENDER_SETTING, RenderSetting } from "../utils/RenderSetting";

import { Border } from "./subViews/Border";
import { DataRow } from "./subViews/DataRow";
import { Ruler } from "./subViews/Ruler";

/** Props for hex dump view. */
type HexDumpViewProps = {
  /** Dump data. */
  data: Uint8Array;

  /** Font family. (default: "monospace") */
  fontFamily?: string;

  /** Font size. (default: "1rem") */
  fontSize?: string | number;
} & Partial<RenderSetting>;

const DEFAULT_PROPS: Required<HexDumpViewProps> = {
  data: new Uint8Array(0),
  fontFamily: "monospace",
  fontSize: "1rem",
  ...DEFAULT_RENDER_SETTING,
};

/** Hex dump view. */
export const HexDumpView: React.VFC<HexDumpViewProps> = ({
  data,
  fontFamily = DEFAULT_PROPS.fontFamily,
  fontSize = DEFAULT_PROPS.fontSize,
  rowHeight,
  verticalBarChar,
  horizontalBarChar,
  crossBarChar,
  showHeader,
  showFooter,
  showOffset,
  showCharacter,
}: HexDumpViewProps = DEFAULT_PROPS): React.ReactElement | null => {
  const scrollBarSize = useScrollbarSize();
  const viewStyle: React.CSSProperties = {
    fontFamily,
    fontSize,
    lineHeight: 1,
    background: "#eee",
    whiteSpace: "pre",
  };

  const height = rowHeight ?? getRowHeight(fontFamily, fontSize);

  const setting: RenderSetting = {
    offsetLabelWidth: (data.length - 1).toString(16).length,
    rowHeight: height,
    verticalBarChar: getChar(verticalBarChar, DEFAULT_PROPS.verticalBarChar),
    horizontalBarChar: getChar(
      horizontalBarChar,
      DEFAULT_PROPS.horizontalBarChar,
    ),
    crossBarChar: getChar(crossBarChar, DEFAULT_PROPS.crossBarChar),
    showHeader: showHeader !== false,
    showFooter: showFooter !== false,
    showOffset: showOffset !== false,
    showCharacter: showCharacter !== false,
  };

  const renderDataRow = ({
    index,
    style,
  }: ListChildComponentProps): React.ReactElement => (
    <div style={style}>
      <DataRow data={data} offset={index * 16} setting={setting} />
    </div>
  );

  return (
    <div style={viewStyle}>
      <Border visible={showHeader} setting={setting} />
      <Ruler visible={showHeader} setting={setting} />
      <Border setting={setting} />
      <FixedSizeList
        width={`calc(${showOffset ? 1 + setting.offsetLabelWidth + 1 : 0}ch + ${
          16 * 3 + 3
        }ch + ${showCharacter ? 17 : 0}ch +${scrollBarSize.width}px)`}
        height={height * 16}
        itemCount={Math.floor(data.length / 16)}
        itemSize={height}
      >
        {renderDataRow}
      </FixedSizeList>
      <Border setting={setting} />
      <Ruler visible={showFooter} setting={setting} />
      <Border visible={showFooter} setting={setting} />
    </div>
  );
};

HexDumpView.displayName = "HexDumpView";
