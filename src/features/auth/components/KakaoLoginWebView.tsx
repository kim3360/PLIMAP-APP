import {useRef} from 'react';
import {
  ActivityIndicator,
  Modal,
  Pressable,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';
import {
  getKakaoAuthorizationUrl,
  isOAuthCallbackUrl,
  parseOAuthCallbackUrl,
} from '../api/oauth';
import {readOAuthTokensFromCookies} from '../api/oauthCookies';
import {saveTokens} from '../storage/tokenStorage';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSuccess: (result: {isNewUser: boolean}) => void;
  onError: (message: string) => void;
};

export function KakaoLoginWebView({
  visible,
  onClose,
  onSuccess,
  onError,
}: Props) {
  const insets = useSafeAreaInsets();
  const handledRef = useRef(false);

  const handleCallbackUrl = async (url: string) => {
    if (!url || !isOAuthCallbackUrl(url) || handledRef.current) {
      return;
    }

    handledRef.current = true;
    const callback = parseOAuthCallbackUrl(url);

    if (callback.status === 'error') {
      onError(callback.message);
      onClose();
      return;
    }

    try {
      // Cookie write can lag slightly behind the redirect.
      await new Promise<void>(resolve => {
        setTimeout(resolve, 300);
      });
      const tokens = await readOAuthTokensFromCookies();
      await saveTokens(tokens);
      onSuccess({isNewUser: callback.isNewUser});
      onClose();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : '카카오 로그인에 실패했습니다. 다시 시도해 주세요.';
      onError(message);
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
      onShow={() => {
        handledRef.current = false;
      }}>
      <View className="flex-1 bg-background" style={{paddingTop: insets.top}}>
        <View className="h-12 flex-row items-center justify-between border-b border-border px-4">
          <Text className="text-[17px] font-medium text-text-primary">
            카카오 로그인
          </Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="닫기"
            className="h-10 items-center justify-center px-2"
            onPress={onClose}>
            <Text className="text-[15px] text-text-secondary">닫기</Text>
          </Pressable>
        </View>

        {visible ? (
          <WebView
            source={{uri: getKakaoAuthorizationUrl()}}
            onNavigationStateChange={navState => {
              void handleCallbackUrl(navState.url);
            }}
            onShouldStartLoadWithRequest={request => {
              if (isOAuthCallbackUrl(request.url)) {
                void handleCallbackUrl(request.url);
                return false;
              }
              return true;
            }}
            sharedCookiesEnabled
            thirdPartyCookiesEnabled
            startInLoadingState
            renderLoading={() => (
              <View className="absolute inset-0 items-center justify-center bg-background">
                <ActivityIndicator color="#F7FE90" />
              </View>
            )}
            style={{flex: 1, backgroundColor: '#0C0D0F'}}
          />
        ) : null}
      </View>
    </Modal>
  );
}
