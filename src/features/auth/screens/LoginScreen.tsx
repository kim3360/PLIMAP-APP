import { Alert, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GoogleIcon from '../../../assets/icons/google.svg';
import KakaoIcon from '../../../assets/icons/kakao.svg';
import { colors } from '../../../shared/theme/colors';
import { KakaoLoginWebView } from '../components/KakaoLoginWebView';
import { SocialLoginButton } from '../components/SocialLoginButton';
import { useKakaoLogin } from '../hooks/useKakaoLogin';

type Props = {
  onAuthenticated: (result?: { isNewUser?: boolean }) => void;
};

export function LoginScreen({ onAuthenticated }: Props) {
  const insets = useSafeAreaInsets();
  const kakaoLogin = useKakaoLogin({
    onSuccess: result => onAuthenticated({ isNewUser: result.isNewUser }),
  });

  return (
    <View className="flex-1 bg-pli-black-100">
      <View className="items-center" style={{ paddingTop: insets.top }}>
        <View className="mt-[190px] items-center ">
          <Image
            source={require('../../../assets/images/plimap-wordmark.png')}
            className="h-[43px] w-[215px]"
            resizeMode="contain"
            accessibilityLabel="PLIMAP"
          />
          <Text className="body-18-r pt-4 text-center text-[#F9F9F9]">
            지도 위에서 발견하는 새로운 플레이리스트
          </Text>
        </View>
      </View>
      <View
        className="mt-[153px] w-full items-center px-[39px]"
        style={{ paddingBottom: Math.max(insets.bottom, 24) }}
      >
        <View className="w-full max-w-[324px] gap-3">
          <SocialLoginButton
            label="카카오로 시작하기"
            backgroundColor={colors.kakao}
            Icon={KakaoIcon}
            onPress={kakaoLogin.start}
          />
          <SocialLoginButton
            label="Google로 시작하기"
            backgroundColor={colors.grayscale0}
            Icon={GoogleIcon}
            onPress={() =>
              Alert.alert('준비 중', 'Google 로그인은 곧 지원될 예정입니다.')
            }
          />
        </View>

        {kakaoLogin.errorMessage ? (
          <Text className="etc-13-r mt-4 px-2 text-center text-red">
            {kakaoLogin.errorMessage}
          </Text>
        ) : null}

        <View className="mt-5 items-center px-2.5 pb-3">
          <Text className="etc-13-r text-center text-text-secondary">
            {`회원가입 시 PLIMAP의\n개인정보 처리방침 및 이용약관에 동의하게 됩니다`}
          </Text>
        </View>
      </View>

      <KakaoLoginWebView
        visible={kakaoLogin.visible}
        onClose={kakaoLogin.close}
        onSuccess={kakaoLogin.handleSuccess}
        onError={kakaoLogin.handleError}
      />
    </View>
  );
}
