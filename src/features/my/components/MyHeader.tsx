import { Pressable, Text, View } from 'react-native';
import MenuIcon from '../../../assets/icons/menu.svg';
import { colors } from '../../../shared/theme/colors';

type Props = {
  nickname: string;
  onBackPress?: () => void;
  onMenuPress?: () => void;
};

export function MyHeader({ nickname, onBackPress, onMenuPress }: Props) {
  return (
    <View className="h-[60px] flex-row items-center justify-between px-4">
      <Pressable
        accessibilityRole="button"
        className="h-7 w-7 items-center justify-center"
        onPress={onBackPress}
      >
        <View className="h-3.5 w-2 border-l-2 border-t-2 border-text-primary -rotate-45" />
      </Pressable>
      <Text className="text-2xl font-semibold leading-[34px] text-text-primary">
        {nickname}
      </Text>
      <Pressable
        accessibilityRole="button"
        className="h-6 w-6 items-center justify-center"
        onPress={onMenuPress}
      >
        <MenuIcon width={16} height={13} color={colors.textPrimary} />
      </Pressable>
    </View>
  );
}
