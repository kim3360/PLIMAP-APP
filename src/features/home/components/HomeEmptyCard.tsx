import { Pressable, Text, View } from 'react-native';

type Props = {
  lines: string[];
  actionLabel: string;
  onPress?: () => void;
};

export function HomeEmptyCard({ lines, actionLabel, onPress }: Props) {
  return (
    <View className="h-[148px] w-full items-center justify-center rounded-[20px] border border-border-muted">
      <View className="items-center">
        {lines.map(line => (
          <Text key={line} className="body-15-m text-grayscale-300">
            {line}
          </Text>
        ))}
        <Pressable
          accessibilityRole="button"
          className="mt-4 border-b border-border-muted"
          onPress={onPress}
        >
          <Text className="body-15-m text-white">{actionLabel}</Text>
        </Pressable>
      </View>
    </View>
  );
}
