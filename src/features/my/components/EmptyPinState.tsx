import {Pressable, Text, View} from 'react-native';
import EmptyPinIcon from '../../../assets/icons/empty-pin.svg';

type Props = {
  onRegisterPress?: () => void;
};

export function EmptyPinState({onRegisterPress}: Props) {
  return (
    <View className="w-[264px] items-center gap-5">
      <View className="items-center gap-6">
        <View className="h-[140px] w-[140px] items-center justify-center overflow-hidden rounded-full bg-background">
          <View className="absolute h-[20px] w-[180px] rotate-[22deg] bg-surface-muted" />
          <View className="absolute h-[20px] w-[180px] -rotate-[68deg] bg-surface-muted" />
          <View className="absolute h-1 w-[180px] -rotate-[68deg] bg-surface-muted" />
          <View className="absolute top-4">
            <EmptyPinIcon width={32} height={40} />
          </View>
        </View>
        <View className="w-full items-center gap-0.5">
          <Text className="text-center text-[17px] font-medium leading-[24px] text-text-muted">
            아직 등록한 핀이 없어요
          </Text>
          <Text className="w-[264px] text-center text-[15px] font-medium leading-[21px] text-text-tertiary">
            원하는 장소에 나만의 음악을 기록해보세요
          </Text>
        </View>
      </View>
      <Pressable
        accessibilityRole="button"
        className="h-10 w-[144px] items-center justify-center rounded-xl bg-[#FDFDFD]"
        onPress={onRegisterPress}>
        <Text className="text-[15px] font-medium leading-[21px] text-[#191919]">
          핀 등록하러 가기
        </Text>
      </Pressable>
    </View>
  );
}
