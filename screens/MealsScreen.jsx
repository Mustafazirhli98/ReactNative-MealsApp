import { FlatList, Text, View } from "react-native"
import { MEALS } from "../data/data"

const MealsScreen = ({ navigation, route }) => {

    const mealId = route.params.mealId

    const displayedItem = MEALS.filter(item => item.categoryIds.includes(mealId))

    const renderedItemHelper = (itemData) => {
        const item = itemData.item
        return (
            <View>
                <Text>{item.title}</Text>
            </View>
        )
    }

    return (
        <FlatList data={displayedItem} renderItem={renderedItemHelper} keyExtractor={item => item.id} />
    )
}
export default MealsScreen