import { Pressable, Text, View } from 'react-native';
import MenuIcon from '../../../assets/icons/menu.svg';

import { colors } from '../../../shared/theme/colors';

type Props = {
  nickname: string;
  onBackPress?: () => void;
  onMenuPress?: () => void;
};

export function MyHeader({ nickname, onMenuPress }: Props) {
  return (
    <View className="h-[60px] flex-row items-center px-4">
      <View className="h-6 w-6" />
      <Text
        className="head-24-sb flex-1 text-center text-text-primary"
        numberOfLines={1}
      >
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
