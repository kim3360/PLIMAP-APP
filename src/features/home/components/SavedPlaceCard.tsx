import { Pressable, Text, View } from 'react-native';
import NextIcon from '../../../assets/icons/next.svg';
import BookmarkIcon from '../../../assets/icons/bookmark.svg';

import { colors } from '../../../shared/theme/colors';

type Props = {
  placeName: string;
  creator: string;
  distance: string;
  onPress?: () => void;
  onBookmarkPress?: () => void;
};

export function SavedPlaceCard({
  placeName,
  creator,
  distance,
  onPress,
  onBookmarkPress,
}: Props) {
  return (
    <Pressable
      className="w-full flex-row items-center justify-between rounded-xl bg-surface px-5 py-[18px]"
      onPress={onPress}
    >
      <View className="flex-1 gap-1 pr-3">
        <View className="flex-row items-center">
          <Text className="body-17-m text-text-primary">{placeName}</Text>
          <NextIcon width={16} height={16} color={colors.textPrimary} />
        </View>
        <View className="flex-row flex-wrap items-center gap-1">
          <Text className="body-15-r text-text-muted">{creator}</Text>
          <Text className="body-15-m text-text-secondary">
            님이 생성한 핀 ∙ {distance}
          </Text>
        </View>
      </View>
      <Pressable
        accessibilityRole="button"
        className="h-[52px] w-[52px] items-center justify-center rounded-full bg-pli-black-100"
        onPress={onBookmarkPress}
      >
        <BookmarkIcon width={22} height={22} color={colors.background} />
      </Pressable>
    </Pressable>
  );
}
