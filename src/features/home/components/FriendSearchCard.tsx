import {Pressable, Text, View} from 'react-native';
import NextIcon from '../../../assets/icons/next.svg';
import SearchIcon from '../../../assets/icons/search.svg';
import {colors} from '../../../shared/theme/colors';

type Props = {
  onPress?: () => void;
};

export function FriendSearchCard({onPress}: Props) {
  return (
    <Pressable
      className="mx-4 h-[86px] flex-row items-center justify-between rounded-xl bg-surface px-[18px]"
      onPress={onPress}>
      <View className="flex-1 flex-row items-center gap-4">
        <View className="h-12 w-12 items-center justify-center rounded-full bg-surface-muted">
          <SearchIcon width={20} height={20} />
        </View>
        <View className="flex-1 gap-1">
          <Text className="text-[15px] leading-[21px] text-text-secondary">
            닉네임으로 친구를 찾아보세요
          </Text>
          <Text className="text-[18px] font-semibold leading-[25px] text-text-primary">
            친구 검색하러 가기
          </Text>
        </View>
      </View>
      <View className="pl-2 opacity-50">
        <NextIcon width={20} height={20} color={colors.textSecondary} />
      </View>
    </Pressable>
  );
}
