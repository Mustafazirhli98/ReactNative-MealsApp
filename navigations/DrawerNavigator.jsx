import { createDrawerNavigator } from "@react-navigation/drawer"
import CategoryScreen from "../screens/CategoryScreen"
import FavoritesScreen from "../screens/FavoritesScreen"
import ListIcon from "../components/icons/ListIcon"
import DrawerStarIcon from "../components/icons/DrawerStarIcon"
import COLORS from "../constants/Colors"

const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.headerBG,
            },
            headerTintColor: COLORS.primaryTextCOLOR,
            drawerActiveBackgroundColor: COLORS.primaryTextCOLOR,
            drawerActiveTintColor: COLORS.primaryBG,
            drawerInactiveTintColor: COLORS.inactiveTintCOLOR,
            drawerStyle: {
                backgroundColor: COLORS.drawerBG
            }
        }}>
            <Drawer.Screen
                name="Categories"
                component={CategoryScreen}
                options={{
                    title: "All Categories",
                    drawerIcon: ({ color, size }) => (
                        <ListIcon name="list" color={color} size={size} />
                    )
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    title: "My Favorites",
                    drawerIcon: ({ color, size }) => (
                        <DrawerStarIcon color={color} size={size} />
                    ),
                    sceneContainerStyle: {
                        backgroundColor: COLORS.secondaryBG
                    }
                }}
            />
        </Drawer.Navigator>

    )
}

export default DrawerNavigator
