export const colors = {
  // Primary
  neon: '#C8F940',
  neon2: '#F7FE90',
  neonGradientFrom: '#FCFF98',
  green: '#14BD83',
  red: '#EC4547',
  kakao: '#FEE500',
  kakaoText: '#000000D9',

  // Tag
  tagStroke: '#6D794D',
  tagFill: '#C8F94014',

  // PLI_black
  pliBlack100: '#0C0D0F',
  pliBlack85: '#18181C',
  pliBlack75: '#242429',
  pliBlack50: '#323238',
  pliBlack25: '#4A4A52',
  pliBlack10: '#757582',

  // Grayscale
  grayscale1300: '#0F0F0F',
  grayscale1250: '#191919',
  grayscale1200: '#222222',
  grayscale1100: '#333333',
  grayscale1000: '#444444',
  grayscale900: '#555555',
  grayscale800: '#666666',
  grayscale700: '#777777',
  grayscale600: '#888888',
  grayscale500: '#999999',
  grayscale400: '#BBBBBB',
  grayscale300: '#CCCCCC',
  grayscale200: '#DDDDDD',
  grayscale100: '#EFEFEF',
  grayscale30: '#F6F6F6',
  grayscale0: '#FDFDFD',

  // Semantic aliases (기존 코드 호환)
  background: '#0C0D0F',
  surface: '#18181C',
  surfaceElevated: '#242429',
  surfaceMuted: '#323238',
  textPrimary: '#EFEFEF',
  textSecondary: '#999999',
  textTertiary: '#777777',
  textMuted: '#CCCCCC',
  textSoft: '#F6F6F6',
  border: '#333333',
  borderMuted: '#555555',
  neonStrong: '#C8F940',
  white: '#FFFFFF',
  black: '#000000',
  googleSurface: '#FDFDFD',
  danger: '#EC4547',
  gray400: '#BBBBBB',
} as const;

export type ColorToken = keyof typeof colors;
