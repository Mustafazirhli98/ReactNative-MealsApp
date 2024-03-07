import { FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES } from "../data/data"
import CategoryGridTile from "../components/CategoryGridTile"

const CategoryScreen = () => {

    const renderedItemHelper = (itemData) => {
        const item = itemData.item
        const categoriesData = {
            title: item.title,
            color: item.color
        }
        return (
            <CategoryGridTile {...categoriesData} />
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
        paddingTop: 20
    }
})