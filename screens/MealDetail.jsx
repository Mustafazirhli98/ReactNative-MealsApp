import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/data"
import List from "../components/List"
import Subtitle from "../components/Subtitle"
import { useLayoutEffect } from "react"
import StarIcon from "../components/icons/StarIcon"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite } from "../store/favoriteSlice"

const MealDetail = ({ navigation, route }) => {
    const selectedMealId = route.params.selectedMealId
    const mealDetail = MEALS.find(item => item.id === selectedMealId)
    const favoritesList = useSelector((state) => state.favoriteSlice.favoritesList);
    const isMealFavorite = favoritesList.includes(selectedMealId)

    const dispatch = useDispatch()

    const favoritesHandler = () => {
        if (isMealFavorite) {
            dispatch(removeFavorite(selectedMealId))
        } else dispatch(addFavorite(selectedMealId))
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Meal Details",
            headerRight: ({ color, size }) => (
                <StarIcon
                    color={color}
                    size={size}
                    onPress={favoritesHandler}
                    shape={isMealFavorite}
                />
            )
        })
    }, [navigation, favoritesHandler])

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