import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DrawerNavigator from "./DrawerNavigator"
import MealsScreen from "../screens/MealsScreen"

const StackNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={DrawerNavigator} options={{
                headerShown: false
            }} />
            <Stack.Screen name="MealsScreen" component={MealsScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator