import { FlatList, StyleSheet, View } from "react-native"
import { MEALS } from "../data/data"
import MealItem from "../components/Meal/MealItem"
import MealsList from "../components/Meal/MealsList"

const MealOverView = ({ navigation, route }) => {
    const mealId = route.params.mealId

    const displayedItem = MEALS.filter(item => item.categoryIds.indexOf(mealId) >= 0)


    return (
        <MealsList data={displayedItem} />
    )
}

export default MealOverView

