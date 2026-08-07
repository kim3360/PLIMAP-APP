/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

jest.mock('react-native-safe-area-context', () => {
  const ReactLib = require('react');
  return {
    SafeAreaProvider: ({children}: {children: React.ReactNode}) =>
      ReactLib.createElement(ReactLib.Fragment, null, children),
    useSafeAreaInsets: () => ({top: 0, bottom: 0, left: 0, right: 0}),
  };
});

jest.mock('react-native-maps', () => {
  const ReactLib = require('react');
  const {View} = require('react-native');
  const MockMap = (props: object) => ReactLib.createElement(View, props);
  return {
    __esModule: true,
    default: MockMap,
    PROVIDER_GOOGLE: 'google',
  };
});

jest.mock('react-native-config', () => ({
  __esModule: true,
  default: {
    GOOGLE_MAPS_API_KEY: 'test-key',
  },
}));

import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
