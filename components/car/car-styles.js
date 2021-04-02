import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        height: Dimensions.get("window").height,
        width: "100%",
        backgroundColor: "white",
        position: 'relative'
    },
    header: {
        width: "100%",
        alignItems: "center",
        marginTop: "30%",
    },
    title: {
        fontSize: 40,
        fontWeight: '500'
    },
    subTitle: {
        fontSize: 16,
        color: "#5c5e62"
    },
    subTitleCTA: {
        textDecorationLine: "underline"
    },
    image: {
        height: "100%",
        width: "100%",
        position: "absolute",
        resizeMode: "cover"
    },
    buttonContainer: {
        width: "100%",
        position: "absolute",
        bottom: 50
    }
});

export default styles