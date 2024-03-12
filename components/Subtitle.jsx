import { StyleSheet, Text } from "react-native"

const Subtitle = ({ children }) => {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        margin: 10,
        fontSize: 18,
        fontWeight: "bold"
    }
})