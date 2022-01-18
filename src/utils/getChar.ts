export const getChar = (
  char: string | undefined,
  defaultChar: string,
): string => `${char ?? defaultChar}${defaultChar}`.slice(0, 1);
