import {useCallback, useEffect, useState} from 'react';
import {getMyProfile, type MyProfile} from '../api/getMyProfile';

export function useMyProfile() {
  const [profile, setProfile] = useState<MyProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const next = await getMyProfile();
      setProfile(next);
    } catch (error) {
      setProfile(null);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : '프로필을 불러오지 못했습니다.',
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return {profile, loading, errorMessage, refresh};
}
