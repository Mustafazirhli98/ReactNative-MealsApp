import { createDrawerNavigator } from "@react-navigation/drawer"
import CategoryScreen from "../screens/CategoryScreen"
import FavoritesScreen from "../screens/FavoritesScreen"

const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Categories" component={CategoryScreen} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        </Drawer.Navigator>

    )
}

export default DrawerNavigator