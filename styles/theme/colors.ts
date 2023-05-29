const colorTokens = {
  white: '#fff',
  solarizedLight: '#f9f3e7',
};

export const colors = {
  bgPrimary: colorTokens.white,
  bgSecondary: colorTokens.solarizedLight,
};

export type Color = LiteralUnionOrString<keyof typeof colors>;

const isColorKey = (
  colorKeyOrString: unknown
): colorKeyOrString is keyof typeof colors => {
  return typeof colorKeyOrString === 'string' && colorKeyOrString in colors;
};

// @todo move implementation to utils
/**
 * @param color - a color key or a color value
 *  */
export const getColor = (color: Color) => {
  if (color) {
    return isColorKey(color) ? colors[color] : color;
  }
};
