import {View} from 'react-native';

type Props = {
  count?: number;
  activeIndex?: number;
};

export function PaginationDots({count = 3, activeIndex = 0}: Props) {
  return (
    <View className="flex-row items-center justify-center gap-2">
      {Array.from({length: count}).map((_, index) => (
        <View
          key={index}
          className={`h-1.5 w-1.5 rounded-full ${
            index === activeIndex ? 'bg-text-primary' : 'bg-border-muted'
          }`}
        />
      ))}
    </View>
  );
}
