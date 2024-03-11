import { FlatList, StyleSheet, View } from "react-native"
import { MEALS } from "../data/data"
import MealItem from "../components/MealItem"

const MealOverView = ({ navigation, route }) => {
    const mealId = route.params.mealId

    const displayedItem = MEALS.filter(item => item.categoryIds.indexOf(mealId) >= 0)


    const renderedItemHelper = (itemData) => {
        const item = itemData.item;

        const MealDetailScreenNavigator = () => {
            navigation.navigate("MealDetail", {
                selectedMealId: item.id
            })
        }

        const mealData = {
            title: item.title,
            imageUrl: item.imageUrl,
            complexity: item.complexity,
            duration: item.duration,
            affordability: item.affordability
        }

        return (
            <MealItem {...mealData} onPress={MealDetailScreenNavigator} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedItem} renderItem={renderedItemHelper} keyExtractor={item => item.id} />
        </View>
    )
}

export default MealOverView

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
