import '../../global.css';
import {QueryClientProvider} from '@tanstack/react-query';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {queryClient} from '../shared/api/queryClient';
import {applyDefaultFont} from '../shared/theme/applyDefaultFont';
import {RootNavigator} from './navigation/RootNavigator';

applyDefaultFont();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
