import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import DetailedInform from "../DetailedInform"
import { useNavigation } from "@react-navigation/native"

const MealItem = ({ title, imageUrl, complexity, duration, affordability, id }) => {

    const navigation = useNavigation()

    const MealDetailScreenNavigator = () => {
        navigation.navigate("MealDetail", {
            selectedMealId: id
        })
    }

    return (
        <View style={styles.outerContaier}>
            <Pressable
                android_ripple={styles.rippleColor}
                style={({ pressed }) => pressed ? styles.iosRipple : null}
                onPress={MealDetailScreenNavigator}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.img} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <DetailedInform complexity={complexity} duration={duration} affordability={affordability} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    outerContaier: {
        margin: 16,
        flex: 1,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        borderRadius: 8,
        backgroundColor: "#fff",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    button: {
        overflow: "hidden"
    },
    innerContainer: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        overflow: "hidden",
    },
    img: {
        height: 200,
        width: "100%",
    },
    title: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        padding: 5
    },
    rippleColor: {
        color: "#ccc"
    },
    iosRipple: {
        opacity: Platform.OS === "ios" ? 0.25 : 1
    }
})