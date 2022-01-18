export const getSize = (
  fontFamily: string,
  size: number | string = "1rem",
): number => {
  const div = document.createElement("div");

  div.style.margin = "0";
  div.style.padding = "0";
  div.style.border = "0";
  div.style.fontWeight = "500";
  div.style.fontFamily = fontFamily;
  div.style.fontSize = typeof size === "number" ? `${size}px` : size;

  return div.offsetHeight;
};
