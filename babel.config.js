module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // NativeWind / css-interop
    require('react-native-css-interop/dist/babel-plugin').default,
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: 'react-native-css-interop',
      },
    ],
    // Must be last
    'react-native-worklets/plugin',
  ],
};
