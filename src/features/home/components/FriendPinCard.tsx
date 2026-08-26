import { Image, Pressable, Text, View } from 'react-native';
import NextIcon from '../../../assets/icons/next.svg';
import { colors } from '../../../shared/theme/colors';

import { HomePin } from '../api/home';

export function FriendPinCard({
  albumImageUrl,
  writerNickname,
  writerProfileImage,
  placeName,
}: HomePin) {
  return (
    <Pressable className="h-[124px] w-[124px] overflow-hidden rounded-xl">
      <Image
        source={{ uri: albumImageUrl }}
        className="absolute inset-0 h-full w-full"
      />
      <View className="absolute inset-0 bg-black/70" />
      <Image
        source={{ uri: writerProfileImage }}
        className="absolute left-[14px] top-[15px] h-[38px] w-[38px] rounded-full"
      />
      <Text
        className="absolute left-[14px] right-[14px] top-[68px] text-[13px] leading-[13px] text-text-muted"
        numberOfLines={1}
      >
        {writerNickname}
      </Text>
      <View className="absolute bottom-[14px] left-3 right-2 flex-row items-center gap-0.5">
        <Text
          className="shrink text-[15px] font-medium leading-[21px] text-text-primary"
          numberOfLines={1}
        >
          {placeName}
        </Text>
        <NextIcon width={16} height={16} color={colors.textPrimary} />
      </View>
    </Pressable>
  );
}
