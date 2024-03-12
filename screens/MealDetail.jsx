import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/data"
import List from "../components/List"
import Subtitle from "../components/Subtitle"
import { useLayoutEffect } from "react"

const MealDetail = ({ navigation, route }) => {
    const selectedMealId = route.params.selectedMealId
    const mealDetail = MEALS.find(item => item.id === selectedMealId)

    return (

        <ScrollView>
            <View>
                <Image source={{ uri: mealDetail.imageUrl }} style={styles.img} />
            </View>
            <View>
                <Subtitle>Ingredients</Subtitle>
                <List data={mealDetail.ingredients} align="center" />
                <Subtitle>Steps</Subtitle>
                <List data={mealDetail.steps} align="left" />
            </View>
        </ScrollView >
    )
}

export default MealDetail

const styles = StyleSheet.create({
    img: {
        height: 300,
        width: "100"
    }
});