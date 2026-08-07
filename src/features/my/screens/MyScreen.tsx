import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EmptyPinState } from '../components/EmptyPinState';
import { MyHeader } from '../components/MyHeader';
import { ProfileActions } from '../components/ProfileActions';
import { ProfileSummary } from '../components/ProfileSummary';

const stats = [
  { label: '팔로잉', value: 0 },
  { label: '팔로워', value: 0 },
  { label: '게시물', value: 0 },
];

export function MyScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-background">
      <View style={{ paddingTop: insets.top }}>
        <MyHeader nickname="1mhyori" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="items-center"
        contentContainerStyle={{ paddingBottom: 140 + insets.bottom }}
      >
        <View className="w-full items-center gap-4 py-2">
          <View className="w-full items-center gap-6 pb-3">
            <ProfileSummary
              avatar={require('../../../assets/images/my-avatar.png')}
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
    </View>
  );
}
