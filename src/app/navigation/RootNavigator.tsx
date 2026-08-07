import {useState} from 'react';
import {View} from 'react-native';
import {HomeScreen} from '../../features/home/screens/HomeScreen';
import {MyScreen} from '../../features/my/screens/MyScreen';
import {PlimapMapScreen} from '../../features/plimap/screens/PlimapMapScreen';
import {CustomTabBar} from './CustomTabBar';
import type {RootTabParamList} from './types';

const tabs: (keyof RootTabParamList)[] = ['Home', 'Plimap', 'My'];

export function RootNavigator() {
  const [activeTab, setActiveTab] =
    useState<keyof RootTabParamList>('Home');

  return (
    <View className="flex-1 bg-background">
      <View className="flex-1">
        {activeTab === 'Home' ? <HomeScreen /> : null}
        {activeTab === 'Plimap' ? <PlimapMapScreen /> : null}
        {activeTab === 'My' ? <MyScreen /> : null}
      </View>
      <CustomTabBar
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={setActiveTab}
      />
    </View>
  );
}
