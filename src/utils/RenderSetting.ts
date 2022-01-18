export type RenderSetting = {
  /** Offset label size. */
  offsetLabelWidth: number;

  /** Row height. (default: Calculated from font size) */
  rowHeight: number;

  /** Character for vertical bar. (default: `|`) */
  verticalBarChar: string;

  /** Character for horizontal bar. (default: `-`) */
  horizontalBarChar: string;

  /** Character for cross bar. (default: `+`) */
  crossBarChar: string;

  /** Show header flag. (default: true) */
  showHeader: boolean;

  /** Show footer flag. (default: true) */
  showFooter: boolean;

  /** Show offset flag. (default: true) */
  showOffset: boolean;

  /** Show character flag. (default: true) */
  showCharacter: boolean;
};

export const DEFAULT_RENDER_SETTING: RenderSetting = {
  offsetLabelWidth: 6,
  rowHeight: 16,
  verticalBarChar: "|",
  horizontalBarChar: "-",
  crossBarChar: "+",
  showHeader: true,
  showFooter: true,
  showOffset: true,
  showCharacter: true,
};

export const isSameRenderSetting = (
  a: RenderSetting,
  b: RenderSetting,
): boolean =>
  a.offsetLabelWidth === b.offsetLabelWidth &&
  a.rowHeight === b.rowHeight &&
  a.verticalBarChar === b.verticalBarChar &&
  a.horizontalBarChar === b.horizontalBarChar &&
  a.crossBarChar === b.crossBarChar &&
  a.showHeader === b.showHeader &&
  a.showFooter === b.showFooter &&
  a.showOffset === b.showOffset &&
  a.showCharacter === b.showCharacter;
