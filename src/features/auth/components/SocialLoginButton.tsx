import { Pressable, Text, View } from 'react-native';
import type { FC } from 'react';
import type { SvgProps } from 'react-native-svg';

type Props = {
  label: string;
  backgroundColor: string;
  Icon: FC<SvgProps>;
  onPress?: () => void;
};

export function SocialLoginButton({
  label,
  backgroundColor,
  Icon,
  onPress,
}: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      className="h-[64px] w-full flex-row items-center justify-center gap-3 rounded-xl px-6 active:opacity-90"
      style={{ backgroundColor }}
      onPress={onPress}
    >
      <View className="h-6 w-6 items-center justify-center">
        <Icon width={24} height={24} />
      </View>
      <Text className="body-17-m text-center text-kakao-text">{label}</Text>
    </Pressable>
  );
}
