import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeIcon from '../../assets/icons/home.svg';
import MyIcon from '../../assets/icons/my.svg';
import PlimapIcon from '../../assets/icons/plimap.svg';
import { colors } from '../../shared/theme/colors';
import type { RootTabParamList } from './types';

const LABELS: Record<keyof RootTabParamList, string> = {
  Home: 'HOME',
  Plimap: 'PLIMAP',
  My: 'MY',
};

type Props = {
  tabs: (keyof RootTabParamList)[];
  activeTab: keyof RootTabParamList;
  onTabPress: (tab: keyof RootTabParamList) => void;
};

export function CustomTabBar({ tabs, activeTab, onTabPress }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute left-[21px] right-[21px]"
      style={{ bottom: Math.max(insets.bottom, 12) }}
    >
      <View className="h-[84px] flex-row items-center justify-center rounded-[32px] border border-border bg-background/90 px-2.5">
        {tabs.map(tab => {
          const focused = activeTab === tab;
          const iconColor = focused ? colors.white : colors.textTertiary;

          return (
            <Pressable
              key={tab}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              className={`h-16 w-[110px] items-center justify-center gap-2 rounded-3xl ${
                focused ? 'bg-surface-elevated' : ''
              }`}
              onPress={() => onTabPress(tab)}
            >
              {tab === 'Home' ? (
                <HomeIcon width={24} height={24} color={iconColor} />
              ) : null}
              {tab === 'Plimap' ? (
                <PlimapIcon width={22} height={22} color={iconColor} />
              ) : null}
              {tab === 'My' ? (
                <MyIcon width={24} height={24} color={iconColor} />
              ) : null}
              <Text
                className={`text-[13px] leading-[13px] ${
                  focused ? 'text-white' : 'text-text-tertiary'
                }`}
              >
                {LABELS[tab]}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
