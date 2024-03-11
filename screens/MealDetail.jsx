import { Image, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/data"

const MealDetail = ({ navigation, route }) => {
    const selectedMealId = route.params.selectedMealId
    const mealDetail = MEALS.find(item => item.id === selectedMealId)
    return (
        <View>
            <View>
                <Image source={{ uri: mealDetail.imageUrl }} style={styles.img}/>
            </View>
            <View>
                <Text>Ingredients</Text>
                <Text></Text>
                <Text>Steps</Text>
                <Text></Text>
            </View>
        </View>
    )
}

export default MealDetail

const styles = StyleSheet.create({
    img: {
        height: 300,
        width: "100"
    }
});