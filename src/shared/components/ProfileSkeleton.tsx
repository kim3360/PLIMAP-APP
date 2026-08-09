import {View} from 'react-native';
import {SkeletonBone, SkeletonStat} from './SkeletonBone';

type Props = {
  gridCount?: number;
};

/** 프로필/개인 피드 공통 스켈레톤 */
export function ProfileSkeleton({gridCount = 12}: Props) {
  const items = Array.from({length: gridCount}, (_, index) => index);

  return (
    <View className="w-full items-center gap-4 py-2">
      <View className="w-full items-center gap-1 pb-3">
        <View className="w-full items-center">
          <View className="w-[236px] items-center">
            <View className="w-[88px] items-center gap-2.5 pb-4">
              <SkeletonBone width={88} height={88} rounded={44} />
              <SkeletonBone width={88} height={24} rounded={4} />
            </View>

            <View className="h-[46px] w-full flex-row items-center justify-between">
              <SkeletonStat />
              <SkeletonStat />
              <SkeletonStat />
            </View>
          </View>

          <View className="w-full items-center px-2.5 py-5">
            <SkeletonBone width={356} height={21} rounded={4} />
          </View>
        </View>

        <View className="flex-row gap-2">
          <SkeletonBone width={176} height={37} rounded={8} />
          <SkeletonBone width={176} height={37} rounded={8} />
        </View>
      </View>

      <View className="h-px w-full bg-border" />

      <View className="w-[368px] flex-row flex-wrap gap-1">
        {items.map(item => (
          <SkeletonBone key={item} width={120} height={120} rounded={4.5} />
        ))}
      </View>
    </View>
  );
}
