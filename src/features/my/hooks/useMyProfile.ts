import {useQuery} from '@tanstack/react-query';
import {queryKeys} from '../../../shared/api/queryKeys';
import {getMyProfile} from '../api/getMyProfile';

export function useMyProfile() {
  const query = useQuery({
    queryKey: queryKeys.members.me(),
    queryFn: getMyProfile,
  });

  const errorMessage =
    query.error instanceof Error
      ? query.error.message
      : query.error
        ? '프로필을 불러오지 못했습니다.'
        : null;

  return {
    profile: query.data ?? null,
    loading: query.isLoading,
    errorMessage,
    refresh: query.refetch,
  };
}
