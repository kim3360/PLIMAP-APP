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
      },
    },
  },
  plugins: [],
};
