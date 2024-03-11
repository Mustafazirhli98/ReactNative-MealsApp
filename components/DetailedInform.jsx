import { StyleSheet, Text, View } from "react-native"

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
        padding: 3
    },
    text: {
        color: "#5e5d5d"
    }
})