import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from 'react-native';
import LinearGradientFallback from './GradientOverlay';
import NextIcon from '../../../assets/icons/next.svg';
import {colors} from '../../../shared/theme/colors';

type Props = {
  name: string;
  meta: string;
  image: ImageSourcePropType;
  onPress?: () => void;
};

export function HotPlaceCard({name, meta, image, onPress}: Props) {
  return (
    <Pressable
      className="h-44 w-44 overflow-hidden rounded-xl border border-surface-muted"
      onPress={onPress}>
      <Image source={image} className="absolute inset-0 h-full w-full" />
      <LinearGradientFallback />
      <View className="absolute bottom-4 left-4 right-3 gap-0.5">
        <View className="flex-row items-center gap-0.5">
          <Text
            className="shrink text-[17px] font-medium leading-[24px] text-text-primary"
            numberOfLines={1}>
            {name}
          </Text>
          <NextIcon width={16} height={16} color={colors.textPrimary} />
        </View>
        <Text className="text-[15px] leading-[21px] text-text-secondary">
          {meta}
        </Text>
      </View>
    </Pressable>
  );
}
