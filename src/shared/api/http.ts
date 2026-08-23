import axios, {AxiosError, type AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';
import {getAccessToken} from '../../features/auth/storage/tokenStorage';

declare module 'axios' {
  interface AxiosRequestConfig {
    skipAuth?: boolean;
    skipCsrf?: boolean;
  }
}

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

export const http = axios.create({
  baseURL: Config.API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

async function fetchCsrfToken() {
  const response = await http.get<ApiEnvelope<{token: string}>>(
    '/api/v1/auth/csrf',
    {skipAuth: true, skipCsrf: true},
  );
  const payload = response.data;

  if (payload.isSuccess === false || !payload.result?.token) {
    throw new ApiError(
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
        new ApiError(
          payload.message ?? '요청에 실패했습니다.',
          response.status,
          payload.code,
        ),
      );
    }
    return response;
  },
  (error: AxiosError<ApiEnvelope<unknown>>) => {
    if (error instanceof ApiError) {
      return Promise.reject(error);
    }

    const payload = error.response?.data;
    return Promise.reject(
      new ApiError(
        payload?.message ?? error.message ?? '요청에 실패했습니다.',
        error.response?.status ?? 0,
        payload?.code,
      ),
    );
  },
);

export async function apiRequest<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const {method = 'GET', body, auth = true} = options;

  const config: AxiosRequestConfig = {
    url: path,
    method,
    data: body,
    skipAuth: !auth,
  };

  const response = await http.request<ApiEnvelope<T>>(config);
  return response.data.result;
}
