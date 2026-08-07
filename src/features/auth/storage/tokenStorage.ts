import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN_KEY = '@plimap/accessToken';
const REFRESH_TOKEN_KEY = '@plimap/refreshToken';

export type AuthTokens = {
  accessToken: string;
  refreshToken?: string;
};

export async function saveTokens(tokens: AuthTokens) {
  await AsyncStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);

  if (tokens.refreshToken) {
    await AsyncStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
  } else {
    await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
  }
}

export async function getAccessToken() {
  return AsyncStorage.getItem(ACCESS_TOKEN_KEY);
}

export async function getRefreshToken() {
  return AsyncStorage.getItem(REFRESH_TOKEN_KEY);
}

export async function clearTokens() {
  await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
  await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
}

export async function hasStoredSession() {
  const accessToken = await getAccessToken();
  return Boolean(accessToken);
}
