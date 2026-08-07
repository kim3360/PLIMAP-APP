import Config from 'react-native-config';

export const GOOGLE_MAPS_API_KEY = Config.GOOGLE_MAPS_API_KEY ?? '';

/** 홈 화면 기준 위치: 성남시 분당구 */
export const DEFAULT_MAP_REGION = {
  latitude: 37.3595,
  longitude: 127.1052,
  latitudeDelta: 0.04,
  longitudeDelta: 0.04,
};
