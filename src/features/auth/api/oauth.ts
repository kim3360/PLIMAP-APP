import {API_BASE_URL, FRONTEND_ORIGIN} from '../../../config/api';

export function getKakaoAuthorizationUrl() {
  const params = new URLSearchParams({
    frontendOrigin: FRONTEND_ORIGIN,
  });

  return `${API_BASE_URL}/oauth/authorization/kakao?${params.toString()}`;
}

export function isOAuthCallbackUrl(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.pathname.includes('/app/oauth/callback');
  } catch {
    return url.includes('/app/oauth/callback');
  }
}

export type OAuthCallbackResult =
  | {status: 'success'; isNewUser: boolean}
  | {status: 'error'; message: string};

export function parseOAuthCallbackUrl(url: string): OAuthCallbackResult {
  try {
    const parsed = new URL(url);
    const error = parsed.searchParams.get('error');
    if (error === 'oauth_login_failed') {
      return {
        status: 'error',
        message: '카카오 로그인에 실패했습니다. 다시 시도해 주세요.',
      };
    }

    const isNewUser = parsed.searchParams.get('isNewUser');
    if (isNewUser === 'true' || isNewUser === 'false') {
      return {status: 'success', isNewUser: isNewUser === 'true'};
    }

    return {
      status: 'error',
      message: '카카오 로그인에 실패했습니다. 다시 시도해 주세요.',
    };
  } catch {
    return {
      status: 'error',
      message: '카카오 로그인에 실패했습니다. 다시 시도해 주세요.',
    };
  }
}
