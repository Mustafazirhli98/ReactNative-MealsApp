import { ScrollView, StyleSheet, Text, View } from "react-native"

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
        backgroundColor: "#6a232d",
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 8
    },
    text: {
        fontSize: 14,
        color: "#E8D8C4",
        padding: 10,
        lineHeight: 20
    }
})

