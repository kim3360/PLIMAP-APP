import {Image, ImageSourcePropType, Text, View} from 'react-native';

type Stat = {
  label: string;
  value: number;
};

type Props = {
  avatar: ImageSourcePropType;
  stats: Stat[];
};

export function ProfileSummary({avatar, stats}: Props) {
  return (
    <View className="w-full items-center">
      <View className="mb-4 h-[88px] w-[88px] overflow-hidden rounded-full">
        <Image source={avatar} className="h-full w-full" />
      </View>
      <View className="h-[46px] w-[280px] flex-row items-center justify-between">
        {stats.map(stat => (
          <View key={stat.label} className="min-w-[64px] items-center">
            <Text className="text-lg font-semibold leading-[25px] text-text-primary">
              {stat.value}
            </Text>
            <Text
              className="text-[15px] leading-[21px] text-[#BBBBBB]"
              numberOfLines={1}>
              {stat.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
