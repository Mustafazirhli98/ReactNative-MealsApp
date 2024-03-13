import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import COLORS from "../constants/Colors"

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
        margin: 10,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        elevation: 4,
        shadowColor: COLORS.blackCOLOR,
        shadowOpacity: 0.25,
        shadowOffset: { height: 1, width: 1 },
        shadowRadius: 8
    },
    button: {
        flex: 1
    },
    rippleColor: {
        color: COLORS.softGrayCOLOR
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