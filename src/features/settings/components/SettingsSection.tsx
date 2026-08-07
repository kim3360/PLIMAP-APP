import {Text, View} from 'react-native';
import type {ReactNode} from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export function SettingsSection({title, children}: Props) {
  return (
    <View className="w-full gap-2">
      <Text className="etc-13-r w-full text-[#BBBBBB]">{title}</Text>
      <View className="w-full gap-0.5">{children}</View>
    </View>
  );
}
