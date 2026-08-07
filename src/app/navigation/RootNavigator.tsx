import {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {LoginScreen} from '../../features/auth/screens/LoginScreen';
import {hasStoredSession} from '../../features/auth/storage/tokenStorage';
import {HomeScreen} from '../../features/home/screens/HomeScreen';
import {MyScreen} from '../../features/my/screens/MyScreen';
import {PlimapMapScreen} from '../../features/plimap/screens/PlimapMapScreen';
import {CustomTabBar} from './CustomTabBar';
import type {RootTabParamList} from './types';

const tabs: (keyof RootTabParamList)[] = ['Home', 'Plimap', 'My'];

export function RootNavigator() {
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] =
    useState<keyof RootTabParamList>('Home');

  useEffect(() => {
    let mounted = true;

    void (async () => {
      try {
        const hasSession = await hasStoredSession();
        if (mounted) {
          setIsAuthenticated(hasSession);
        }
      } finally {
        if (mounted) {
          setIsBootstrapping(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (isBootstrapping) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator color="#F7FE90" />
      </View>
    );
  }

  if (!isAuthenticated) {
    return <LoginScreen onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <View className="flex-1 bg-background">
      <View className="flex-1">
        {activeTab === 'Home' ? <HomeScreen /> : null}
        {activeTab === 'Plimap' ? <PlimapMapScreen /> : null}
        {activeTab === 'My' ? (
          <MyScreen
            onLoggedOut={() => {
              setIsAuthenticated(false);
              setActiveTab('Home');
            }}
          />
        ) : null}
      </View>
      <CustomTabBar
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={setActiveTab}
      />
    </View>
  );
}
