import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

