import { Ionicons } from "@expo/vector-icons"
import { Pressable, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { addFavorite } from "../../store/favoriteSlice"

const StarIcon = ({ onPress, shape }) => {


    return (
        <Pressable
            style={({ pressed }) => [pressed && styles.pressed, styles.container]}
            onPress={onPress}
        >
            <Ionicons
                name={shape ? "star" : "star-outline"}
                color="#E8D8C4"
                size={22} />
        </Pressable >
    )
}

export default StarIcon

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    pressed: {
        opacity: 0.25
    },
})