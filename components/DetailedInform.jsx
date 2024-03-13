import { StyleSheet, Text, View } from "react-native"
import COLORS from "../constants/Colors"

const DetailedInform = ({ complexity, affordability, duration }) => {
    return (
        <View style={styles.details}>
            <Text style={styles.text}>{duration}m</Text>
            <Text style={styles.text}>{complexity}</Text>
            <Text style={styles.text}>{affordability}</Text>
        </View>
    )
}
export default DetailedInform

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        padding: 5
    },
    text: {
        color: COLORS.disabledCOLOR
    }
})