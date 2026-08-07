import '../../global.css';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {applyDefaultFont} from '../shared/theme/applyDefaultFont';
import {RootNavigator} from './navigation/RootNavigator';

applyDefaultFont();

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
