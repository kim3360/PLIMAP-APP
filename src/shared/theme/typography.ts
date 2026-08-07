export const fontFamily = {
  sans: 'Pretendard',
  regular: 'Pretendard-Regular',
  medium: 'Pretendard-Medium',
  semibold: 'Pretendard-SemiBold',
} as const;

export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
};

export const fontSize = {
  28: 28,
  24: 24,
  20: 20,
  18: 18,
  17: 17,
  15: 15,
  13: 13,
  12: 12,
} as const;

/** Design token: line-height-tight = 140% */
export const LINE_HEIGHT_RATIO = 1.4;

function withTightLineHeight(size: number) {
  return Math.round(size * LINE_HEIGHT_RATIO * 10) / 10;
}

function createStyle(
  size: number,
  weight: keyof typeof fontWeight,
  family: keyof typeof fontFamily,
) {
  return {
    fontFamily: fontFamily[family],
    fontSize: size,
    fontWeight: fontWeight[weight],
    lineHeight: withTightLineHeight(size),
  };
}

/**
 * PLIMAP typography tokens
 * - head-*-* / body-*-* / etc-*-*
 * - NativeWind className: `head-24-sb`, `body-17-m`, `etc-13-r` ...
 */
export const typography = {
  head28m: createStyle(28, 'medium', 'medium'),
  head24sb: createStyle(24, 'semibold', 'semibold'),
  head20sb: createStyle(20, 'semibold', 'semibold'),
  head20m: createStyle(20, 'medium', 'medium'),
  head18sb: createStyle(18, 'semibold', 'semibold'),
  body24m: createStyle(24, 'medium', 'medium'),
  body18r: createStyle(18, 'regular', 'regular'),
  body17m: createStyle(17, 'medium', 'medium'),
  body17r: createStyle(17, 'regular', 'regular'),
  body15sb: createStyle(15, 'semibold', 'semibold'),
  body15m: createStyle(15, 'medium', 'medium'),
  body15r: createStyle(15, 'regular', 'regular'),
  etc13sb: createStyle(13, 'semibold', 'semibold'),
  etc13r: createStyle(13, 'regular', 'regular'),
  etc12r: createStyle(12, 'regular', 'regular'),
} as const;
