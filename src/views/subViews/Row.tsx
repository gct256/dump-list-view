import * as React from "react";

const style: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "row",
  flexWrap: "nowrap",
};

/** Props for row. */
type RowProps = {
  visible?: boolean;
};

/** Row. */
export const Row: React.FC<RowProps> = ({
  visible,
  children,
}: React.PropsWithChildren<RowProps>): React.ReactElement | null =>
  visible === false ? null : <div style={style}>{children}</div>;

Row.displayName = "Row";
