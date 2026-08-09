import {useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {logout} from '../../auth/api/logout';
import {queryKeys} from '../../../shared/api/queryKeys';
import {SettingsRow} from '../components/SettingsRow';
import {SettingsSection} from '../components/SettingsSection';

type Props = {
  visible: boolean;
  onClose: () => void;
  onLoggedOut: () => void;
};

export function SettingsScreen({visible, onClose, onLoggedOut}: Props) {
  const insets = useSafeAreaInsets();
  const queryClient = useQueryClient();
  const [loggingOut, setLoggingOut] = useState(false);

  const performLogout = async () => {
    if (loggingOut) {
      return;
    }

    setLoggingOut(true);
    try {
      await logout();
      queryClient.removeQueries({queryKey: queryKeys.members.all});
      onLoggedOut();
    } catch (error) {
      Alert.alert(
        '로그아웃 실패',
        error instanceof Error
          ? error.message
          : '로그아웃에 실패했어요. 잠시 후 다시 시도해주세요.',
      );
    } finally {
      setLoggingOut(false);
    }
  };

  const handleLogout = () => {
    Alert.alert('로그아웃', '정말 로그아웃할까요?', [
      {text: '취소', style: 'cancel'},
      {
        text: '로그아웃',
        style: 'destructive',
        onPress: () => {
          performLogout().catch(() => undefined);
        },
      },
    ]);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}>
      <View className="flex-1 bg-background">
        <View style={{paddingTop: insets.top}}>
          <View className="h-[60px] flex-row items-center justify-between px-4">
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="뒤로가기"
              className="h-7 w-7 items-center justify-center"
              onPress={onClose}>
              <View className="h-3.5 w-2 -rotate-45 border-l-2 border-t-2 border-text-primary" />
            </Pressable>
            <Text className="head-20-m text-center text-text-muted">설정</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="닫기"
              className="h-6 w-6 items-center justify-center"
              onPress={onClose}>
              <View className="h-3 w-3 items-center justify-center">
                <View className="absolute h-[1.5px] w-3 rotate-45 bg-text-muted" />
                <View className="absolute h-[1.5px] w-3 -rotate-45 bg-text-muted" />
              </View>
            </Pressable>
          </View>
        </View>

        <ScrollView
          className="flex-1"
          contentContainerClassName="gap-5 px-4 pt-0"
          contentContainerStyle={{paddingBottom: 40 + insets.bottom}}>
          <SettingsSection title="고객 지원">
            <SettingsRow label="서비스 이용가이드" />
          </SettingsSection>

          <SettingsSection title="약관 및 정책">
            <SettingsRow label="PLIMAP 서비스 이용약관" />
            <SettingsRow label="개인정보 처리 방침" />
            <SettingsRow label="위치 정보 수집 동의" />
            <SettingsRow label="마케팅 정보 수신 설정" />
          </SettingsSection>

          <SettingsSection title="내 계정">
            <SettingsRow label="계정 관리" />
            <SettingsRow
              label="로그아웃"
              danger
              showChevron={false}
              onPress={handleLogout}
            />
          </SettingsSection>
        </ScrollView>

        {loggingOut ? (
          <View className="absolute inset-0 items-center justify-center bg-black/40">
            <ActivityIndicator color="#F7FE90" />
          </View>
        ) : null}
      </View>
    </Modal>
  );
}
