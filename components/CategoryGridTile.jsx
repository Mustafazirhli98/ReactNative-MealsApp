import { Platform, Pressable, StyleSheet, Text, View } from "react-native"

const CategoryGridTile = ({ title, color, onPress }) => {



    return (
        <View style={[styles.outerContainer, { backgroundColor: color }]}>
            <Pressable android_ripple={styles.rippleColor} style={styles.button} onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text style={styles.categoriyText}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        height: 150,
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    button: {
        flex: 1
    },
    rippleColor: {
        color: "#ccc"
    },
    innerContainer: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    categoriyText: {
        fontSize: 15,
        fontWeight: "bold"
    }
})