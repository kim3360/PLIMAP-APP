import {Pressable, Text, View} from 'react-native';
import {
  BookmarkIcon,
  ChevronIcon,
} from '../../../shared/components/icons/Icons';
import {colors} from '../../../shared/theme/colors';

type Props = {
  name: string;
  creator: string;
  distance: string;
  onPress?: () => void;
  onBookmarkPress?: () => void;
};

export function SavedPlaceCard({
  name,
  creator,
  distance,
  onPress,
  onBookmarkPress,
}: Props) {
  return (
    <Pressable
      className="w-full flex-row items-center justify-between rounded-xl bg-surface px-5 py-[18px]"
      onPress={onPress}>
      <View className="flex-1 gap-1 pr-3">
        <View className="flex-row items-center">
          <Text className="text-[17px] font-medium leading-[24px] text-text-primary">
            {name}
          </Text>
          <ChevronIcon size={16} color={colors.textPrimary} />
        </View>
        <View className="flex-row flex-wrap items-center gap-1">
          <Text className="text-[15px] leading-[21px] text-text-muted">
            {creator}
          </Text>
          <Text className="text-[15px] font-medium leading-[21px] text-text-secondary">
            님이 생성한 핀
          </Text>
          <Text className="text-[15px] font-medium leading-[21px] text-text-secondary">
            ∙
          </Text>
          <Text className="text-[15px] font-medium leading-[21px] text-text-secondary">
            {distance}
          </Text>
        </View>
      </View>
      <Pressable
        accessibilityRole="button"
        className="h-[52px] w-[52px] items-center justify-center rounded-2xl bg-neon"
        onPress={onBookmarkPress}>
        <BookmarkIcon size={22} color={colors.background} />
      </Pressable>
    </Pressable>
  );
}
