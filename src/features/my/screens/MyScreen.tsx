import {useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SettingsScreen} from '../../settings/screens/SettingsScreen';
import {EmptyPinState} from '../components/EmptyPinState';
import {MyHeader} from '../components/MyHeader';
import {ProfileActions} from '../components/ProfileActions';
import {ProfileSummary} from '../components/ProfileSummary';
import {useMyProfile} from '../hooks/useMyProfile';

type Props = {
  onLoggedOut: () => void;
};

export function MyScreen({onLoggedOut}: Props) {
  const insets = useSafeAreaInsets();
  const {profile, loading, errorMessage, refresh} = useMyProfile();
  const [settingsVisible, setSettingsVisible] = useState(false);

  const stats = [
    {label: '팔로잉', value: profile?.followingCount ?? 0},
    {label: '팔로워', value: profile?.followerCount ?? 0},
    {label: '게시물', value: profile?.pinCount ?? 0},
  ];

  return (
    <View className="flex-1 bg-background">
      <View style={{paddingTop: insets.top}}>
        <MyHeader
          nickname={profile?.nickname ?? ''}
          onMenuPress={() => setSettingsVisible(true)}
        />
      </View>

      {loading && !profile ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator color="#F7FE90" />
        </View>
      ) : errorMessage && !profile ? (
        <View className="flex-1 items-center justify-center gap-3 px-8">
          <Text className="text-center text-[15px] text-text-secondary">
            {errorMessage}
          </Text>
          <Pressable
            accessibilityRole="button"
            className="rounded-xl bg-surface-elevated px-4 py-3"
            onPress={() => {
              refresh().catch(() => undefined);
            }}>
            <Text className="text-[15px] text-text-primary">다시 시도</Text>
          </Pressable>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="items-center"
          contentContainerStyle={{paddingBottom: 140 + insets.bottom}}>
          <View className="w-full items-center gap-4 py-2">
            <View className="w-full items-center gap-6 pb-3">
              <ProfileSummary
                avatarUrl={profile?.profileImageUrl}
                stats={stats}
              />
              <ProfileActions />
            </View>
            <View className="h-px w-full bg-border" />
          </View>

          <View className="mt-16 items-center">
            <EmptyPinState />
          </View>
        </ScrollView>
      )}

      <SettingsScreen
        visible={settingsVisible}
        onClose={() => setSettingsVisible(false)}
        onLoggedOut={() => {
          setSettingsVisible(false);
          onLoggedOut();
        }}
      />
    </View>
  );
}
