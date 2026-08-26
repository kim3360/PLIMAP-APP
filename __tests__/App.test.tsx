/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

jest.mock('react-native-bootsplash', () => ({
  __esModule: true,
  default: {
    hide: jest.fn().mockResolvedValue(undefined),
    isVisible: jest.fn().mockReturnValue(false),
    useHideAnimation: jest.fn().mockReturnValue({
      container: {},
      logo: {source: 0},
      brand: {source: 0},
    }),
  },
}));

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
    API_BASE_URL: 'https://dev.plimap.kr',
  },
}));

jest.mock('@react-native-async-storage/async-storage', () => {
  const store = new Map<string, string>();
  return {
    __esModule: true,
    default: {
      setItem: jest.fn(async (key: string, value: string) => {
        store.set(key, value);
      }),
      getItem: jest.fn(async (key: string) => store.get(key) ?? null),
      removeItem: jest.fn(async (key: string) => {
        store.delete(key);
      }),
      clear: jest.fn(async () => {
        store.clear();
      }),
    },
  };
});

jest.mock('react-native-webview', () => {
  const ReactLib = require('react');
  const {View} = require('react-native');
  return {
    __esModule: true,
    default: (props: object) => ReactLib.createElement(View, props),
    WebView: (props: object) => ReactLib.createElement(View, props),
  };
});

jest.mock('@react-native-cookies/cookies', () => ({
  __esModule: true,
  default: {
    get: jest.fn(async () => ({})),
    clearAll: jest.fn(async () => true),
  },
}));

import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(async () => {
    ReactTestRenderer.create(<App />);
  });
});
