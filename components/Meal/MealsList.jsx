import { FlatList, StyleSheet, View } from "react-native"
import MealItem from "./MealItem";

const MealsList = ({ data }) => {

    const renderedItemHelper = (itemData) => {
        const item = itemData.item;

        const mealData = {
            title: item.title,
            imageUrl: item.imageUrl,
            complexity: item.complexity,
            duration: item.duration,
            affordability: item.affordability,
            id:item.id
        }

        return (
            <MealItem {...mealData}  />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderedItemHelper} keyExtractor={item => item.id} />
        </View>
    )
}

export default MealsList

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
