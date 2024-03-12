import { FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES } from "../data/data"
import CategoryGridTile from "../components/CategoryGridTile"
import { useLayoutEffect } from "react"
import Star from "../components/icons/StarIcon"

const CategoryScreen = ({ navigation }) => {



    const renderedItemHelper = (itemData) => {
        const item = itemData.item

        const mealsScreenNavigator = () => {
            navigation.navigate("MealOverView", {
                mealId: item.id
            })
        }

        const categoriesData = {
            title: item.title,
            color: item.color
        }
        return (
            <CategoryGridTile {...categoriesData} onPress={mealsScreenNavigator} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={CATEGORIES} renderItem={renderedItemHelper} key={item => item.id} numColumns={2} />
        </View>
    )
}

export default CategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: "#f6e6d4"
    }
})