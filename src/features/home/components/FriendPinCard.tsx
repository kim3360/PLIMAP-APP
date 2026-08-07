import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from 'react-native';
import {ChevronIcon} from '../../../shared/components/icons/Icons';
import {colors} from '../../../shared/theme/colors';

type Props = {
  nickname: string;
  placeName: string;
  cover: ImageSourcePropType;
  avatar: ImageSourcePropType;
  onPress?: () => void;
};

export function FriendPinCard({
  nickname,
  placeName,
  cover,
  avatar,
  onPress,
}: Props) {
  return (
    <Pressable
      className="h-[124px] w-[124px] overflow-hidden rounded-xl"
      onPress={onPress}>
      <Image source={cover} className="absolute inset-0 h-full w-full" />
      <View className="absolute inset-0 bg-black/70" />
      <Image
        source={avatar}
        className="absolute left-[14px] top-[15px] h-[38px] w-[38px] rounded-full"
      />
      <Text
        className="absolute left-[14px] right-[14px] top-[68px] text-[13px] leading-[13px] text-text-muted"
        numberOfLines={1}>
        {nickname}
      </Text>
      <View className="absolute bottom-[14px] left-3 right-2 flex-row items-center gap-0.5">
        <Text
          className="shrink text-[15px] font-medium leading-[21px] text-text-primary"
          numberOfLines={1}>
          {placeName}
        </Text>
        <ChevronIcon size={16} color={colors.textPrimary} />
      </View>
    </Pressable>
  );
}
