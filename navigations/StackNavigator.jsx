import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DrawerNavigator from "./DrawerNavigator"
import MealOverView from "../screens/MealOverView"
import MealDetail from "../screens/MealDetail"

const StackNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#561C24",
            },
            headerTintColor: "#E8D8C4",
            contentStyle: {
                backgroundColor: "#E8D8C4"
            }
        }}>
            <Stack.Screen
                name="CategoryDrawerScreen"
                component={DrawerNavigator}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MealOverView"
                component={MealOverView}
                options={{
                    title: "Meal Overview",
                }}
            />
            <Stack.Screen
                name="MealDetail"
                component={MealDetail}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator