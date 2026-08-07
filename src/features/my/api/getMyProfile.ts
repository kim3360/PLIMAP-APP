import {apiRequest} from '../../../shared/api/http';

export type MyProfile = {
  id: number;
  nickname: string;
  name?: string | null;
  introduction?: string | null;
  profileImageUrl?: string | null;
  followerCount: number;
  followingCount: number;
  onboardingCompletedAt?: string | null;
  pinCount: number;
};

export function getMyProfile() {
  return apiRequest<MyProfile>('/api/v1/members/me');
}
