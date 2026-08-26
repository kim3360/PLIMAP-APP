import { View } from 'react-native';

type IconProps = {
  size?: number;
  color?: string;
};

export function BookmarkIcon({ size = 24, color = '#0C0D0F' }: IconProps) {
  return (
    <View style={{ width: size, height: size, alignItems: 'center' }}>
      <View
        style={{
          width: size * 0.55,
          height: size * 0.7,
          backgroundColor: color,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          marginTop: size * 0.12,
        }}
      />
      <View
        style={{
          width: 0,
          height: 0,
          marginTop: -1,
          borderLeftWidth: size * 0.275,
          borderRightWidth: size * 0.275,
          borderBottomWidth: size * 0.22,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: color,
          transform: [{ rotate: '180deg' }],
        }}
      />
    </View>
  );
}
