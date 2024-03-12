import { createDrawerNavigator } from "@react-navigation/drawer"
import CategoryScreen from "../screens/CategoryScreen"
import FavoritesScreen from "../screens/FavoritesScreen"
import { useLayoutEffect } from "react"
import Star from "../components/icons/StarIcon"
import { Ionicons } from "@expo/vector-icons"
import ListIcon from "../components/icons/ListIcon"
import StarIcon from "../components/icons/StarIcon"
import DrawerStarIcon from "../components/icons/DrawerStarIcon"

const DrawerNavigator = ({ navigation }) => {

    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#561C24",
            },
            headerTintColor: "#E8D8C4",
            drawerActiveBackgroundColor: "#561C24",
            drawerActiveTintColor: "#E8D8C4",
            drawerInactiveTintColor: "#9d9b99",
            drawerStyle: {
                backgroundColor: "#6D2932"
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
                    )
                }}
            />
        </Drawer.Navigator>

    )
}

export default DrawerNavigator

