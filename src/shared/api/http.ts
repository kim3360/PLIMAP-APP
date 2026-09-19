import axios, { AxiosError } from 'axios';
import Config from 'react-native-config';
import { expireSession } from '../../features/auth/session';
import { getAccessToken } from '../../features/auth/storage/tokenStorage';

declare module 'axios' {
  interface AxiosRequestConfig {
    skipAuth?: boolean;
    skipCsrf?: boolean;
  }
}

export type ApiError = Error & {
  status: number;
  code?: string;
};

export function createApiError(
  message: string,
  status: number,
  code?: string,
): ApiError {
  return Object.assign(new Error(message), {
    name: 'ApiError',
    status,
    code,
  });
}

function isApiError(error: unknown): error is ApiError {
  return error instanceof Error && error.name === 'ApiError';
}

export type ApiEnvelope<T> = {
  isSuccess: boolean;
  code?: string;
  message?: string;
  result: T;
};

const CSRF_PROTECTED_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

export const http = axios.create({
  baseURL: Config.API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

async function fetchCsrfToken() {
  const response = await http.get<ApiEnvelope<{ token: string }>>(
    '/api/v1/auth/csrf',
    { skipAuth: true, skipCsrf: true },
  );
  const payload = response.data;

  if (payload.isSuccess === false || !payload.result?.token) {
    throw createApiError(
      payload.message ?? 'CSRF 토큰을 가져오지 못했습니다.',
      response.status,
      payload.code,
    );
  }

  return payload.result.token;
}

http.interceptors.request.use(async config => {
  if (!config.skipAuth) {
    const accessToken = await getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  const method = config.method?.toUpperCase() ?? 'GET';
  if (!config.skipCsrf && CSRF_PROTECTED_METHODS.has(method)) {
    config.headers['X-XSRF-TOKEN'] = await fetchCsrfToken();
  }

  return config;
});

http.interceptors.response.use(
  response => {
    const payload = response.data as ApiEnvelope<unknown> | undefined;
    if (payload && typeof payload === 'object' && payload.isSuccess === false) {
      return Promise.reject(
        createApiError(
          payload.message ?? '요청에 실패했습니다.',
          response.status,
          payload.code,
        ),
      );
    }
    return response;
  },
  (error: AxiosError<ApiEnvelope<unknown>>) => {
    if (error.response?.status === 401 && !error.config?.skipAuth) {
      void expireSession();
    }

    if (isApiError(error)) {
      return Promise.reject(error);
    }

    const payload = error.response?.data;
    return Promise.reject(
      createApiError(
        payload?.message ?? error.message ?? '요청에 실패했습니다.',
        error.response?.status ?? 0,
        payload?.code,
      ),
    );
  },
);

