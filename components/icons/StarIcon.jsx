import { Ionicons } from "@expo/vector-icons"
import { Pressable, StyleSheet } from "react-native"

const StarIcon = ({ color, size }) => {
    return (
        <Pressable style={({ pressed }) => [pressed && styles.pressed, styles.container]} >
            <Ionicons name="star-outline" color="#E8D8C4" size={22} />
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