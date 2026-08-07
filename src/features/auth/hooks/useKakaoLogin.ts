import {useCallback, useRef, useState} from 'react';

type SuccessResult = {
  isNewUser: boolean;
};

type Options = {
  onSuccess?: (result: SuccessResult) => void;
};

export function useKakaoLogin(options: Options = {}) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const onSuccessRef = useRef(options.onSuccess);
  onSuccessRef.current = options.onSuccess;

  const start = useCallback(() => {
    setErrorMessage(null);
    setLoading(true);
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setLoading(false);
  }, []);

  const handleSuccess = useCallback((result: SuccessResult) => {
    setErrorMessage(null);
    setLoading(false);
    setVisible(false);
    onSuccessRef.current?.(result);
  }, []);

  const handleError = useCallback((message: string) => {
    setErrorMessage(message);
    setLoading(false);
    setVisible(false);
  }, []);

  return {
    visible,
    loading,
    errorMessage,
    start,
    close,
    handleSuccess,
    handleError,
  };
}
