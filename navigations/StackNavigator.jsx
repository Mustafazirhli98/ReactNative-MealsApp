import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DrawerNavigator from "./DrawerNavigator"
import MealOverView from "../screens/MealOverView"
import MealDetail from "../screens/MealDetail"
import COLORS from "../constants/Colors"

const StackNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.headerBG,
            },
            headerTintColor: COLORS.primaryTextCOLOR,
            contentStyle: {
                backgroundColor: COLORS.primaryTextCOLOR,
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