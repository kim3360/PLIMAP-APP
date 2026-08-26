import { apiRequest } from '../../../shared/api/http';

export interface HomePin {
  pinId: number;
  placeName: string;
  latitude: number;
  longitude: number;
  writerNickname: string;
  writerProfileImage: string;
  albumImageUrl: string;
  createdAt: string;
}

export interface Home {
  data: HomePin[];
  nextCursor: string;
  hasNext: boolean;
  pageSize: number;
}

export interface GetHomeParams {
  cursor?: string;
  pageSize?: number;
}

export function getHome(params?: GetHomeParams) {
  return apiRequest<Home>('/api/v1/home', { params });
}
