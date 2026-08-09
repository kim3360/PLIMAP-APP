const plugin = require('tailwindcss/plugin');

const LINE_HEIGHT_TIGHT = 1.4;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Primary
        neon: '#C8F940',
        'neon-2': '#F7FE90',
        'neon-gradient-from': '#FCFF98',
        green: '#14BD83',
        red: '#EC4547',
        kakao: '#FEE500',
        'kakao-text': '#000000D9',

        // Tag
        'tag-stroke': '#6D794D',
        'tag-fill': '#C8F94014',

        // PLI_black
        'pli-black-100': '#0C0D0F',
        'pli-black-85': '#18181C',
        'pli-black-75': '#242429',
        'pli-black-50': '#323238',
        'pli-black-25': '#4A4A52',
        'pli-black-10': '#757582',

        // Grayscale
        'grayscale-1300': '#0F0F0F',
        'grayscale-1250': '#191919',
        'grayscale-1200': '#222222',
        'grayscale-1100': '#333333',
        'grayscale-1000': '#444444',
        'grayscale-900': '#555555',
        'grayscale-800': '#666666',
        'grayscale-700': '#777777',
        'grayscale-600': '#888888',
        'grayscale-500': '#999999',
        'grayscale-400': '#BBBBBB',
        'grayscale-300': '#CCCCCC',
        'grayscale-200': '#DDDDDD',
        'grayscale-100': '#EFEFEF',
        'grayscale-30': '#F6F6F6',
        'grayscale-0': '#FDFDFD',

        // Semantic aliases
        background: '#0C0D0F',
        surface: '#18181C',
        'surface-elevated': '#242429',
        'surface-muted': '#323238',
        'text-primary': '#EFEFEF',
        'text-secondary': '#999999',
        'text-tertiary': '#777777',
        'text-muted': '#CCCCCC',
        'text-soft': '#F6F6F6',
        border: '#333333',
        'border-muted': '#555555',
        'neon-strong': '#C8F940',
        danger: '#EC4547',
      },
      fontFamily: {
        sans: ['Pretendard-Regular'],
        regular: ['Pretendard-Regular'],
        medium: ['Pretendard-Medium'],
        semibold: ['Pretendard-SemiBold'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
      },
      fontSize: {
        12: ['12px', {lineHeight: `${12 * LINE_HEIGHT_TIGHT}px`}],
        13: ['13px', {lineHeight: `${13 * LINE_HEIGHT_TIGHT}px`}],
        15: ['15px', {lineHeight: `${15 * LINE_HEIGHT_TIGHT}px`}],
        17: ['17px', {lineHeight: `${17 * LINE_HEIGHT_TIGHT}px`}],
        18: ['18px', {lineHeight: `${18 * LINE_HEIGHT_TIGHT}px`}],
        20: ['20px', {lineHeight: `${20 * LINE_HEIGHT_TIGHT}px`}],
        24: ['24px', {lineHeight: `${24 * LINE_HEIGHT_TIGHT}px`}],
        28: ['28px', {lineHeight: `${28 * LINE_HEIGHT_TIGHT}px`}],
      },
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      const tight = size => Math.round(size * LINE_HEIGHT_TIGHT * 10) / 10;

      addUtilities({
        '.head-28-m': {
          fontFamily: 'Pretendard-Medium',
          fontSize: 28,
          lineHeight: tight(28),
          fontWeight: '500',
        },
        '.head-24-sb': {
          fontFamily: 'Pretendard-SemiBold',
          fontSize: 24,
          lineHeight: tight(24),
          fontWeight: '600',
        },
        '.head-20-sb': {
          fontFamily: 'Pretendard-SemiBold',
          fontSize: 20,
          lineHeight: tight(20),
          fontWeight: '600',
        },
        '.head-20-m': {
          fontFamily: 'Pretendard-Medium',
          fontSize: 20,
          lineHeight: tight(20),
          fontWeight: '500',
        },
        '.head-18-sb': {
          fontFamily: 'Pretendard-SemiBold',
          fontSize: 18,
          lineHeight: tight(18),
          fontWeight: '600',
        },
        '.body-24-m': {
          fontFamily: 'Pretendard-Medium',
          fontSize: 24,
          lineHeight: tight(24),
          fontWeight: '500',
        },
        '.body-18-r': {
          fontFamily: 'Pretendard-Regular',
          fontSize: 18,
          lineHeight: tight(18),
          fontWeight: '400',
        },
        '.body-17-m': {
          fontFamily: 'Pretendard-Medium',
          fontSize: 17,
          lineHeight: tight(17),
          fontWeight: '500',
        },
        '.body-17-r': {
          fontFamily: 'Pretendard-Regular',
          fontSize: 17,
          lineHeight: tight(17),
          fontWeight: '400',
        },
        '.body-15-sb': {
          fontFamily: 'Pretendard-SemiBold',
          fontSize: 15,
          lineHeight: tight(15),
          fontWeight: '600',
        },
        '.body-15-m': {
          fontFamily: 'Pretendard-Medium',
          fontSize: 15,
          lineHeight: tight(15),
          fontWeight: '500',
        },
        '.body-15-r': {
          fontFamily: 'Pretendard-Regular',
          fontSize: 15,
          lineHeight: tight(15),
          fontWeight: '400',
        },
        '.etc-13-sb': {
          fontFamily: 'Pretendard-SemiBold',
          fontSize: 13,
          lineHeight: tight(13),
          fontWeight: '600',
        },
        '.etc-13-r': {
          fontFamily: 'Pretendard-Regular',
          fontSize: 13,
          lineHeight: tight(13),
          fontWeight: '400',
        },
        '.etc-12-r': {
          fontFamily: 'Pretendard-Regular',
          fontSize: 12,
          lineHeight: tight(12),
          fontWeight: '400',
        },
      });
    }),
  ],
};
