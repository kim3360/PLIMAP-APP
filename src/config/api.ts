import Config from 'react-native-config';

export const API_BASE_URL = (
  Config.API_BASE_URL ?? 'https://dev.plimap.kr'
).replace(/\/+$/, '');

export const FRONTEND_ORIGIN = API_BASE_URL;
