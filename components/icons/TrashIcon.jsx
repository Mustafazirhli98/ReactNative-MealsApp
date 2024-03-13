import { Entypo } from "@expo/vector-icons"
import COLORS from "../../constants/Colors"
import { Pressable, StyleSheet } from "react-native"

const TrashIcon = ({ onPress, color, size }) => {
    return (
        <Pressable
            style={({ pressed }) => [pressed && styles.pressed, styles.container]}
            onPress={onPress}
        >
            <Entypo name="trash" size={size} color={color} />
        </Pressable>
    )
}

export default TrashIcon

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    pressed: {
        opacity: 0.25
    }
})