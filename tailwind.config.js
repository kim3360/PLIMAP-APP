const plugin = require('tailwindcss/plugin');

const LINE_HEIGHT_TIGHT = 1.4;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
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
        neon: '#F7FE90',
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
