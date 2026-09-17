import {http} from '../../../shared/api/http';
import {clearOAuthCookies} from './oauthCookies';
import {clearTokens} from '../storage/tokenStorage';

export async function logout() {
  try {
    await http.delete('/api/v1/auth/logout');
  } finally {
    await clearTokens();
    await clearOAuthCookies();
  }
}
