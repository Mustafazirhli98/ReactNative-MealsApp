import { StatusBar } from 'expo-status-bar';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './navigations/StackNavigator';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}

