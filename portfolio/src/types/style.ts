// Type safety for length values

export type CSSLength =
  | `${number}px`
  | `${number}rem`
  | `${number}em`
  | `${number}%`
  | `${number}vh`
  | `${number}vw`
  | `${number}vmin`
  | `${number}vmax`
  | `${number}pt`
  | `${number}ch`
  | `${number}ex`;

export type CSSLengthValue =
  | CSSLength
  | "xx-small"
  | "x-small"
  | "small"
  | "smaller"
  | "medium"
  | "large"
  | "larger"
  | "x-large"
  | "xx-large"
  | "auto"
  | "inherit"
  | "initial"
  | "unset";

export const assertValidCSSLength = (value: string, propName: string): void => {
  const lengthPattern = /^-?\d*\.?\d+(px|em|rem|%|vh|vw|vmin|vmax|pt|ch|ex)$/i;
  const keywordPattern =
    /^(xx-small|x-small|small|medium|large|x-large|xx-large|smaller|larger)$/i;

  const isValid = lengthPattern.test(value) || keywordPattern.test(value);

  if (!isValid) {
    throw new Error(
      `Invalid CSS length for "${propName}": "${value}".\n` +
        `Expected a valid CSS unit (e.g., "1rem", "16px", "50%") or a font-size keyword (e.g., "small", "x-large").`
    );
  }
};
