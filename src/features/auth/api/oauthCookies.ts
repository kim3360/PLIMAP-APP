import CookieManager from '@react-native-cookies/cookies';
import {API_BASE_URL} from '../../../config/api';

function pickCookieValue(
  cookies: Record<string, {value?: string} | undefined>,
  names: string[],
) {
  for (const name of names) {
    const value = cookies[name]?.value;
    if (value) {
      return value;
    }
  }
  return undefined;
}

export async function readOAuthTokensFromCookies() {
  const cookies = await CookieManager.get(API_BASE_URL, true);

  const accessToken = pickCookieValue(cookies, [
    'accessToken',
    'ACCESS_TOKEN',
    'access_token',
  ]);
  const refreshToken = pickCookieValue(cookies, [
    'refreshToken',
    'REFRESH_TOKEN',
    'refresh_token',
  ]);

  if (!accessToken) {
    throw new Error('로그인 토큰을 가져오지 못했습니다.');
  }

  return {accessToken, refreshToken};
}

export async function clearOAuthCookies() {
  await CookieManager.clearAll(true);
}
