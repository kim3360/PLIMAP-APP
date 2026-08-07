import {Image, Pressable, Text, View} from 'react-native';
import BellIcon from '../../../assets/icons/bell.svg';
import {ChevronIcon} from '../../../shared/components/icons/Icons';
import {colors} from '../../../shared/theme/colors';

type Props = {
  nickname: string;
  location: string;
  onNotificationPress?: () => void;
  onLocationPress?: () => void;
};

export function HomeHeader({
  nickname,
  location,
  onNotificationPress,
  onLocationPress,
}: Props) {
  return (
    <View>
      <View className="h-14 flex-row items-center justify-between px-4">
        <View className="flex-row items-center gap-2.5">
          <Image
            source={require('../../../assets/Logo.png')}
            className="h-[30px] w-[120px]"
            resizeMode="contain"
          />
        </View>
        <Pressable
          accessibilityRole="button"
          className="h-11 w-11 items-center justify-center rounded-full bg-surface-elevated"
          onPress={onNotificationPress}>
          <BellIcon width={22} height={22} />
        </Pressable>
      </View>

      <View className="gap-1 px-4 py-4">
        <Text className="head-24-sb text-text-primary">
          반가워요, <Text className="text-neon">{nickname} </Text>님
        </Text>
        <Pressable
          className="flex-row items-center gap-2"
          onPress={onLocationPress}>
          <Text className="body-17-r text-text-secondary">현재 위치</Text>
          <View className="shrink flex-row items-center gap-1">
            <Text
              className="body-17-r max-w-[180px] text-text-soft"
              numberOfLines={1}>
              {location}
            </Text>
            <ChevronIcon size={14} color={colors.textSoft} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
