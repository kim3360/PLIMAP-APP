import {Text, View} from 'react-native';

type Props = {
  title: string;
};

export function PlaceholderScreen({title}: Props) {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-lg font-semibold text-text-primary">{title}</Text>
    </View>
  );
}
