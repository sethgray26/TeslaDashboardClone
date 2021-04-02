import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./StyledButton-styles"


const StyledButton = (props) => {

    const { type, content, onPress } = props;


    const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFF";
    const textColor = type === "primary" ? "#FFFFFF" : "#171A20CC"

    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}
                style={[styles.button, { backgroundColor: backgroundColor }]}>
                <Text style={[styles.text, { color: textColor }]}> {content} </Text>
            </Pressable>
        </View>
    )
}


export default StyledButton;