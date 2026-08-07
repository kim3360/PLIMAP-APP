import {Pressable, Text, View} from 'react-native';
import ShareIcon from '../../../assets/icons/share.svg';
import {colors} from '../../../shared/theme/colors';

type Props = {
  onEditPress?: () => void;
  onMyPlimapPress?: () => void;
  onSharePress?: () => void;
};

export function ProfileActions({
  onEditPress,
  onMyPlimapPress,
  onSharePress,
}: Props) {
  return (
    <View className="w-full flex-row items-center justify-center gap-2 px-4">
      <Pressable
        accessibilityRole="button"
        className="h-9 w-[158px] items-center justify-center rounded-lg bg-surface-muted"
        onPress={onEditPress}>
        <Text className="text-[15px] font-medium leading-[21px] text-text-primary">
          프로필 편집
        </Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        className="h-9 w-[158px] items-center justify-center rounded-lg bg-surface-muted"
        onPress={onMyPlimapPress}>
        <Text className="text-[15px] font-medium leading-[21px] text-text-primary">
          내 PLIMAP
        </Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        className="h-9 w-9 items-center justify-center rounded-lg bg-surface-muted"
        onPress={onSharePress}>
        <ShareIcon width={16} height={15} color={colors.textMuted} />
      </Pressable>
    </View>
  );
}
