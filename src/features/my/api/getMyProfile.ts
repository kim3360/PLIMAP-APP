import { http, type ApiEnvelope } from '../../../shared/api/http';

export interface MyProfile {
  id: number;
  nickname: string;
  name?: string | null;
  introduction?: string | null;
  profileImageUrl?: string | null;
  followerCount: number;
  followingCount: number;
  onboardingCompletedAt?: string | null;
  pinCount: number;
}

export async function getMyProfile() {
  const response = await http.get<ApiEnvelope<MyProfile>>('/api/v1/members/me');
  return response.data.result;
}
