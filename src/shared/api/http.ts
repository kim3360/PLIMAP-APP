import {API_BASE_URL} from '../../config/api';
import {getAccessToken} from '../../features/auth/storage/tokenStorage';

export class ApiError extends Error {
  status: number;
  code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

type ApiEnvelope<T> = {
  isSuccess: boolean;
  code?: string;
  message?: string;
  result: T;
};

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  auth?: boolean;
};

const CSRF_PROTECTED_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

async function fetchCsrfToken() {
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/csrf`, {
    method: 'GET',
    headers: {Accept: 'application/json'},
  });
  const payload = (await response.json()) as ApiEnvelope<{token: string}>;
  if (!response.ok || payload.isSuccess === false || !payload.result?.token) {
    throw new ApiError(
      payload.message ?? 'CSRF 토큰을 가져오지 못했습니다.',
      response.status,
      payload.code,
    );
  }
  return payload.result.token;
}

export async function apiRequest<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const {method = 'GET', body, auth = true} = options;
  const headers: Record<string, string> = {
    Accept: 'application/json',
  };

  if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
  }

  if (auth) {
    const accessToken = await getAccessToken();
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  if (CSRF_PROTECTED_METHODS.has(method)) {
    headers['X-XSRF-TOKEN'] = await fetchCsrfToken();
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  let payload: ApiEnvelope<T> | null = null;
  try {
    payload = (await response.json()) as ApiEnvelope<T>;
  } catch {
    payload = null;
  }

  if (!response.ok || payload?.isSuccess === false) {
    throw new ApiError(
      payload?.message ?? '요청에 실패했습니다.',
      response.status,
      payload?.code,
    );
  }

  return payload!.result;
}
