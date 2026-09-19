import { queryClient } from '../../shared/api/queryClient';
import { clearOAuthCookies } from './api/oauthCookies';
import { clearTokens } from './storage/tokenStorage';

type Listener = () => void;

const listeners = new Set<Listener>();
let expiring = false;

export function subscribeAuthExpired(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export async function expireSession() {
  if (expiring) {
    return;
  }

  expiring = true;
  try {
    await clearTokens();
    await clearOAuthCookies();
    queryClient.clear();
    listeners.forEach(listener => listener());
  } finally {
    expiring = false;
  }
}
