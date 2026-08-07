import {apiRequest} from '../../../shared/api/http';
import {clearOAuthCookies} from './oauthCookies';
import {clearTokens} from '../storage/tokenStorage';

export async function logout() {
  try {
    await apiRequest<unknown>('/api/v1/auth/logout', {
      method: 'DELETE',
    });
  } finally {
    await clearTokens();
    await clearOAuthCookies();
  }
}
