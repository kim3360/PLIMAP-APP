import {useQuery} from '@tanstack/react-query';
import {queryKeys} from '../../../shared/api/queryKeys';
import {getHome} from '../api/home';

export function useHome() {
  const query = useQuery({
    queryKey: queryKeys.home.feed(),
    queryFn: () => getHome(),
  });

  const errorMessage =
    query.error instanceof Error
      ? query.error.message
      : query.error
        ? '홈 정보를 불러오지 못했습니다.'
        : null;

  return {
    pins: query.data?.data ?? [],
    loading: query.isLoading,
    errorMessage,
    refresh: query.refetch,
  };
}
