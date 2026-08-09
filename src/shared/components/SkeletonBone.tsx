import {useEffect} from 'react';
import {View, type ViewProps} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type Props = ViewProps & {
  width?: number | `${number}%`;
  height?: number;
  rounded?: number;
  className?: string;
};

export function SkeletonBone({
  width,
  height,
  rounded = 4,
  className,
  style,
  ...rest
}: Props) {
  const opacity = useSharedValue(0.55);

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(1, {
        duration: 900,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      className={className}
      style={[
        {
          width,
          height,
          borderRadius: rounded,
          backgroundColor: '#323238',
        },
        animatedStyle,
        style,
      ]}
      {...rest}
    />
  );
}

export function SkeletonStat() {
  return (
    <View className="h-[46px] w-[34px] items-center justify-between">
      <SkeletonBone width={44} height={25} rounded={4} />
      <SkeletonBone width={56} height={15} rounded={4} />
    </View>
  );
}
