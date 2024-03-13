import { StatusBar } from 'expo-status-bar';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './navigations/StackNavigator';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

