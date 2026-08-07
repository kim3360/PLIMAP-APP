module.exports = {
  preset: '@react-native/jest-preset',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
    '\\.css$': '<rootDir>/__mocks__/cssMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|nativewind|react-native-css-interop|react-native-reanimated|react-native-worklets)/)',
  ],
};
