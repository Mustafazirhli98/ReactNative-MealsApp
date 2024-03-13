import { useDispatch, useSelector } from "react-redux"
import MealsList from "../components/Meal/MealsList"
import { MEALS } from "../data/data"
import { Alert, StyleSheet, Text, View } from "react-native"
import { useLayoutEffect } from "react"
import COLORS from "../constants/Colors"
import TrashIcon from "../components/icons/TrashIcon"
import { deleteAllFavorites } from "../store/favoriteSlice"

const FavoritesScreen = ({ navigation }) => {
    const favoriteIds = useSelector(state => state.favoriteSlice.favoritesList)
    const favoriteData = MEALS.filter(item => favoriteIds.includes(item.id))
    const dispatch = useDispatch()

    const deleteAllHandler = () => {
        dispatch(showDeleteAlert())
    }

    const showDeleteAlert = () => {
        Alert.alert(AlertTEXT.deleteAll.title, AlertTEXT.deleteAll.body, [
            { text: AlertTEXT.deleteAll.buttonLeft, style: "cancel" },
            {
                text: AlertTEXT.deleteAll.buttonRight, style: "default",
                onPress: () => dispatch(deleteAllFavorites())
            },
        ])
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TrashIcon size={20} color={COLORS.primaryTextCOLOR} onPress={showDeleteAlert} />
            ),
        })
    }, [navigation, deleteAllHandler])


    return (

        favoriteData.length > 0 ?
            <MealsList data={favoriteData} />
            :
            <View style={styles.container}>
                <Text style={styles.text}>Nothing to see here yet.</Text>
            </View>

    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 15,
    }
})