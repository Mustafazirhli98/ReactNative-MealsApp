import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DrawerNavigator from "./DrawerNavigator"
import MealOverView from "../screens/MealOverView"
import MealDetail from "../screens/MealDetail"

const StackNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="CategoryDrawerScreen" component={DrawerNavigator} options={{
                headerShown: false
            }} />
            <Stack.Screen name="MealOverView" component={MealOverView} />
            <Stack.Screen name="MealDetail" component={MealDetail} />
        </Stack.Navigator>
    )
}

export default StackNavigator