import { ScrollView, StyleSheet, Text, View } from "react-native"
import COLORS from "../constants/Colors"

const List = ({ data, align }) => {

    return (
        data.map(item => (
            <View key={item} style={styles.container}>
                <Text style={[styles.text, { textAlign: align }]}>{item}</Text>
            </View>
        ))
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primaryBG,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 8
    },
    text: {
        fontSize: 14,
        color: COLORS.primaryTextCOLOR,
        padding: 10,
        lineHeight: 20
    }
})

