import {Pressable, Text, View} from 'react-native';
import {colors} from '../../../shared/theme/colors';

type Props = {
  label: string;
  danger?: boolean;
  showChevron?: boolean;
  onPress?: () => void;
};

export function SettingsRow({
  label,
  danger = false,
  showChevron = true,
  onPress,
}: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      className="w-full flex-row items-center justify-between active:opacity-70"
      onPress={onPress}>
      <View className="items-center justify-center py-2 pl-3 pr-2">
        <Text
          className="body-15-m"
          style={{color: danger ? colors.danger : colors.textMuted}}>
          {label}
        </Text>
      </View>
      {showChevron ? (
        <View className="h-6 w-6 items-center justify-center">
          <View className="h-3 w-1.5 rotate-45 border-r-2 border-t-2 border-text-muted" />
        </View>
      ) : (
        <View className="h-6 w-6" />
      )}
    </Pressable>
  );
}
